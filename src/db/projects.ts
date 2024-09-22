import { pgEnum, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { users } from "./user";

export const projectType = pgEnum("project_type", ["system", "user"]);

export const projects = pgTable("projects", {
  id: uuid("id").primaryKey().defaultRandom().notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
  name: text("name").notNull(),
  type: projectType("project_type"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").$onUpdateFn(() => new Date()),
});
