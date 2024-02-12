import { Request, Response } from "express";
import { enrollment, unenrollment } from "../services/enrollment-service";

export const enrollStudent = async (request: Request, response: Response) => {
  try {
    const { studentID, courseID } = request.body;
    const enroll = await enrollment(studentID, courseID);
    return response.status(200).json({ message: enroll, error: false });
  } catch (error) {
    return response.status(500).json({ message: error, error: true });
  }
};

export const unenrollStudent = async (request: Request, response: Response) => {
  try {
    const { studentID, courseID } = request.body;
    const enroll = await unenrollment(studentID, courseID);
    return response.status(200).json({ message: enroll, error: false });
  } catch (error) {
    return response.status(500).json({ message: error, error: true });
  }
};
