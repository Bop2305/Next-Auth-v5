import { getComments } from "./action";
import Comment from "@/components/comment";

export default async function Page() {
  const comments = await getComments();

  return (
    <>
      <Comment comments={comments} />
    </>
  );
}
