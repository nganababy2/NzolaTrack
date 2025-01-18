"use client";

import React from "react";

interface DashboardItemProps {
  onClick: () => void;
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  className?: string;
}

const DashboardItem: React.FC<DashboardItemProps> = ({
  onClick,
  title = "title",
  icon: Icon,
  className,
}) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`flex flex-col items-center justify-center p-3 rounded-lg ${className}`}
      >
        {Icon && <Icon />}
        <span className="text-md mt-2">{title}</span>
      </button>
    </div>
  );
};

export default DashboardItem;
