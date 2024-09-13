import { initTRPC } from "@trpc/server";
import SuperJSON from "superjson";
import { Context } from "@/app/api/trpc/[trpc]/route";

/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
const t = initTRPC.context<Context>().create({
  transformer: SuperJSON,
});

/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */
export const router = t.router;
export const publicProcedure = t.procedure;
export const userProcedure = t.procedure.use((opts) => {
  return opts.next({
    ctx: {},
  });
});
export const guestProcedure = t.procedure.use((opts) => {
  return opts.next({
    ctx: {},
  });
});
