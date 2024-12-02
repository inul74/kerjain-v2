"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import { Card, User } from "@/interfaces";
import { addCardMember, getWithoutCardMembers } from "@/services/card";

import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

interface CardProps {
  card: Card;
  boardId: string;
}
const AddCardMember = ({ card, boardId }: CardProps) => {
  const router = useRouter();
  const [members, setMembers] = useState<any>([]);

  const getMembers = async () => {
    const getUsers = await getWithoutCardMembers({
      boardId,
      cardId: card.id,
    });
    setMembers(getUsers?.result);
  };

  useEffect(() => {
    if (card) getMembers();
  }, []);

  const handleSubmit = async (user: any) => {
    user?.cardIds?.push(card?.id);
    card?.userIds?.push(user?.id);
    await addCardMember({
      user,
      card,
    });
    setMembers(members?.filter((item: User) => item?.id != user?.id));
    router.refresh();
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className="w-full bg-gray-200 hover:bg-gray-200 text-gray-700"
          size="sm"
        >
          Members
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="w-80 pt-3 z-50 bg-white/80"
        side="bottom"
        sideOffset={18}
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
      </PopoverContent>
    </Popover>
  );
};

export default AddCardMember;
