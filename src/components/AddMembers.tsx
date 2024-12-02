"use client";

import { Plus, X } from "lucide-react";
import React, { useEffect, useState, ElementRef, useRef } from "react";

import { Button } from "./ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
} from "./ui/popover";

import { User } from "@/interfaces";
import { getWithoutOrgMembers, updateOrgMember } from "@/services/organization";

const AddMembers = ({ organization }: { organization: any }) => {
  const [members, setMembers] = useState<any>([]);
  const closeRef = useRef<ElementRef<"button">>(null);

  const getMembers = async () => {
    const getUsers = await getWithoutOrgMembers({
      organizationId: organization?.id,
    });
    setMembers(getUsers?.result);
  };

  useEffect(() => {
    if (organization) getMembers();
  }, []);

  const handleSubmit = async (user: any) => {
    user?.orgIds?.push(organization?.id);
    organization?.userIds?.push(user?.id);
    await updateOrgMember({
      id: user.id,
      organizationId: organization.id,
      orgIds: user?.orgIds,
      userIds: organization?.userIds,
    });
    setMembers(members?.filter((item: User) => item?.id != user?.id));
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="bg-white/80 text-black hover:bg-white/50 ml-auto cursor-pointer">
          <Plus className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className="w-80 pt-3 z-50 bg-white/80"
        side="bottom"
        sideOffset={-100}
      >
        <div className="text-sm font-medium text-center text-neutral-600 pb-4">
          Add Member
        </div>
        <div>
          {members?.map((user: any) => (
            <div
              key={user?.id}
              className="flex items-center gap-2 hover:bg-slate-100 p-2 cursor-pointer"
              onClick={() => handleSubmit(user)}
            >
              <img
                src={user?.image}
                className="object-cover rounded-full h-12 w-12"
                alt=""
              />
              <div>
                <h1 className="font-semibold">{user?.name}</h1>
                <p className="text-gray-400 text-xs">{user?.id}</p>
              </div>
            </div>
          ))}
        </div>
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

export default AddMembers;
