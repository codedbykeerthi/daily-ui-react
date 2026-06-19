import React from "react";
import Doctor from "../../../assets/Doctor.jpg";

const PhysicianCard = () => {
  return (
    <div className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg">
      <img
        className="w-12 h-12 object-cover rounded-lg"
        src={Doctor}
        alt="Physican"
      />

      <div>
        <p className="font-semibold text-gray-800">Dr Steven Louis</p>
        <p className="text-gray-500">MBBS</p>
      </div>
    </div>
  );
};

export default PhysicianCard;
