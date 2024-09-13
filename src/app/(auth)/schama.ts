import { passwordSchema } from "@/server/schema";
import * as z from "zod";

const schema = {
  login: z.object({
    email: z
      .string({ errorMap: () => ({ message: "Please enter a valid email." }) })
      .trim()
      .min(4)
      .email(),
    password: passwordSchema,
  }),
  signup: z.object({
    username: z
      .string({ errorMap: () => ({ message: "Please enter your full name." }) })
      .trim()
      .min(2),
    email: z
      .string({ errorMap: () => ({ message: "Please enter your email." }) })
      .trim()
      .email(),
    password: passwordSchema,
    otp: z.string(),
  }),
  forgot: z.object({
    email: z
      .string({ errorMap: () => ({ message: "Please enter a valid email." }) })
      .trim()
      .min(4)
      .email(),
    password: passwordSchema.optional(),
    confirm_password: passwordSchema.optional(),
    otp: z.string(),
  }),
};

export { schema };
