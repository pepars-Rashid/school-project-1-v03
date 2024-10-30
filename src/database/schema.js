import { integer, json, pgTable, varchar } from "drizzle-orm/pg-core";

export const gradeLevelsTable = pgTable("grade levels", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    gradeLevel: varchar("grade level", { length: 255 }).notNull(),
})

export const classTable = pgTable("classes", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    gradeLevelId: integer("grade level id").references(() => gradeLevelsTable.id),
    class: varchar("class", { length: 255 }).notNull(),
})

export const studentsTable = pgTable("students", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    firstName: varchar("first name", { length: 255 }).notNull(),
    lastName: varchar("last name", { length: 255 }).notNull(),
    fatherName: varchar("father name", { length: 255 }).notNull(),
    motherName: varchar("mother name", { length: 255 }).notNull(),
    classId: integer("class id").references(() => classTable.id),
    grades: varchar("grades", { length: 255 }).array(),
    notes: varchar("notes", { length: 255 }).array(),
    username: varchar("username", { length: 255 }).notNull().unique(),
    password: varchar("password", { length: 255 }).notNull().unique(),
    endpoint: json("user endpoint")
})