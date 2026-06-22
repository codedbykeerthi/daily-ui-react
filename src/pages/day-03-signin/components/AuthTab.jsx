import React from "react";

const AuthTab = ({ label, isActive, onClick }) => {
  function handleClick() {
    onClick();
  }

  return (
    <div>
      <button
        onClick={handleClick}
        className={`w-full p-4 text-sm font-semibold ${isActive ? "bg-white border-b-2 border-blue-600 transition-all duration-200 text-blue-600" : "hover:text-blue-600 border-b-2 border-slate-100"} `}
      >
        {label}
      </button>

       {/* <button
        onClick={handleClick}
        className={`w-full p-4 text-sm font-semibold rounded-md transition-all ${isActive ? "bg-white shadow text-blue-600" : "hover:text-blue-600 text-gray-500"} `}
      >
        {label}
      </button> */}
    </div>
  );
};

export default AuthTab;
