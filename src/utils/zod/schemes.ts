import { z } from "zod";

export const EmailSchema = z.object({
  email: z.string().email("Email is required."),
  password: z
    .string({ required_error: "Password is required." })
    .nonempty("Password is required.")
    .min(6, "Password should be at least 6 characters")
    .max(15, "Password should be at most 15 characters"),
});

export type Email = z.infer<typeof EmailSchema>;
