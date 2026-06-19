import React from "react";

const VisitCard = () => {
  return (
    <div className="flex justify-between items-center bg-gray-100 p-2 rounded-lg">
      <div className="flex items-center gap-1">
        <div className="h-12 w-1 mx-2 bg-blue-500 rounded-full"></div>

        <div>
          <p className="font-semibold text-gray-800">24 June Wednesday</p>
          <p className="text-sm text-gray-500">10:45 AM</p>
        </div>
      </div>

      <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-lg">Standard</span>
    </div>
  );
};

export default VisitCard;
