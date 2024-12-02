"use client";

import React from "react";
import dynamic from "next/dynamic";

const Draggable = dynamic(
  () => import("@hello-pangea/dnd").then((mod) => mod.Draggable),
  {
    ssr: false,
  }
);

const Droppable = dynamic(
  () => import("@hello-pangea/dnd").then((mod) => mod.Droppable),
  {
    ssr: false,
  }
);

import { cn } from "@/lib/utils";
import { Card, List } from "@/interfaces";

import CardItem from "./CardItem";
import ListHeader from "./ListHeader";
import CreateCard from "./CreateCard";

const ListItem = ({ list, index }: { list: List; index: number }) => {
  return (
    <Draggable draggableId={list.id} index={index}>
      {(provided) => (
        <li
          {...provided.draggableProps}
          ref={provided.innerRef}
          className="shrink-0 h-full w-[272px] select-none"
        >
          <div
            {...provided.dragHandleProps}
            className="w-full rounded-md bg-white/80 shadow-md pb-2 my-6"
          >
            <ListHeader list={list} />
            <Droppable droppableId={list.id} type="card">
              {(provided) => (
                <ol
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className={cn(
                    "mx-1 px-1 py-0.5 flex flex-col gap-y-2 rounded-md",
                    list?.cards?.length > 0 ? "mt-2" : "mt-0"
                  )}
                >
                  {list?.cards?.map((card: Card, index: number) => (
                    <CardItem key={card.id} card={card} index={index} />
                  ))}
                  {provided.placeholder}
                </ol>
              )}
            </Droppable>
            <CreateCard listId={list.id} />
          </div>
        </li>
      )}
    </Draggable>
  );
};

export default ListItem;
