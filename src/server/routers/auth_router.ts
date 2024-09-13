import { router, publicProcedure } from "../trpc";
import { forgot } from "../auth/forgot";
import { login } from "../auth/login";
import { signup } from "../auth/signup";

export const authRouter = router({
  login,
  signup,
  forgot,
});
