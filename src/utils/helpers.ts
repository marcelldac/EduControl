import prisma from "../../prisma/prisma-client";

export const findTeacherByEmail = async (email: string) => {
  const emailExists = await prisma.teacher.findUnique({ where: { email } });
  return emailExists;
};
