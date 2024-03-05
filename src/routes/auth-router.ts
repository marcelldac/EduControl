import { Router } from "express";
import { loginUser } from "../controllers/auth-controller";
import { getUserProfile } from "../utils/helpers";

const authRouter = Router();

authRouter.get("/profile", getUserProfile);
authRouter.post("/login", loginUser);

export default authRouter;
