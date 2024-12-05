import { mysqlTable, primaryKey, int, varchar } from "drizzle-orm/mysql-core"

export const user = mysqlTable("user", {
	id: int().autoincrement().notNull(),
	fullname: varchar({ length: 250 }).notNull(),
	email: varchar({length: 255}).notNull().unique('emailIndex'),
	tel: varchar({ length: 250 }).notNull(),
},
(table) => {
	return {
		userId: primaryKey({ columns: [table.id], name: "user_id"}),
	}
});
