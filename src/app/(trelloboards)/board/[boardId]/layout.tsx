import React from "react";

import { prismaDB } from "@/providers/connection";
import BoardNavbar from "@/components/BoardNavbar";

const BoardLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { boardId: string };
}) => {
  const board: any = await prismaDB.board.findUnique({
    where: { id: params.boardId },
    include: { Users: true },
  });

  return (
    <div
      className="relative h-[85vh] bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${board?.image.split("|")[2]})` }}
    >
      <BoardNavbar board={board} />
      <div>{children}</div>
    </div>
  );
};

export default BoardLayout;
