import type { Message, User } from "@prisma/client";

export type Model = Message | User;
export type Resource = "messages" | "users";
