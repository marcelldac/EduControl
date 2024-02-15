import prisma from "../../prisma/prisma-client";

export const readCourses = async () => {
  const courses = await prisma.courses.findMany({
    include: {
      students: true,
    },
  });
  return courses;
};

export const createCourses = async (courseName: string) => {
  const data = {
    name: courseName,
  };

  const doesCourseExists = await prisma.courses.findUnique({
    where: data,
  });

  if (doesCourseExists) {
    return {
      data: { message: "Course already exists", error: true },
      status: 400,
    };
  }

  const course = await prisma.courses.create({ data });
  return { data: { message: course, error: false }, status: 201 };
};

export const updateCourses = async (courseName: string, id: string) => {
  const data = {
    name: courseName,
  };
  const course = await prisma.courses.update({ where: { id }, data });
  return { data: { message: course, error: false }, status: 200 };
};

export const removeCourses = async (id: string) => {
  const remove = await prisma.courses.delete({ where: { id } });
  return { data: remove, status: 204 };
};

const courseService = {
  readCourses,
  createCourses,
  updateCourses,
  removeCourses,
};

export default courseService;
