import React from "react";
import { IoIosCall } from "react-icons/io";
import { TbMailFilled } from "react-icons/tb";
import { IoCalendarClear } from "react-icons/io5";

const actions = [
  { label: "Schedule", icon: <IoCalendarClear /> },
  { label: "Call", icon: <IoIosCall /> },
  { label: "Email", icon: <TbMailFilled /> },
];

const ActionButtons = () => {
  return (
    <div className="flex  space-x-2">
      {actions.map((a) => (
        <button
          key={a.label}
          className="flex items-center py-2 px-3 gap-1 text-sm bg-orange-100 text-orange-500 rounded-lg hover:bg-orange-200 transition"
        >
          {a.icon}
          {a.label}
        </button>
      ))}
    </div>
  );
};

export default ActionButtons;
