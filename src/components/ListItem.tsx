import React from "react";

import { Card, List } from "@/interfaces";
import { Draggable, Droppable } from "@hello-pangea/dnd";

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
            className="w-full rounded-md bg-slate-50 shadow-md pb-2 my-11"
          >
            ListItem
          </div>
        </li>
      )}
    </Draggable>
  );
};

export default ListItem;
