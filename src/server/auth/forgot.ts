import { publicProcedure } from "../trpc";

export const forgot = publicProcedure
  .input({})
  .mutation(async ({ input, ctx }) => {});
