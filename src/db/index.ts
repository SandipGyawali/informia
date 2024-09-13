import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { ENV } from "@/lib/env";
import * as schema from "./schema";

/**
 * cache the database connection in development
 */
const globalForDb = globalThis as unknown as {
  conn: Pool | undefined;
};

const conn =
  globalForDb.conn ?? new Pool({ connectionString: ENV.DATABASE_URL, max: 1 });
if (ENV.NODE_ENV !== "production") globalForDb.conn = conn;

export const db = drizzle(conn, { schema, logger: true });
