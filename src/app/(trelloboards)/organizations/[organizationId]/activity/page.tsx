import React from "react";

import { OrgId } from "@/interfaces";
import { prismaDB } from "@/providers/connection";
import ActivityItem from "@/components/ActivityItem";

const Activitypage = async ({ params }: OrgId) => {
  const getAllActivities = await prismaDB.audLog.findMany({
    where: { orgId: params.organizationId },
  });

  return (
    <>
      <ol className="mt-5">
        {getAllActivities?.map((item) => (
          <ActivityItem key={item.id} item={item} />
        ))}
      </ol>
    </>
  );
};

export default Activitypage;
