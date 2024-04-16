import { getComments } from "./action";
import Comment from "@/components/comment";
import RenderingTimeInfo from "@/components/common/RenderingTimeInfo";

export const revalidate = 1;

function Footer() {
  console.log("[Footer]");
  return (
    <div className="flex flex-col justify-center items-center gap-[10px]">
      <h1>Footer</h1>
      <RenderingTimeInfo />
    </div>
  );
}

export default async function Page() {
  const comments = await getComments();

  return (
    <>
      <Comment comments={comments} />
      <Footer />
    </>
  );
}
