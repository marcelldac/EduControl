import { Router } from "express";
import {
  enrollStudentByEmail,
  enrollStudentByID,
  unenrollStudentByEmail,
  unenrollStudentByID,
} from "../controllers/enrollment-controller";

const server = Router();

server.post("/enroll/:studentID", enrollStudentByID);
server.post("/enroll", enrollStudentByEmail);
server.post("/unenroll/:studentID", unenrollStudentByID);
server.post("/unenroll", unenrollStudentByEmail);

export default server;
