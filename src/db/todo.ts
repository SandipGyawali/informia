import {
  boolean,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";
import { users } from "./user";
import { projects } from "./projects";
import { labels } from "./lables";

export const priorityEnum = pgEnum("priority", ["low", "medium", "high"]);

export const todos = pgTable("todos", {
  id: uuid("id").primaryKey().defaultRandom().notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
  projectId: uuid("project_id")
    .notNull()
    .references(() => projects.id),
  labelId: uuid("label_id")
    .notNull()
    .references(() => labels.id),
  taskName: text("task_name").notNull(),
  description: text("description"),
  priority: priorityEnum("priority").notNull().default("medium"),
  isCompleted: boolean("is_completed").default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").$onUpdateFn(() => new Date()),
});

export const subTodos = pgTable("todos", {
  id: uuid("id").primaryKey().defaultRandom().notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
  projectId: text("project_id")
    .notNull()
    .references(() => projects.id),
  labelId: text("label_id")
    .notNull()
    .references(() => labels.id),
  parentId: uuid("parent_id").references(() => todos.id),
  taskName: text("task_name").notNull(),
  description: text("description"),
  priority: priorityEnum("priority").notNull().default("medium"),
  isCompleted: boolean("is_completed").default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").$onUpdateFn(() => new Date()),
});
