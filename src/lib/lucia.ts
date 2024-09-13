import { DatabaseSession, Lucia, TimeSpan } from "lucia";
import { DrizzlePostgreSQLAdapter } from "@lucia-auth/adapter-drizzle";
import { db } from "@/db";
import { sessionTable } from "@/db/session";
import { users } from "@/db/user";
import { cookies } from "next/headers";
import { cache } from "react";

const adapter = new DrizzlePostgreSQLAdapter(db, sessionTable, users);

export const lucia = new Lucia(adapter, {
  getSessionAttributes: (attributes) => {
    return {
      username: attributes.username,
      email: attributes.email,
      userType: attributes.userType,
    };
  },
  sessionExpiresIn: new TimeSpan(1, "h"),
  sessionCookie: {
    name: "__auth__",
    expires: false,
    attributes: {
      secure: process.env.NODE_ENV === "production",
    },
  },
});

export const getUser = cache(async () => {
  const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null;
  if (!sessionId) return null;
  const { session } = await lucia.validateSession(sessionId);
  try {
    if (session && session.fresh) {
      const sessionCookie = lucia.createSessionCookie(session.id);
      cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
      );
    }
    if (!session) {
      const sessionCookie = lucia.createBlankSessionCookie();
      cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
      );
    }
  } catch {
    // error handler
  }
  return session;
});

type User = typeof users;

declare module "lucia" {
  interface Register {
    lucia: typeof lucia;
    DatabaseSessionAttributes: DatabaseSessionAttributes;
  }

  interface DatabaseSessionAttributes {
    username: User["username"];
    email: User["email"];
    userType: NonNullable<User["userType"]>;
  }
}
