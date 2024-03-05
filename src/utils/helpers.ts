import jwt from "jsonwebtoken";
import { Request, Response } from "express";

import { JwtPayload } from "./types";
import prisma from "../../prisma/prisma-client";

//Teacher
export const findTeacherByEmail = async (email: string) => {
  const teacher = await prisma.teacher.findUnique({
    where: { email },
  });
  return teacher;
};
export const findTeacherByID = async (id: string) => {
  const teacher = await prisma.teacher.findUnique({
    where: { id },
  });
  return teacher;
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

//JWT
export const getJwtToken = (authorization: string) => {
  const token = authorization.split(" ")[1];
  return token;
};

export const verifyJwt = (token: string) => {
  const { id } = jwt.verify(token, process.env.JWT_SECRET ?? "") as JwtPayload;
  return id;
};

export const getUserID = (token: string) => {
  const id = verifyJwt(token);
  return id;
};

export async function getUserProfile(req: Request, res: Response) {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ message: "Unauthorized", error: false });
    }

    const token = getJwtToken(authorization);
    const id = getUserID(token);

    const student = await findStudentByID(id);
    const teacher = await findTeacherByID(id);

    if (!teacher && !student) {
      return res.status(401).json({ message: "Unauthorized", error: false });
    }

    if (student) {
      const { password: _, ...loggedStudent } = student;
      return res.json(loggedStudent);
    }

    if (teacher) {
      const { password: _, ...loggedTeacher } = teacher;
      return res.json(loggedTeacher);
    }
  } catch (e) {
    return res.status(500).json({ message: e, error: true });
  }
}
