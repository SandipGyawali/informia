import { defineConfig } from "drizzle-kit";
import { ENV } from "@/lib/env";

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: ENV.DATABASE_URL,
  },
  verbose: process.env.NODE_ENV === "development",
  strict: true,
});
