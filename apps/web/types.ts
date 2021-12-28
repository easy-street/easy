import type { Post, Title, User } from "@prisma/client";

export type Model = Post | Title | User;
export type Resource = "posts" | "titles" | "users";
