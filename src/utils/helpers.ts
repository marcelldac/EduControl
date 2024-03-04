import jwt from "jsonwebtoken";
import { Request, Response } from "express";

import { JwtPayload } from "./types";
import prisma from "../../prisma/prisma-client";

export const findTeacherByEmail = async (email: string) => {
  const teacher = await prisma.teacher.findUnique({
    where: { email },
  });
  return teacher;
};

export const findStudentByEmail = async (email: string) => {
  const student = await prisma.student.findUnique({
    where: { email },
  });
  return student;
};

export async function getUserProfile(req: Request, res: Response) {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ message: "Unauthorized", error: false });
    }

    const token = authorization.split(" ")[1];

    const { id } = jwt.verify(
      token,
      process.env.JWT_SECRET ?? ""
    ) as JwtPayload;

    const student = await prisma.student.findUnique({
      where: { id },
    });

    const teacher = await prisma.teacher.findUnique({
      where: { id },
    });

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
