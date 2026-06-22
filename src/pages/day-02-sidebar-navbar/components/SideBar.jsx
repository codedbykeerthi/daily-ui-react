import React, { useState } from "react";
import { HiOutlineHome } from "react-icons/hi";
import { TbGraph } from "react-icons/tb";
import { PiStackBold } from "react-icons/pi";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";
import { HiOutlineChartPie } from "react-icons/hi2";
import { PiUsers } from "react-icons/pi";
import SidebarItem from "./SidebarItem";
import SearchBar from "./SearchBar";
import logoimg from "../../../assets/day02/logoimg.png";
import logoWord from "../../../assets/day02/logoWord.png";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoChatbubblesOutline } from "react-icons/io5";
import { IoToggleOutline } from "react-icons/io5";
import ProfileCard from "./ProfileCard";

const SideBar = () => {
  const menuItems = [
    { label: "Home", icon: <HiOutlineHome className="text-xl" /> },
    { label: "Dashboard", icon: <TbGraph className="text-xl" /> },
    {
      label: "Projects",
      icon: <PiStackBold className="text-xl" />,
      subMenus: ["Overview", "Analytics", "Reports"],
    },
    {
      label: "Tasks",
      icon: <HiOutlineClipboardDocumentCheck className="text-xl" />,
      subMenus: ["Overview", "Reports"],
    },
    {
      label: "Reporting",
      icon: <HiOutlineChartPie className="text-xl" />,
      subMenus: ["Overview", "Notifications", "Analytics", "Reports"],
    },
    {
      label: "Users",
      icon: <PiUsers className="text-xl" />,
      subMenus: ["Reports"],
    },
  ];

  const footerItems = [
    {
      label: "Notifications",
      icon: <IoNotificationsOutline className="text-xl" />,
    },
    { label: "Support", icon: <IoChatbubblesOutline className="text-xl" /> },
    { label: "Settings", icon: <IoToggleOutline className="text-xl" /> },
  ];

  const [activeItem, setActiveItem] = useState(null);

  return (
    <nav className="w-60 bg-slate-100 h-screen fixed top-0 left-0 z-40">
      <div className="flex flex-col h-full justify-between">
        <div>
          {/* logo */}
          <img className="w-32 object-cover mt-2" src={logoWord} alt="logo" />

          <SearchBar />

          <ul className="mx-3">
            {menuItems.map((item, index) => (
              <li key={index}>
                <SidebarItem
                  label={item.label}
                  icon={item.icon}
                  isExpandable={item.isExpandable}
                  subMenus={item.subMenus}
                  isActive={activeItem === item.label}
                  onClick={() => setActiveItem(item.label)}
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <hr className="h-px bg-gray-200 border-0 mx-3" />

          <ul className="mx-3 mt-2 ">
            {footerItems.map((item, index) => (
              <li key={index}>
                <SidebarItem
                  {...item}
                  isActive={activeItem === item.label}
                  onClick={() => setActiveItem(item.label)}
                />
              </li>
            ))}
          </ul>

          <ProfileCard/>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
