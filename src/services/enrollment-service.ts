import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: ["query"],
});

export const enrollmentByID = async (studentID: string, courseID: string) => {
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

export const enrollmentByEmail = async (
  studentEmail: string,
  courseName: string
) => {
  const enroll = await prisma.student.update({
    where: { email: studentEmail },
    data: {
      courses: {
        connect: { name: courseName },
      },
    },
  });
  return enroll;
};

export const unenrollmentByID = async (studentID: string, courseID: string) => {
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

export const unenrollmentByEmail = async (
  studentEmail: string,
  courseName: string
) => {
  const enroll = await prisma.student.update({
    where: { email: studentEmail },
    data: {
      courses: {
        disconnect: { name: courseName },
      },
    },
  });
  return enroll;
};
