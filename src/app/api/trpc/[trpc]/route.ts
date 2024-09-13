import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "@/server";
import { NextRequest } from "next/server";
import { getUser } from "@/lib/lucia";

type ContextOptions = {
  req: NextRequest;
  resHeader: Headers;
  info: any; //should be TRPCRequestInfo
};

async function createContext({ ...props }: ContextOptions) {
  const user = await getUser();

  return Object.assign(
    {},
    {
      user,
    },
    props
  );
}

function handler(req: Request) {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: createContext as () => Promise<Context>,
  });
}

export { handler as GET, handler as POST };
export type Context = Awaited<ReturnType<typeof createContext>>;
