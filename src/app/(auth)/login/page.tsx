"use client";

import axios from "axios";
import { Eye, EyeOff, User } from "lucide-react";
// import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
// import { LogoImg } from "@/assets";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.get("http://localhost:3001/companies").then((res) => {
      res.data.forEach((company) => {
        if (
          company.username === formData.username &&
          company.password === formData.password
        ) {
          console.log("Logged in");
          redirect("/dashboard");
        } else {
          alert("Credenciais Inválidas");
        }
      });
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <div>
            <label className="text-lg ">Utilizador</label>
            <div className="flex items-center border-b justify-between border-gray-400 p-3">
              <input
                className="w-full bg-transparent border-none outline-none"
                type="text"
                name="username"
                onChange={handleChange}
                required
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
                onChange={handleChange}
                required
              />
              {!showPassword ? (
                <EyeOff
                  onClick={() => handleShowPassword()}
                  size={28}
                  className="hover:cursor-pointer"
                />
              ) : (
                <Eye
                  onClick={() => handleShowPassword()}
                  size={28}
                  className="hover:cursor-pointer"
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
        <div className="flex flex-col space-y-4">
          <div>
            <p className="text-sm">
              Esqueceu a Senha?{" "}
              <Link href="/recuperar-senha" className="text-sm underline">
                Recuperar Credenciais
              </Link>
            </p>
          </div>
          <div>
            <p className="text-sm">
              Ainda não possui uma conta?{" "}
              <Link href="/registro" className="text-sm underline">
                Registre-se
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
