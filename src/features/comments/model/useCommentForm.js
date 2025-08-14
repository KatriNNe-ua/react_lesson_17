import { useCreateCommentMutation } from "@/entities/post/comments";
import { useState } from "react";

export const useCommentForm = () => {
  const [content, setContent] = useState("");
  const [createComment, { isLoading }] = useCreateCommentMutation();

  return { content, setContent, createComment, isLoading };
};
