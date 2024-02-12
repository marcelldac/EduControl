import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const prisma = new PrismaClient();

const emailVerification = async (email: string) => {
  const emailExists = await prisma.student.findUnique({ where: { email } });
  return emailExists;
};
const validationSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  email: z.string().email("Email should be in a valid format").optional(),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .optional(),
});
type Student = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export const readStudents = async () => {
  const students = await prisma.student.findMany();
  return students;
};

export const createStudent = async (student: Student) => {
  const data = {
    firstName: student.firstName,
    lastName: student.lastName,
    email: student.email,
    password: student.password,
  };

  const validation = validationSchema.safeParse(data);

  if (!validation.success) {
    return { data: { message: validation, error: true }, status: 400 };
  }

  const emailExists = await emailVerification(student.email);

  if (emailExists) {
    return {
      data: { message: "Email is already used", error: true },
      status: 400,
    };
  }

  const createStudent = await prisma.student.create({ data });

  return { data: { message: createStudent, error: false }, status: 201 };
};

export const updateStudent = async (student: Student, id: string) => {
  const data = {
    firstName: student.firstName,
    lastName: student.lastName,
    email: student.email,
    password: student.password,
  };

  const validation = validationSchema.safeParse(data);

  if (!validation.success) {
    return { data: { message: validation, error: true }, status: 400 };
  }

  const updateStudent = await prisma.student.update({
    where: { id },
    data,
  });

  return { data: { message: updateStudent, error: false }, status: 200 };
};

export const deleteStudent = async (id: string) => {
  const remove = await prisma.student.delete({ where: { id } });
  return { data: remove, status: 204 };
};

const studentService = {
  readStudents,
  createStudent,
  updateStudent,
  deleteStudent,
};

export default studentService;
