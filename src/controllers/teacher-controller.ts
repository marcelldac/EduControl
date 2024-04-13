import { Request, Response } from "express";
import joi from "joi";

import teacherService from "../services/teacher-service";

export const read = async (_: Request, response: Response) => {
  try {
    const students = await teacherService.readTeacher();
    return response.status(200).json({ message: students, error: false });
  } catch (error) {
    return response.status(500).json({ message: error, error: true });
  }
};
export const create = async (request: Request, response: Response) => {
  try {
    const { name, email, password, isCoordinator, courseName } = request.body;

    const schema = joi.object({
      name: joi.string().required(),
      email: joi.string().email().required(),
      password: joi.string().required(),
      isCoordinator: joi.boolean().default(false),
      courseName: joi.string().required(),
    });

    const { error } = schema.validate(request.body);

    if (error) {
      return response.status(400).json({
        message: `Erro de validação: ${error.details
          .map((detail) => detail.message)
          .join(",")}`,
        error: true,
      });
    }

    const createStudent = await teacherService.createTeacher(
      { name, email, isCoordinator, password },
      courseName
    );
    return response.status(createStudent.status).json(createStudent.data);
  } catch (error) {
    return response.status(500).json({ message: error, error: true });
  }
};
export const update = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;
    const updateStudent = await teacherService.updateTeacher(request.body, id);
    return response.status(updateStudent.status).json(updateStudent.data);
  } catch (error) {
    return response.status(500).json({ message: error, error: true });
  }
};
export const remove = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;
    const removeStudent = await teacherService.removeTeacher(id);
    return response.sendStatus(removeStudent.status);
  } catch (error) {
    return response.status(500).json({ message: error, error: true });
  }
};

const teacherController = {
  read,
  create,
  update,
  remove,
};

export default teacherController;
