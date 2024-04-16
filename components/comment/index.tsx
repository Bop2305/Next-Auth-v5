"use client";

import Button from "@/components/common/Button";
import React, { useState } from "react";
import ModalCreateComment from "@/components/comment/ModalCreateComment";

type CommentDto = {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
};

type CommentProps = {
  comments: CommentDto[];
};

const Comment: React.FC<CommentProps> = ({ comments }) => {
  const [showModal, setShowModal] = useState<
    "create" | "edit" | "delete" | null
  >(null);

  console.log('[Comment component init]')

  return (
    <>
      <div className="p-[50px]">
        <div className="flex justify-between py-[10px]">
          <h1>Comment</h1>
          <Button text="Create" onClick={() => setShowModal("create")} />
        </div>
        {comments.map((comment) => (
          <div className="p-[20px] border rounded-[6px]" key={comment.id}>
            <div className="flex gap-[10px]">
              <p>Post Id:</p>
              <p>{comment.postId}</p>
            </div>

            <div className="flex gap-[10px]">
              <p>Name:</p>
              <p>{comment.name}</p>
            </div>

            <div className="flex gap-[10px]">
              <p>Email:</p>
              <p>{comment.email}</p>
            </div>

            <div className="flex gap-[10px]">
              <p>Content:</p>
              <p>{comment.body}</p>
            </div>

            <div className="flex py-[10px] gap-[10px]">
              <Button text="Edit" />
              <Button text="Delete" />
            </div>
          </div>
        ))}
      </div>

      {showModal === "create" && (
        <ModalCreateComment onClose={() => setShowModal(null)} />
      )}
    </>
  );
};

export default Comment;
