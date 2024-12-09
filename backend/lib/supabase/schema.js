import {
  boolean,
  pgTable,
  text,
  timestamp,
  uuid,
  Reference,
  integer,
  pgEnum,
  varchar,
  jsonb,
} from "drizzle-orm/pg-core";

export const profile = pgTable("profile", {
  id: uuid("id").primaryKey().notNull(),
  email: text("email"),
  username: text("username"),
  profileImg: text("profile_img"),
  subcriptionPlan: text('plan_name').default('Free'),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
})