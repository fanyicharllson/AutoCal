import { z } from "zod";

export const ContactSchema = z.object({
  name: z
    .string()
    .min(3, "Username must atleast be 3 characters")
    .max(50, "Username can't exit 50 characters"),
  email: z.string().email("Invalid email").min(1, "Email is required"),
  message: z.string().min(10, "Message must be atleast 10 characters"),
});
