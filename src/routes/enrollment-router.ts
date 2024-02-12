import { Router } from "express";
import {
  enrollStudent,
  unenrollStudent,
} from "../controllers/enrollment-controller";

const server = Router();

server.post("/enroll", enrollStudent);
server.post("/unenroll", unenrollStudent);

export default server;
