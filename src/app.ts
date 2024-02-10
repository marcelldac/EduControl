import express, { Request, Response } from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const server = express();
const port = process.env.PORT || 3333;

const prisma = new PrismaClient();

server.use(cors());
server.use(express.json());

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

      const student = {
        firstName,
        lastName,
        email,
        password,
      };

      const createStudent = await prisma.student.create({ data: student });
      return response
        .status(201)
        .json({ message: createStudent, error: false });
    } catch (error) {
      return response.status(500).json({ message: error, error: true });
    }
  }
);

server.listen(port, () => {
  console.log(`App running on ${port} `);
});
