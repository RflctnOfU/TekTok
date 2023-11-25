"use server";
import { z } from "zod";
import { api } from "@/trpc/server";
import { revalidatePath } from "next/cache";

import { redirect } from "next/navigation";

const postSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  // date: z.string(),
});

const commentSchema = z.object({
  id: z.string(),
  content: z.string(),
});

const CreatePost = postSchema.omit({ id: true });
const EditPost = postSchema;
const DeletePost = postSchema.omit({ title: true, content: true });
const DeleteComment = commentSchema.omit({ content: true });
const EditComment = commentSchema;

// export async function createPost(formData: FormData) {
//   const { title, content } = CreatePost.parse({
//     title: formData.get("title"),
//     content: formData.get("content"),
//   });

//   await api.post.createPost({ title, content });
//   formData.set("title", ""),
//     formData.set("content", ""),
//     revalidatePath("/dashboard");
//   redirect("/dashboard");
// }
// export async function editPost(formData: FormData) {
//   const { id, title, content } = EditPost.parse({
//     id: formData.get("id"),
//     title: formData.get("title"),
//     content: formData.get("content"),
//   });

//   await api.post.editPost({ id, title, content });
//   formData.set("title", ""),
//     formData.set("content", ""),
//     revalidatePath("/dashboard/posts");
//   redirect("/dashboard/posts");
// }

// export async function deletePost(formData: FormData) {
//   const { id } = DeletePost.parse({
//     id: formData.get("id"),
//   });
//   await api.post.deletePost({ id });
//   await api.comment.deletePostComments({ id });
//   revalidatePath("/dashboard/posts");
//   redirect("/dashboard/posts");
// }

// export async function deleteComment(formData: FormData) {
//   const { id } = DeleteComment.parse({
//     id: formData.get("id"),
//   });
//   await api.comment.deleteComment({ id });
//   revalidatePath("/dashboard/comments");
//   redirect("/dashboard/comments");
// }

// export async function editComment(formData: FormData) {
//   const { id, content } = EditComment.parse({
//     id: formData.get("id"),
//     content: formData.get("content"),
//   });
//   await api.comment.editComment({ id, content });
//   revalidatePath("/dashboard/comments");
//   redirect("/dashboard/comments");
// }

// export async function createComment(formData: FormData) {
//   const { id, content } = CreateComment.parse({
//     id: formData.get("id"),
//     content: formData.get("content"),
//   });

//   await api.comment.createComment.mutate({ id, content });
//   formData.delete("content");
//   formData.set("content", ""), revalidatePath(`/dashboard/posts/${id}`);
// }