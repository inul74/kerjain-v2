"use client";

import { Plus } from "lucide-react";
import { Button } from "./ui/button";

const CreateCard = ({ listId }: { listId: string }) => {
  return (
    <li className="pt-2 px-2">
      <Button className="h-auto w-full text-muted-foreground text-sm px-2 py-1.5 bg-white hover:bg-white">
        Create Card
        <Plus className="h-4 w-4 mr-2" />
      </Button>
    </li>
  );
};

export default CreateCard;
