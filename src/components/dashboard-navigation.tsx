"use client";

import { LogoImg } from "@/assets";
import Image from "next/image";
import {
  // FileText,
  Truck,
  ClipboardList,
  User,
  Home,
  LogOut,
} from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { MenuItem } from "@/components";

const DashboardNavigation = () => {
  const router = useRouter();
  const currentPath = usePathname();

  const routes = [
    { path: "/dashboard", title: "Home", icon: Home },
    { path: "/entregas", title: "Entregas", icon: Truck },
    { path: "/gestao", title: "Gestão", icon: ClipboardList },
    { path: "/conta", title: "Conta", icon: User },
  ];

  const isActive = (currentPath: string, path: string): string =>
    currentPath === path ? "text-[#5932EA]" : "hover:text-violet-600";

  return (
    <div className="col-span-1 w-full h-screen flex flex-col items-center justify-betweens py-6 space-y-8">
      <div>
        <Image src={LogoImg} alt="NzolaTrack logo" />
      </div>

      <nav className="flex flex-col space-y-6 w-full items-center">
        {routes.map((route) => (
          <MenuItem
            key={route.path}
            onClick={() => router.push(route.path)}
            className={`${isActive(currentPath, route.path)}`}
            icon={route.icon}
            title={route.title}
          />
        ))}
        {/* <button
          onClick={() => router.push("/relatorios")}
          className={`flex flex-col items-center justify-center p-3 rounded-lg ${isActive(
            "/relatorios"
          )}`}
        >
          <FileText />
          <span className="text-md mt-2">Relatórios</span>
        </button> */}
      </nav>

      <div className="mt-auto">
        <MenuItem
          onClick={() => router.push("/login")}
          className={`${isActive(currentPath, "/login")}`}
          icon={LogOut}
          title="Sair"
        />
      </div>
    </div>
  );
};

export default DashboardNavigation;
