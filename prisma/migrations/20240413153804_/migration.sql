/*
  Warnings:

  - You are about to drop the column `user` on the `Admin` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `Admin` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Admin` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "admin"."Admin_user_key";

-- AlterTable
ALTER TABLE "admin"."Admin" DROP COLUMN "user",
ADD COLUMN     "email" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "admin"."Admin"("email");
