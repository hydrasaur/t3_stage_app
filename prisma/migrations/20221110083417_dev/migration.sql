/*
  Warnings:

  - You are about to drop the column `details` on the `LogPost` table. All the data in the column will be lost.
  - Added the required column `info` to the `LogPost` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_LogPost" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date" TEXT NOT NULL,
    "info" TEXT NOT NULL
);
INSERT INTO "new_LogPost" ("date", "id") SELECT "date", "id" FROM "LogPost";
DROP TABLE "LogPost";
ALTER TABLE "new_LogPost" RENAME TO "LogPost";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
