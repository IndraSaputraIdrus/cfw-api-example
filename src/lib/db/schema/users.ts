import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

const usersTable = sqliteTable("users", {
  id: integer("id", { mode: "number" }).primaryKey(),
  name: text("name").notNull(),
  username: text("username").notNull(),
  phone: text("phone").notNull(),
  street: text("street").notNull(),
  city: text('city').notNull(),
  zipCode: text("zip_code").notNull()
})

export default usersTable
