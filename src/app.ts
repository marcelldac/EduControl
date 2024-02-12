import express, { Request, Response } from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const server = express();
const port = process.env.PORT || 3333;

const validationSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email("Email should be in a valid format"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

const prisma = new PrismaClient();

server.use(cors());
server.use(express.json());

const emailVerification = async (email: string) => {
  const emailExists = await prisma.student.findUnique({ where: { email } });
  return emailExists;
};

server.get("/api/v1/students", async (request: Request, response: Response) => {
  try {
    const students = await prisma.student.findMany();
    return response.status(200).json({ message: students, error: false });
  } catch (error) {
    return response.status(500).json({ message: error, error: true });
  }
});

server.post(
  "/api/v1/students",
  async (request: Request, response: Response) => {
    try {
      const { firstName, lastName, email, password } = request.body;

      const validation = validationSchema.safeParse({
        firstName,
        lastName,
        email,
        password,
      });

      if (!validation.success) {
        return response.status(400).json({ message: validation, error: true });
      }

      const student = {
        firstName,
        lastName,
        email,
        password,
      };

      const emailExists = await emailVerification(email);
      if (emailExists) {
        return response
          .status(400)
          .json({ message: "Email is already used", error: true });
      }

      const createStudent = await prisma.student.create({ data: student });
      return response
        .status(201)
        .json({ message: createStudent, error: false });
    } catch (error) {
      return response.status(500).json({ message: error, error: true });
    }
  }
);

server.put(
  "/api/v1/students/:id",
  async (request: Request, response: Response) => {
    try {
      const { firstName, lastName, email, password } = request.body;
      const { id } = request.params;

      const validation = validationSchema.safeParse({
        firstName,
        lastName,
        email,
        password,
      });

      if (!validation.success) {
        return response.status(400).json({ message: validation, error: true });
      }

      const updateStudent = await prisma.student.update({
        where: { id },
        data: { firstName, lastName, email, password },
      });

      return response
        .status(200)
        .json({ message: updateStudent, error: false });
    } catch (error) {
      return response.status(500).json({ message: error, error: true });
    }
  }
);

server.delete(
  "/api/v1/students/:id",
  async (request: Request, response: Response) => {
    try {
      const { id } = request.params;

      await prisma.student.delete({ where: { id } });

      return response.sendStatus(204);
    } catch (error) {
      return response.status(500).json({ message: error, error: true });
    }
  }
);

server.listen(port, () => {
  console.log(`App running on ${port} `);
});
