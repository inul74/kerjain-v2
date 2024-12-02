"use client";

import { toast } from "sonner";
import { MoreHorizontal, X } from "lucide-react";
import React, { ElementRef, useRef } from "react";

import { List } from "@/interfaces";
import { listCopy, listDelete } from "@/services/list";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import FormSubmit from "./FormSubmit";

const ListOption = ({ list }: { list: List }) => {
  const closeRef = useRef<ElementRef<"button">>(null);

  const copyList = async () => {
    try {
      if (!list?.id || !list?.boardId) {
        toast.error("something went wrong");
        return;
      }
      const res = await listCopy({ id: list?.id, boardId: list?.boardId });
      if (res?.result) {
        toast.success("list copied successfully");
      }
    } catch (error) {
      toast.error("list not copied");
    }
  };

  //   delete list
  const deleteList = async () => {
    try {
      if (!list?.id || !list?.boardId) {
        toast.error("something went wrong");
        return;
      }
      const res = await listDelete({ id: list?.id, boardId: list?.boardId });
      if (res?.result) {
        toast.success("list deleted successfully");
      }
    } catch (error) {
      toast.error("list not deleted");
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="sm">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="px-0 bg-white">
        <h2 className="font-bold pb-3 text-center">List Details</h2>
        <Separator />
        <form action={copyList}>
          <FormSubmit
            variant="ghost"
            className="rounded-none w-full h-auto px-5 py-2 text-sm"
          >
            Copy List
          </FormSubmit>
        </form>
        <Separator />
        <form action={deleteList}>
          <FormSubmit
            variant="ghost"
            className="rounded-none w-full h-auto px-5 py-2 text-sm"
          >
            Delete List
          </FormSubmit>
        </form>
        <PopoverClose ref={closeRef} asChild>
          <Button
            className="h-auto w-auto p-2 absolute top-2 right-2 text-neutral-600"
            variant="ghost"
          >
            <X className="h-5 w-5" />
          </Button>
        </PopoverClose>
      </PopoverContent>
    </Popover>
  );
};

export default ListOption;
