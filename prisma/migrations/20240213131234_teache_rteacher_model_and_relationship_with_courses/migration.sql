-- AlterTable
ALTER TABLE "Courses" ADD COLUMN     "teacherID" TEXT;

-- CreateTable
CREATE TABLE "Teacher" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "isCoordinator" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Teacher_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_email_key" ON "Teacher"("email");

-- AddForeignKey
ALTER TABLE "Courses" ADD CONSTRAINT "Courses_teacherID_fkey" FOREIGN KEY ("teacherID") REFERENCES "Teacher"("id") ON DELETE SET NULL ON UPDATE CASCADE;
