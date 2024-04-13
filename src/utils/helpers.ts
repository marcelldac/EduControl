import { Teacher } from "./types";
import { teacherValidationSchema } from "./validation";
import prisma from "../../prisma/prisma-client";

//Teacher

export const validateTeacher = (teacher: Teacher) => {
  const validation = teacherValidationSchema.safeParse(teacher);
  return validation;
};

//Student
export const findStudentByID = async (id: string) => {
  const student = await prisma.student.findUnique({
    where: { id },
  });
  return student;
};
export const findStudentByEmail = async (email: string) => {
  const student = await prisma.student.findUnique({
    where: { email },
  });
  return student;
};
