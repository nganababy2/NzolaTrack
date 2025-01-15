"use client";

import { Eye, EyeOff, User } from "lucide-react";
// import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// import { LogoImg } from "@/assets";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center justify-between w-[400px] p-12 border-2 rounded-lg space-y-4">
        <div className="space-y-16">
          {/* <div className="flex flex-col space-y-3 items-center justify-center">
            <Image src={LogoImg} alt="NzolaTrack logo" />
            <p className="text-lg">NzolaTrack</p>
          </div> */}
          <h1 className="text-2xl pb-4">Iniciar Sessão</h1>
        </div>
        <form className="w-full space-y-4">
          <div>
            <label className="text-lg ">Utilizador</label>
            <div className="flex items-center border-b justify-between border-gray-400 p-3">
              <input
                className="w-full bg-transparent border-none outline-none"
                type="text"
                name="username"
              />
              <User size={28} />
            </div>
          </div>
          <div>
            <label className="text-lg ">Senha</label>
            <div className="flex items-center border-b justify-between border-gray-400 p-3">
              <input
                className="w-full bg-transparent border-none outline-none"
                type={!showPassword ? "password" : "text"}
                name="password"
              />
              {!showPassword ? (
                <EyeOff
                  onClick={() => handleShowPassword()}
                  size={28}
                  cursor={"pointer"}
                />
              ) : (
                <Eye
                  onClick={() => handleShowPassword()}
                  size={28}
                  cursor={"pointer"}
                />
              )}
            </div>
          </div>
          <button
            className="w-full p-1 rounded-md text-lg bg-[#5932EA]"
            type="submit"
          >
            Entrar
          </button>
        </form>
      </div>
      <Link href="/dashboard">Dashboard</Link>
    </div>
  );
};

export default LoginPage;
