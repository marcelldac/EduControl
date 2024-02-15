import { z } from "zod";

export const studentValidationSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  email: z.string().email("Email should be in a valid format").optional(),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .optional(),
});

export const teacherValidationSchema = z.object({
  name: z.string().optional(),
  email: z.string().email().optional(),
  isCoordinator: z.boolean().default(false).optional(),
});
