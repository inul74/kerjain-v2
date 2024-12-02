import React from "react";

import { prismaDB } from "@/providers/connection";

const BoardPage = async ({ params }: { params: { boardId: string } }) => {
  const list = await prismaDB.list.findMany({
    where: { boardId: params.boardId },
    include: {
      cards: {
        orderBy: {
          order: "asc",
        },
        include: {
          users: true,
        },
      },
    },
    orderBy: {
      order: "asc",
    },
  });
  return <div className="p-4 w-full overflow-x-auto">ListContainer</div>;
};

export default BoardPage;
