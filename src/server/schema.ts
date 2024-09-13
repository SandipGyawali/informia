import { z } from "zod";

export const passwordSchema = z
  .string({
    errorMap: () => ({
      message: "Please enter your password.",
    }),
  })
  .min(8, "Password must be atleast 8 characters long.")
  .max(32, "Password must be less than 32 characters long.")
  .regex(/[a-z]/, "Password must contain atleast 1 lowercase character.")
  .regex(/[A-Z]/, "Password must contain atleast 1 uppercase character.")
  .regex(/[0-9]/, "Password must contain atleast 1 number.")
  .regex(
    /[!@#$%^&*()_+{}[\]\\|:"'<>,./`~ ]/,
    "Password must contain atleast 1 symbol."
  );

export const phoneSchema = z
  .string({
    errorMap: () => ({
      message: "Please enter your phone number.",
    }),
  })
  .regex(/^9[78][0-9]{8}$/, "Please enter a valid phone number.");
