import { Request, Response } from "express";
import {
  enrollmentByID,
  unenrollmentByID,
} from "../services/enrollment-service";

export const enrollStudentByID = async (
  request: Request,
  response: Response
) => {
  try {
    const { studentID } = request.params;
    const { courseID } = request.body;
    const enroll = await enrollmentByID(studentID, courseID);
    return response.status(200).json({ message: enroll, error: false });
  } catch (error) {
    return response.status(500).json({ message: error, error: true });
  }
};

export const unenrollStudentByID = async (
  request: Request,
  response: Response
) => {
  try {
    const { studentID } = request.params;
    const { courseID } = request.body;
    const enroll = await unenrollmentByID(studentID, courseID);
    return response.status(200).json({ message: enroll, error: false });
  } catch (error) {
    return response.status(500).json({ message: error, error: true });
  }
};
