import React from "react";
import CreateOrgForm from "./CreateOrgForm";
import OrgList from "./OrgList";

const Sidebar = async () => {
  return (
    <div>
      <CreateOrgForm />
      <OrgList />
    </div>
  );
};

export default Sidebar;
