import React, { ReactElement } from "react";

const SidebarItem = ({ text, icon }: { text: string; icon: ReactElement }) => {
  return (
    <div className="flex">
      {icon}
      {text}
    </div>
  );
};

export default SidebarItem;
