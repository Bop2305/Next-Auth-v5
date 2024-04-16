"use server";

import { revalidatePath } from "next/cache";

type CommentDto = {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
};

export async function getComments(): Promise<CommentDto[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");

  console.log("[get comments]");

  return res.json();
}

export async function getCommentById(id: number): Promise<CommentDto> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/comments/${id}`
  );

  return res.json();
}

export async function createComment(data: FormData): Promise<CommentDto> {
  console.log("[create comment] [body]", data);

  const res = await fetch("https://jsonplaceholder.typicode.com/comments", {
    method: "POST",
    body: JSON.stringify({
      postId: data.get("postId"),
      name: data.get("name"),
      email: data.get("email"),
      body: data.get("body"),
    }),
  });

  revalidatePath("/comment");

  return res.json();
}
