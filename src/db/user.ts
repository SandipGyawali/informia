import {
  pgEnum,
  pgTable,
  text,
  timestamp,
  varchar,
  boolean,
} from "drizzle-orm/pg-core";

export const userStatus = pgEnum("status", ["verified", "unverified", "reset"]);
export const userType = pgEnum("user_type", ["user"]);

export const users = pgTable("users", {
  id: text("id").primaryKey(),
  username: varchar("username", { length: 100 }).notNull(),
  email: varchar("email", { length: 100 }).notNull().unique(),
  password: varchar("password", { length: 256 }).notNull(),
  emailVerified: boolean("email_verified").default(false),
  userType: userType("user_type").default("user"),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at")
    .defaultNow()
    .$onUpdateFn(() => new Date()),
});
