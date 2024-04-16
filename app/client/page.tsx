import { updateUser } from "./action";

export default async function Client() {
  return (
    <div className="p-[25px]">
      <form action={updateUser}>
        <input type="text" name="name" className="border-2 border-[#A0AEC0] rounded-[5px]" />
        <button type="submit" className="border-2 border-[#A0AEC0] rounded-[5px]">Update User Name</button>
      </form>
    </div>
  );
}
