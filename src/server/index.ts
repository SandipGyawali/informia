import { router } from "./trpc";
import { authRouter } from "./routers/auth_router";

const appRouter = router({
  auth: authRouter,
});

export type AppRouter = typeof appRouter;
export { appRouter };
