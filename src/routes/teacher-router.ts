import { Router } from "express";
import teacherController from "../controllers/teacher-controller";

const teacherRouter = Router();

teacherRouter.get("/teachers", teacherController.read);
teacherRouter.post("/teachers", teacherController.create);
teacherRouter.put("/teachers/:id", teacherController.update);
teacherRouter.delete("/teachers/:id", teacherController.remove);

export default teacherRouter;
