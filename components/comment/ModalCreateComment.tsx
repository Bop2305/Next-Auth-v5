import { createComment } from "@/app/comment/action";
import BaseModal from "../common/BaseModal";
import Button from "../common/Button";
import Input from "../common/Input";

type Props = {
  onClose: () => void;
};

const ModalCreateComment: React.FC<Props> = ({ onClose }) => {
  return (
    <BaseModal onClose={onClose}>
      <div className="bg-[#FFFFFF] rounded-[10px] p-[50px]">
        <h1 className="py-[20px] text-center">Add Comment</h1>
        <form action={createComment} className="flex flex-col gap-[10px]">
          <Input type="number" name="postId" placeholder="Post Id" />
          <Input type="text" name="name" placeholder="Name" />
          <Input type="text" name="email" placeholder="Email" />
          <Input type="text" name="body" placeholder="Body" />

          <Button type="submit" text="Submit" />
        </form>
      </div>
    </BaseModal>
  );
};

export default ModalCreateComment;
