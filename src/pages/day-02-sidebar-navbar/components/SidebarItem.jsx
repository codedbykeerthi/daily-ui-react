import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const SidebarItem = ({ label, icon, subMenus, isActive, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    onClick?.();
    
    console.log("onClick:", onClick);
    if (subMenus) {
      setIsOpen(!isOpen);
    }
  }

  return (
    <>
      <button
        onClick={handleClick}
        className={`w-full flex items-center justify-between px-3 py-3 mt-1 ${isActive ? "bg-white" : "hover:bg-white"} rounded-lg`}
      >
        <div className="inline-flex items-center gap-2 text-sm">
          {icon}
          {label}
        </div>

        {subMenus &&
          (isOpen ? (
            <IoIosArrowUp className="mr-2 transition" />
          ) : (
            <IoIosArrowDown className="mr-2 transition" />
          ))}
      </button>

      {subMenus && isOpen && (
        <ul className="space-y-2">
          {subMenus.map((item, index) => (
            <li
              key={index}
              className="px-3 py-1 mt-1 ml-6 text-sm hover:bg-white rounded-lg"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default SidebarItem;
