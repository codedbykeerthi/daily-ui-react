import React from "react";

const InfoItem = ({ label, value }) => (
  <div className="space-y-1">
    <p className="text-sm text-gray-400">{label}</p>
    <p className="">{value}</p>
  </div>
);

const InfoSection = () => {
  return (
    <div className="space-y-4">
      <InfoItem label="DOB" value="17th February, 1990" />

      <InfoItem
        label="Address"
        value={
          <>
            5200 Colins Ave <br />
            Sunny Isles Beach, Florida 33160
          </>
        }
      />

      <InfoItem
        label="Contacts"
        value={
          <>
            Email: damiengsmith@gmail.com <br />
            Mobile: (405) 343-3446
          </>
        }
      />
    </div>
  );
};

export default InfoSection;
