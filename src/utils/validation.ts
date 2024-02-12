import { z } from "zod";

export const validationSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  email: z.string().email("Email should be in a valid format").optional(),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .optional(),
});
