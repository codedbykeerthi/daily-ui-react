import React from "react";

const Tag = ({ label, icon, variant = "default" }) => {
  const base = "px-3 py-1 text-sm rounded-md";

  const styles =
    variant === "danger"
      ? "bg-red-100 text-red-500"
      : "bg-gray-100 text-gray-500";

  return <span className={`${base} ${styles} flex items-center gap-1`}>
    {icon}
    {label}
    </span>;
};

export default Tag;
