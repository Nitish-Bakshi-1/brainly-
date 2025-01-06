import React, { ReactElement } from "react";

const SidebarItem = ({ text, icon }: { text: string; icon: ReactElement }) => {
  return (
    <div className=" my-2 text-gray-700 flex items-center gap-4 hover:bg-gray-100 p-2 rounded">
      {icon}
      {text}
    </div>
  );
};

export default SidebarItem;
