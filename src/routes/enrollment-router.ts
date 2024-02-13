import { Router } from "express";
import {
  enrollStudentByEmail,
  enrollStudentByID,
  unenrollStudentByEmail,
  unenrollStudentByID,
} from "../controllers/enrollment-controller";

const enrollmentRouter = Router();

enrollmentRouter.post("/enroll/:studentID", enrollStudentByID);
enrollmentRouter.post("/enroll", enrollStudentByEmail);
enrollmentRouter.post("/unenroll/:studentID", unenrollStudentByID);
enrollmentRouter.post("/unenroll", unenrollStudentByEmail);

export default enrollmentRouter;
