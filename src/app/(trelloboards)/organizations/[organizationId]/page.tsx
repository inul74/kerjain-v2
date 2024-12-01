import React from "react";

import OrgHeader from "@/components/OrgHeader";
import BoardList from "@/components/BoardList";
import { prismaDB } from "@/providers/connection";

interface OrgIdProps {
  params: {
    organizationId: string;
  };
}

const Organization = async ({ params: { organizationId } }: OrgIdProps) => {
  const getOrganization = await prismaDB.organization.findUnique({
    where: {
      id: organizationId,
    },
    include: {
      boards: {
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  return (
    <div>
      <OrgHeader getOrganization={getOrganization} />
      <div>
        <BoardList getOrganization={getOrganization} />
      </div>
    </div>
  );
};

export default Organization;
