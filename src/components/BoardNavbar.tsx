import { Board, User } from "@/interfaces";
import DeleteBoard from "./DeleteBoard";

const BoardNavbar = async ({ board }: { board: Board }) => {
  return (
    <div className="w-full h-14 bg-black/50 flex items-center justify-between px-5">
      <h2 className="text-xl font-bold text-white">{board?.title}</h2>
      <div className="flex gap-5">
        {board?.Users?.map((user: User) => (
          <img
            key={user.id}
            src={user?.image}
            className="h-7 w-7 rounded-full cursor-pointer"
            alt=""
          />
        ))}

        <DeleteBoard board={board} />
      </div>
    </div>
  );
};

export default BoardNavbar;
