import { z } from "zod";

export const UserFormValidation = z.object({
    name: z
        .string()
        .min(3, "Username must be at least 3 characters.")
        .max(100, "Name must not be at most 100 characters."),
    email: z.string().email("Invalid email address"),
    phone: z.string().refine((phone) => /^\+\d{10,15}$/.test(phone), "Invalid phone number"),
});
