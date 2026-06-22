import React from "react";
import { TiWarning } from "react-icons/ti";
import { FiSettings } from "react-icons/fi";
import ProfileHeader from "./components/ProfileHeader";
import ActionButtons from "./components/ActionButtons";
import InfoSection from "./components/InfoSection";
import VisitCard from "./components/VisitCard";
import PhysicianCard from "./components/PhysicianCard";
import Section from "./components/Section";
import Tag from "./components/Tag";

const ProfileCard = () => {
  const conditions = ["Hypertension", "Asthma", "Dermatitis"];

  const allergies = [
    { label: "Latex" },
    { label: "Levaquin" },
    { label: "Peanuts" },
    { label: "Penicillin", icon:  <TiWarning className="text-red-500" />, variant: "danger" },
  ];

  return (
    <div className="w-full max-w-xl mx-auto my-6 p-5 bg-white space-y-4 rounded-2xl border border-slate-200">
      {/* Profile Image */}
      <ProfileHeader />

      {/* Actions */}
      <ActionButtons />

      <hr className="h-px bg-gray-200 border-0" />

      {/* Details */}
      <InfoSection />

      <hr className="h-px bg-gray-200 border-0" />

      {/* Visit */}
      <Section title="Next Visit">
        <VisitCard />
      </Section>

      <hr className="h-px bg-gray-200 border-0" />

      {/* Physican */}
      <Section title="Primary Physican">
        <PhysicianCard />
      </Section>

      <hr className="h-px bg-gray-200 border-0" />

      {/* Conditions */}

      <Section title="Active Conditions">
        <div className="flex gap-2">
          {conditions.map((c) => (
            <Tag key={c} label={c} />
          ))}
        </div>
      </Section>

      <hr className="h-px bg-gray-200 border-0" />

      <Section title="Allergies">
        <div className="flex gap-2">
          {allergies.map((a) => (
            // <Tag key={a.label} label={a.label} variant={a.variant}/>
            <Tag key={a.label} {...a}/>
          ))}
        </div>
      </Section>

      {/* PreferenceBtn */}

      <button className="w-full flex items-center justify-center gap-2 bg-blue-50 text-blue-500 px-4 py-3 mt-6 rounded-lg border border-blue-400 hover:bg-blue-100 transition">
        <FiSettings className="w-5 h-5" />
        <p>Patient Preferences</p>
      </button>
    </div>
  );
};

export default ProfileCard;
