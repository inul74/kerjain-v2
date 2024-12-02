"use client";

import { toast } from "sonner";
import { Plus, X } from "lucide-react";
import React, { useState } from "react";

import InputForm from "./InputForm";
import { Button } from "./ui/button";
import FormSubmit from "./FormSubmit";
import { createLists } from "@/services/list";

const CreateList = ({ boardId }: { boardId: string }) => {
  const [isEditable, setIsEditable] = useState(false);

  const editEnable = () => {
    setIsEditable(true);
  };

  const handleSubmit = async (formData: FormData) => {
    try {
      const title = formData.get("title") as string;
      if (!title) {
        toast.error("please add list title");
        return;
      }

      const res = await createLists({ title, boardId });
      if (res.error) {
        toast.error(res.error);
        return;
      }

      toast.success("List successfully added");
      setIsEditable(false);
    } catch (error) {
      toast.error("Failed to create list");
    }
  };

  if (isEditable) {
    return (
      <li className="shrink-0 h-full w-[272px] select-none relative">
        <form
          action={handleSubmit}
          className="text-black bg-white/80 rounded-md space-y-4 shadow-lg p-3"
        >
          <div>
            <InputForm id="title" label="List Title" type="text" />
            <FormSubmit className="mt-2">Create List</FormSubmit>
          </div>
        </form>
        <Button
          type="button"
          size="sm"
          variant="ghost"
          className="absolute bottom-3 right-2"
          onClick={() => setIsEditable(false)}
        >
          <X className="h-5 w-5" />
        </Button>
      </li>
    );
  }

  return (
    <li className="shrink-0 h-full w-[272px] select-none mt-1.5 p-1">
      <Button
        className="w-full rounded-lg text-black bg-white/80 hover:bg-white/50 text-sm transition p-4 mt-4 flex justify-between"
        onClick={editEnable}
      >
        Create List
        <Plus className="h-4 w-4 mr-2" />
      </Button>
    </li>
  );
};

export default CreateList;
