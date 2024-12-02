"use client";

import dynamic from "next/dynamic";
import React, { useState } from "react";

const Draggable = dynamic(
  () => import("@hello-pangea/dnd").then((mod) => mod.Draggable),
  {
    ssr: false,
  }
);

import { Card, User } from "@/interfaces";
import CardModal from "./CardModal";

const CardItem = ({ card, index }: { card: Card; index: number }) => {
  const [isModal, setIsModal] = useState(false);

  return (
    <>
      <Draggable draggableId={card.id} index={index}>
        {(provided) => (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            onClick={() => setIsModal(true)}
            role="button"
            className="truncate border border-transparent hover:border-black py-2 px-3 text-sm bg-white/50 rounded-md shadow-md"
          >
            {card.title}
            <div className="mt-2 flex items-center justify-end gap-2">
              {card?.users?.map((user: User) => (
                <div className="" key={user.id}>
                  <img
                    src={user?.image}
                    alt=""
                    className="h-7 w-7 rounded-full"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </Draggable>
      {isModal && (
        <CardModal id={card.id} isModal={isModal} setIsModal={setIsModal} />
      )}
    </>
  );
};

export default CardItem;
