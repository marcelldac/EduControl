import express, { Request, Response } from "express";
import cors from "cors";
import studentService from "./services/student-services";

const server = express();
const port = process.env.PORT || 3333;

server.use(cors());
server.use(express.json());

server.get("/api/v1/students", async (request: Request, response: Response) => {
  try {
    const students = await studentService.readStudents();
    return response.status(200).json({ message: students, error: false });
  } catch (error) {
    return response.status(500).json({ message: error, error: true });
  }
});

server.post(
  "/api/v1/students",
  async (request: Request, response: Response) => {
    try {
      const createStudent = await studentService.createStudent(request.body);
      return response.status(createStudent.status).json(createStudent.data);
    } catch (error) {
      return response.status(500).json({ message: error, error: true });
    }
  }
);

server.put(
  "/api/v1/students/:id",
  async (request: Request, response: Response) => {
    try {
      const { id } = request.params;
      const updateStudent = await studentService.updateStudent(
        request.body,
        id
      );
      return response.status(updateStudent.status).json(updateStudent.data);
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
      const removeStudent = await studentService.deleteStudent(id);
      return response.sendStatus(removeStudent.status);
    } catch (error) {
      return response.status(500).json({ message: error, error: true });
    }
  }
);

server.listen(port, () => {
  console.log(`App running on ${port} `);
});
