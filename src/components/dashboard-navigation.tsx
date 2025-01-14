"use client";

import { FileText, Truck, ClipboardList, Settings, User } from "lucide-react";
import { useRouter } from "next/navigation";

const DashboardNavigation = () => {
  const router = useRouter();

  return (
    <div className="col-span-1 w-full bg-white h-screen flex flex-col items-center py-6 space-y-8">
      <div className="w-12 h-12">
        <div className="bg-violet-600 w-full h-full rounded-lg flex items-center justify-center">
          <div className="w-6 h-6 bg-white rounded" />
        </div>
      </div>

      <nav className="flex flex-col space-y-6">
        <button
          onClick={() => router.push("/deliveries")}
          className="p-3 text-violet-600 bg-violet-50 rounded-lg"
        >
          <Truck size={24} />
        </button>
        <button
          onClick={() => router.push("/trucks")}
          className="p-3 text-gray-400 hover:text-violet-600 hover:bg-violet-50 rounded-lg"
        >
          <ClipboardList size={24} />
        </button>
        <button className="p-3 text-gray-400 hover:text-violet-600 hover:bg-violet-50 rounded-lg">
          <FileText size={24} />
        </button>
        <button className="p-3 text-gray-400 hover:text-violet-600 hover:bg-violet-50 rounded-lg">
          <Settings size={24} />
        </button>
      </nav>

      <div className="mt-auto">
        <button className="p-3 text-gray-400 hover:text-violet-600 hover:bg-violet-50 rounded-lg">
          <User size={24} />
        </button>
      </div>
    </div>
  );
};

export default DashboardNavigation;
