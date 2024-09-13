import { createEnv } from "@t3-oss/env-nextjs";
import * as z from "zod";

export const ENV = createEnv({
  server: {
    OPENAI_API_KEY: z.string(),
    GEMINI_API_KEY: z.string(),
    REPLICATE_API_KEY: z.string(),
    NODE_ENV: z.string(),
    DATABASE_URL: z.string(),
  },
  client: {},
  runtimeEnv: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
    REPLICATE_API_KEY: process.env.REPLICATE_API_KEY,
    NODE_ENV: process.env.NODE_ENV,
    DATABASE_URL: process.env.DATABASE_URL,
  },
});
