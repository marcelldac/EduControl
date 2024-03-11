import { Request, Response } from "express";
import { login } from "../services/auth-service";

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const logUser = await login(email, password);
  return res.status(logUser.status).json(logUser.data);
};

export default loginUser;
