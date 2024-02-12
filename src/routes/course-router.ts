import { Router } from "express";
import courseController from "../controllers/course-controller";

const server = Router();

server.get("/courses", courseController.read);
server.post("/courses", courseController.create);
server.put("/courses/:id", courseController.update);
server.delete("/courses/:id", courseController.remove);

export default server;
