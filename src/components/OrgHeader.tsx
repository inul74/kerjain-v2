import React from "react";
import Image from "next/image";

import { Separator } from "./ui/separator";

interface orgProps {
  getOrganization: any;
}
const OrgHeader = ({ getOrganization }: orgProps) => {
  return (
    <>
      <div className="flex items-center gap-x-4">
        <div className="w-14 h-14 relative">
          <Image
            fill
            src={getOrganization?.image?.split("|")[1] || ""}
            alt={getOrganization?.title}
            className="rounded-md object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <p className="font-bold text-xl">{getOrganization?.title}</p>
      </div>
      <Separator className="my-4" />
    </>
  );
};

export default OrgHeader;
