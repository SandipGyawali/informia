import { schema } from "@/app/(auth)/schama";
import { publicProcedure } from "../trpc";
import * as z from "zod";
import { TRPCClientError } from "@trpc/client";
import { db } from "@/db";
import { users } from "@/db/user";
import * as dbSchema from "@/db/schema";
import { eq } from "drizzle-orm";

const _schema = z.object({
  data: schema.signup,
  action: z.enum(["otp", "create"]),
});

export const signup = publicProcedure
  .input(_schema)
  .mutation(async ({ input, ctx }) => {
    const inputData = input.data;
    // if user already logged in
    if (ctx.user) return new TRPCClientError("Already Logged In");

    // check if user exists or not
    const user = (
      await db
        .select()
        .from(users)
        .where(eq(dbSchema.users.email, inputData.email))
    ).at(0);

    if (user) return "user_exists";
  });
