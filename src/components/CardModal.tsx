import useSWR from "swr";
import React, { useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { User } from "@/interfaces";
import { fetcher } from "@/lib/fetcher";
import { addCardMember } from "@/services/card";

import CardHeader from "./CardHeader";
import CardActivity from "./CardActivity";
import CardDescription from "./CardDescription";
import CardActions from "./CardActions";

interface CardModel {
  id: string;
  isModal: boolean;
  setIsModal: (isModal: boolean) => void;
}

const CardModal = ({ id, isModal, setIsModal }: CardModel) => {
  const { data: cardDetails } = useSWR(`/api/card/${id}`, fetcher);
  const { data: auditDetails } = useSWR(`/api/card/${id}/cardlogs`, fetcher);
  const [cardData, setCardData] = useState(cardDetails);

  useEffect(() => {
    setCardData(cardDetails);
  }, [cardDetails]);

  const removeCardMember = async (user: User) => {
    const cardIndex: any = user?.cardIds?.indexOf(cardData?.id);
    if (cardIndex > -1) {
      user?.cardIds?.splice(cardIndex, 1);
    }
    const userIndex: any = cardData?.userIds?.indexOf(user?.id);
    if (userIndex > -1) {
      cardData?.userIds?.splice(userIndex, 1);
    }

    await addCardMember({ user, card: cardData });
    setCardData(cardData);
  };

  return (
    <Dialog open={isModal} onOpenChange={() => setIsModal(false)}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle hidden></DialogTitle>
        </DialogHeader>
        <DialogDescription hidden></DialogDescription>
        <CardHeader cardData={cardData} setCardData={setCardData} />
        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-4">
          <div className="col-span-3">
            <div className="flex gap-3">
              {cardData?.users?.map((user: User) => (
                <div
                  className="relative after:cursor-pointer after:content-['x'] after:absolute after:right-[-5px] after:top-[-10px] after:bg-purple-500 after:h-4 after:w-4 after:flex after:items-center after:justify-center after:text-white after:rounded-full"
                  onClick={() => removeCardMember(user)}
                >
                  <img
                    src={user?.image}
                    className="h-7 w-7 rounded-full"
                    alt=""
                  />
                </div>
              ))}
            </div>
            <div>
              <CardDescription cardData={cardData} setCardData={setCardData} />
              <CardActivity auditDetails={auditDetails} />
            </div>
          </div>
          <CardActions cardData={cardData} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CardModal;
