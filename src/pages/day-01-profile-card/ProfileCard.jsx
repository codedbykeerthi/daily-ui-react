import React from "react";
import { TiWarning } from "react-icons/ti";
import { FiSettings } from "react-icons/fi";
import ProfileHeader from "./components/ProfileHeader";
import ActionButtons from "./components/ActionButtons";
import InfoSection from "./components/InfoSection";
import VisitCard from "./components/VisitCard";
import PhysicianCard from "./components/PhysicianCard";

const ProfileCard = () => {
  return (
    <div className="w-full min-w-md max-w-xl mx-auto my-6 p-5 bg-white space-y-4 rounded-2xl border border-slate-200">
      {/* Profile Image */}
    <ProfileHeader />

      {/* Actions */}
     <ActionButtons />

      <hr className="h-px bg-gray-200 border-0" />

      {/* Details */}
      <InfoSection />

      <hr className="h-px bg-gray-200 border-0" />

      {/* Visit */}
<p className="text-gray-400">Next Visit</p>
     <VisitCard />

      <hr className="h-px bg-gray-200 border-0" />

      {/* Physican */}
        <p className="text-gray-400">Primary Physican</p>

     <PhysicianCard />

      <hr className="h-px bg-gray-200 border-0" />

      {/* Conditions */}

      <div className="space-y-4">
        <div className="space-y-2">
          <p className="text-gray-400">Active Conditions</p>

          <div className="flex space-x-2">
            <p className="px-3 py-1 bg-gray-100 text-gray-500 rounded-md">
              Hypertension
            </p>
            <p className="px-3 py-1 bg-gray-100 text-gray-500 rounded-md">
              Asthma
            </p>
            <p className="px-3 py-1 bg-gray-100 text-gray-500 rounded-md">
              Dermatits
            </p>
          </div>
        </div>

        <hr className="h-px bg-gray-200 border-0" />

        <div className="space-y-2">
          <p className="text-gray-400">Allergies</p>

          <div className="flex space-x-2">
            <p className="px-3 py-1 bg-gray-100 text-gray-500 rounded-md">
              Latex
            </p>
            <p className="px-3 py-1 bg-gray-100 text-gray-500 rounded-md">
              Levaquin
            </p>
            <p className="px-3 py-1 bg-gray-100 text-gray-500 rounded-md">
              Peanuts
            </p>

            <span className="bg-red-100 px-2 py-1 space-x-1 flex items-center rounded-md">
              <TiWarning className="text-red-500" />
              <p className="text-red-500">Penicilin</p>
            </span>
          </div>
        </div>
      </div>

      {/* PreferenceBtn */}

      <div className="w-full flex bg-blue-100 justify-center items-center text-blue-500 gap-2 px-4 py-2.5 mt-12 rounded-lg border border-blue-400">
        <FiSettings className="w-5 h-5" />
        <p>Patient Preferences</p>
      </div>
    </div>
  );
};

export default ProfileCard;
