import React from "react";
import jamie from "../../../assets/day02/jamie.jpg";
import { HiOutlineDotsVertical } from "react-icons/hi";

const ProfileCard = () => {
  return (
    <div className="flex items-start justify-between bg-white px-3 py-3 m-3 rounded-xl">
      <div className="flex items-center gap-2">
        <img
          className="w-8 h-8 object-cover rounded-full"
          src={jamie}
          alt="User"
        />

        <div className="text-xs">
          <p className="font-medium">Anita Cruz</p>
          <p className="text-gray-400">anita@mods.com</p>
        </div>
      </div>

      <HiOutlineDotsVertical className="mt-1"  />
    </div>
  );
};

export default ProfileCard;
