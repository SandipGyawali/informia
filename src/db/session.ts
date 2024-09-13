import { pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core";
import { users, userType } from "./user";

const sessionTable = pgTable("session", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
  username: varchar("username", { length: 100 }).notNull(),
  email: varchar("email", { length: 100 }).notNull(),
  userType: userType("user_type").default("user"),
  expiresAt: timestamp("expires_at", {
    withTimezone: true,
    mode: "date",
  }).notNull(),
});

export { sessionTable };
