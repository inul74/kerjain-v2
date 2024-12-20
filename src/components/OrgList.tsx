import React from "react";

import { Organization } from "@/interfaces";
import { Accordion } from "@/components/ui/accordion";

import SidebarItem from "./SidebarItem";

interface OrgProps {
  getOrganizations: Organization[];
}

const OrgList = ({ getOrganizations }: OrgProps) => {
  return (
    <Accordion type="multiple" className="space-y-2">
      {getOrganizations?.map((org: Organization) => (
        <SidebarItem key={org.id} org={org} />
      ))}
    </Accordion>
  );
};

export default OrgList;
