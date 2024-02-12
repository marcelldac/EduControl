import express, { Request, Response } from "express";
import cors from "cors";
import studentController from "./controllers/student-controller";

const server = express();
const port = process.env.PORT || 3333;

server.use(cors());
server.use(express.json());

server.get("/api/v1/students", studentController.read);
server.post("/api/v1/students", studentController.create);
server.put("/api/v1/students/:id", studentController.update);
server.delete("/api/v1/students/:id", studentController.remove);

server.listen(port, () => {
  console.log(`App running on ${port} `);
});
