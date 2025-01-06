import TwitterIcon from "../icons/TwitterIcon";
import YoutubeIcon from "../icons/YoutubeIcon";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <div className="h-screen bg-white border-r border-2 w-72 fixed left-0 top-0 p-4">
      <span className=" text-xl  bg-purple-600 p-2 text-white font-bold rounded mt-4">
        Brainly .
      </span>

      <div className="pt-4">
        <SidebarItem text="Twitter" icon={<TwitterIcon />} />
        <SidebarItem text="Youtube" icon={<YoutubeIcon />} />
      </div>
    </div>
  );
};

export default Sidebar;
