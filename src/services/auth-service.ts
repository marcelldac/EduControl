import jwt from "jsonwebtoken";

import { findStudentByEmail } from "../utils/helpers";
import { findTeacherByEmail } from "./teacher-service";

export const login = async (email: string, password: string) => {
  if (!email || !password) {
    return {
      data: { message: "E-mail and Password are Required", error: true },
      status: 401,
    };
  }

  const student = await findStudentByEmail(email);
  const teacher = await findTeacherByEmail(email);

  if (student) {
    if (email === student.email && password === student.password) {
      const token = jwt.sign({ id: student.id }, process.env.JWT_SECRET ?? "", {
        expiresIn: "8h",
      });

      const { password: _, ...studentLogin } = student;

      return {
        data: {
          student: studentLogin,
          token,
        },
        status: 200,
      };
    } else {
      return {
        data: {
          message: "E-mail or password are wrong",
          error: true,
        },
        status: 401,
      };
    }
  }

  if (teacher) {
    if (email === teacher.email && password === teacher.password) {
      const token = jwt.sign({ id: teacher.id }, process.env.JWT_SECRET ?? "", {
        expiresIn: "8h",
      });

      const { password: _, ...teacherLogin } = teacher;

      return {
        data: {
          student: teacherLogin,
          token,
        },
        status: 200,
      };
    } else {
      return {
        data: {
          message: "E-mail or password are wrong",
          error: true,
        },
        status: 400,
      };
    }
  }

  if (!teacher && !student) {
    return { data: { message: "User not found", error: true }, status: 404 };
  }

  return { data: { message: "Error", error: true }, status: 500 };
};

export default login;
