import { pgEnum, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { users } from "./user";

export const labelType = pgEnum("label_type", ["user", "system"]);

export const labels = pgTable("labels", {
  id: uuid("id").primaryKey().defaultRandom().notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
  name: text("name").notNull(),
  type: labelType("label_type"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").$onUpdateFn(() => new Date()),
});
