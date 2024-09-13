import { TRPCClientError } from "@trpc/client";
import { publicProcedure } from "../trpc";
import { db } from "@/db";
import * as dbSchema from "@/db/schema";
import { eq } from "drizzle-orm";
import { schema } from "@/app/(auth)/schama";
import { compare } from "bcrypt";
import { lucia } from "@/lib/lucia";
import { cookies } from "next/headers";

export const login = publicProcedure
  .input(schema.login)
  .mutation(async ({ input, ctx }) => {
    if (ctx.user) throw new TRPCClientError("Already Logged In.");

    const user = (
      await db
        .select()
        .from(dbSchema.users)
        .where(eq(dbSchema.users.email, input.email))
    ).at(0);

    if (!user) return "invalid_credentials";

    if (!(await compare(user.password, input.password)))
      return "invalid_credentials";

    const session = await lucia.createSession(user.id, {
      email: user.email,
      username: user.username,
      userType: user.userType ?? "user",
    });

    console.log({
      email: user.email,
      username: user.username,
      userType: user.userType,
    });

    const sessionCookie = lucia.createSessionCookie(session.id);

    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );

    return user.userType ?? "user";
  });
