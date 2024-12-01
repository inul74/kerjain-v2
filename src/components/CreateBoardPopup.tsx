"use client";

import { toast } from "sonner";
import { X } from "lucide-react";
import React, { ElementRef, useRef } from "react";
import { useParams, useRouter } from "next/navigation";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { createBoard } from "@/services/board";

import InputForm from "./InputForm";
import FormSubmit from "./FormSubmit";
import { FormPicker } from "./FormPicker";

const CreateBoardPopup = () => {
  const router = useRouter();
  const closeRef = useRef<ElementRef<"button">>(null);

  const { organizationId } = useParams();
  let orgId = organizationId as string;

  const handleSubmit = async (formData: FormData) => {
    try {
      const title = formData.get("title") as string;
      const image = formData.get("image") as string;

      if (!title || !image || !orgId) {
        toast.error("please fill all required fields");
        return;
      }

      const res = await createBoard({ title, image, orgId });
      toast.success("Board successfully added");
      router.push(`/board/${res?.result?.id}`);
    } catch (error) {
      toast.error("Board not created");
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div
          role="button"
          className="h-24 w-40 p-3 aspect-video relative bg-muted rounded-sm flex flex-col gap-y-1 items-center justify-center hover:opacity-75 transition"
        >
          <p className="text-sm">Create new board</p>
          <p className="text-xs text-muted-foreground">Unlimited</p>
        </div>
      </PopoverTrigger>
      <PopoverContent align="end" side="right" sideOffset={-100}>
        <div className="font-medium text-center text-gray-600 pb-4 text-sm">
          Create Board
        </div>
        <form action={handleSubmit}>
          <div className="space-y-4">
            <FormPicker id="image" errors={undefined} />
            <InputForm id="title" label="Board Title" type="text" />
            <FormSubmit className="w-full">Create</FormSubmit>
          </div>
        </form>
        <PopoverClose ref={closeRef} asChild>
          <Button
            className="h-auto w-auto p-2 absolute top-2 right-2 text-neutral-600"
            variant="ghost"
          >
            <X className="h-4 w-4" />
          </Button>
        </PopoverClose>
      </PopoverContent>
    </Popover>
  );
};

export default CreateBoardPopup;
