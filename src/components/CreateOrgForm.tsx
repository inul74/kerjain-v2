"use client";

import React from "react";
import { Plus } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

import InputForm from "./InputForm";
import { FormPicker } from "./FormPicker";

const CreateOrgForm = () => {
  const handleSubmit = async (formData: FormData) => {};

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
              <FormPicker id="image" />
              <InputForm id="title" label="Organization Title" type="text" />
            </div>
          </form>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default CreateOrgForm;
