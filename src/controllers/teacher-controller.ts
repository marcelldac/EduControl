import { Request, Response } from "express";
import teacherService from "../services/teacher-service";

export const read = async (request: Request, response: Response) => {
  try {
    const students = await teacherService.readTeacher();
    return response.status(200).json({ message: students, error: false });
  } catch (error) {
    return response.status(500).json({ message: error, error: true });
  }
};
export const create = async (request: Request, response: Response) => {
  try {
    const { name, email, isCoordinator, courseName } = request.body;
    const createStudent = await teacherService.createTeacher(
      { name, email, isCoordinator },
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
