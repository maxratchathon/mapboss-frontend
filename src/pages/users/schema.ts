import { z } from "zod";

export const SearchSchema = z.object({
    firstName: z.string().min(1, "Required"),
    lastName: z.string().min(1, "Required"),
    displayName: z.string().min(1, "Required"),
    email: z.string().email("Invalid email").min(1, "Required"),
    username: z.string().min(1, "Required"),
    role: z.enum(["admin", "user"]).default("user"),
    password: z.string().min(1, "Required"),

});

