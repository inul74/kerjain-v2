"use client";

import { toast } from "sonner";
import { Plus, X } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { ElementRef, useRef } from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { createOrganization } from "@/services/organization";

import InputForm from "./InputForm";
import FormSubmit from "./FormSubmit";
import { FormPicker } from "./FormPicker";

const CreateOrgForm = () => {
  const router = useRouter();
  const closeRef = useRef<ElementRef<"button">>(null);

  const handleSubmit = async (formData: FormData) => {
    try {
      const title = formData.get("title") as string;
      const image = formData.get("image") as string;

      if (!title || !image) {
        toast.error("please fill all required fields");
        return;
      }

      const res = await createOrganization({ title, image });
      toast.success("Organization successfully added");
      router.push(`/organizations/${res?.result?.id}`);
    } catch (error) {
      toast.error("organization not created");
    }
  };

  return (
    <div className="font-medium flex items-center mb-1">
      <span>Workspaces</span>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            asChild
            type="button"
            variant="ghost"
            size="icon"
            className="ml-auto cursor-pointer"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="font-medium text-center text-gray-600 pb-4 text-sm">
            Create Organization
          </div>
          <form action={handleSubmit}>
            <div>
              <FormPicker id="image" errors={undefined} />
              <InputForm id="title" label="Organization Title" type="text" />
              <FormSubmit className="w-full mt-2">Create</FormSubmit>
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
    </div>
  );
};

export default CreateOrgForm;
