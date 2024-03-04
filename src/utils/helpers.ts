import prisma from "../../prisma/prisma-client";

export const findTeacherByEmail = async (email: string) => {
  const teacher = await prisma.teacher.findUnique({ 
    where: { email }
   });
  return teacher;
};

export const findStudentByEmail = async (email: string) => {
  const student = await prisma.student.findUnique({
    where: {email}
  })
  return student
}