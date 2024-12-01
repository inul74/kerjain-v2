import Link from "next/link";
import { Users2 } from "lucide-react";

import { Board } from "@/interfaces";
import CreateBoardPopup from "./CreateBoardPopup";

interface orgProps {
  getOrganization: any;
}

const BoardList = ({ getOrganization }: orgProps) => {
  return (
    <div>
      <div className="flex items-center font-bold text-lg mb-2">
        <Users2 className="h-6 w-6 mr-2" />
        Your Boards
      </div>
      <div className="grid grid-cols-2  lg:grid-cols-4 gap-3">
        {getOrganization?.boards?.map((board: Board) => (
          <Link
            key={board.id}
            href={`/board/${board.id}`}
            className="group aspect-video relative bg-no-repeat bg-center bg-cover h-24 w-40 p-2 overflow-hidden"
            style={{ backgroundImage: `url(${board.image.split("|")[1]})` }}
          >
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
            <p className="relative font-medium text-white text-center">
              {board.title}
            </p>
          </Link>
        ))}
        <CreateBoardPopup />
      </div>
    </div>
  );
};

export default BoardList;
