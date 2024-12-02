"use client";

import { Plus } from "lucide-react";
import { Button } from "./ui/button";

const CreateList = ({ boardId }: { boardId: string }) => {
  return (
    <li className="shrink-0 h-full w-[272px] select-none mt-1.5 p-1">
      <Button className="w-full rounded-lg text-black bg-white/80 hover:bg-white/50 text-sm transition p-4 mt-4 flex justify-between">
        Create List
        <Plus className="h-4 w-4 mr-2" />
      </Button>
    </li>
  );
};

export default CreateList;
