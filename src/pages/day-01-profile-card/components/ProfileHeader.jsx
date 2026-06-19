import React from "react";
import Person from '../../../assets/Person.jpg';

const ProfileHeader = () => {
  return (
    <div className="space-y-1">
      <div className="relative">
        <img
          className="w-24 h-24 rounded-full object-cover"
          src={Person}
          alt="Patient"
        />

        <p className="absolute top-0 right-0 text-teal-500 text-xs py-2 px-3 bg-teal-100 rounded-lg border border-teal-500">
          245566742-2B
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold">Damien Smith</h2>
        <p className="text-sm text-gray-400">Male 34 yrs 6 mos</p>
      </div>
    </div>
  );
};

export default ProfileHeader;
