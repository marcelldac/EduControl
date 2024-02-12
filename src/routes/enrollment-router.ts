import { Router } from "express";
import {
  enrollStudentByID,
  unenrollStudentByID,
} from "../controllers/enrollment-controller";

const server = Router();

server.post("/enroll/:studentID", enrollStudentByID);
server.post("/unenroll/:studentID", unenrollStudentByID);

export default server;
