import { Router } from "express";
import studentController from "../controllers/student-controller";

const server = Router();

server.get("/students", studentController.read);
server.post("/students", studentController.create);
server.put("/students/:id", studentController.update);
server.delete("/students/:id", studentController.remove);

export default server;
