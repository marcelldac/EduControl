import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: ["query"],
});

export const enrollment = async (studentID: string, courseID: string) => {
  const enroll = await prisma.student.update({
    where: { id: studentID },
    data: {
      courses: {
        connect: { id: courseID },
      },
    },
  });
  return enroll;
};
export const unenrollment = async (studentID: string, courseID: string) => {
  const unenroll = await prisma.student.update({
    where: { id: studentID },
    data: {
      courses: {
        disconnect: { id: courseID },
      },
    },
  });
  return unenroll;
};
