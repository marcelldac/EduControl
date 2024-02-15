import { Router } from "express";
import studentController from "../controllers/student-controller";

const studentRouter = Router();

studentRouter.get("/students", studentController.read);
studentRouter.post("/students", studentController.create);
studentRouter.put("/students/:id", studentController.update);
studentRouter.delete("/students/:id", studentController.remove);

export default studentRouter;
