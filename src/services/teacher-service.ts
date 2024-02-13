import { teacherValidationSchema } from "../utils/validation";
import { Teacher } from "../utils/types";
import prisma from "../../prisma/prisma-client";

export const readTeacher = async () => {
  const teacher = await prisma.teacher.findMany({
    include: {
      courses: true,
    },
  });
  return teacher;
};

const findTeacherByEmail = async (email: string) => {
  const emailExists = await prisma.teacher.findUnique({ where: { email } });
  return emailExists;
};

export const createTeacher = async (teacher: Teacher, courseName: string) => {
  const data: Teacher = {
    name: teacher.name,
    email: teacher.email,
    isCoordinator: teacher.isCoordinator,
  };

  const validation = teacherValidationSchema.safeParse(data);

  if (!validation.success) {
    return { data: { message: validation, error: true }, status: 400 };
  }

  const emailExists = await findTeacherByEmail(teacher.email);

  if (emailExists) {
    return {
      data: { message: "Email is already used", error: true },
      status: 400,
    };
  }

  const createTeacher = await prisma.teacher.create({
    data: {
      name: teacher.name,
      email: teacher.email,
      isCoordinator: teacher.isCoordinator,
      courses: {
        connect: { name: courseName },
      },
    },
  });

  return { data: { message: createTeacher, error: false }, status: 201 };
};

export const updateTeacher = async (teacher: Teacher, id: string) => {
  const data: Teacher = {
    name: teacher.name,
    email: teacher.email,
    isCoordinator: teacher.isCoordinator,
  };

  const validation = teacherValidationSchema.safeParse(data);

  if (!validation.success) {
    return { data: { message: validation, error: true }, status: 400 };
  }

  const updateTeacher = await prisma.teacher.update({
    where: { id },
    data,
  });

  return { data: { message: updateTeacher, error: false }, status: 200 };
};

export const removeTeacher = async (id: string) => {
  const removeTeacher = await prisma.teacher.delete({ where: { id } });
  return { data: removeTeacher, status: 204 };
};

const teacherService = {
  readTeacher,
  createTeacher,
  updateTeacher,
  removeTeacher,
};

export default teacherService;
