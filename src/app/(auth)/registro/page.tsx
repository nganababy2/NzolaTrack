"use client";

import React, { useState } from "react";
import axios from "axios";
import { redirect } from "next/navigation";

const CompanyRegistrationForm = () => {
  const [formData, setFormData] = useState({
    id: 0,
    name: "",
    nif: "",
    email: "",
    phone: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("As senhas não coincidem");
      return;
    }

    axios.get("http://localhost:3001/companies").then((res) => {
      formData.id = res.data.length + 1;
    });

    axios.post("http://localhost:3001/companies", formData);

    console.log("Form submitted:", formData);
    setFormData({
      id: 0,
      name: "",
      nif: "",
      email: "",
      phone: "",
      username: "",
      password: "",
      confirmPassword: "",
    });
    redirect("/login");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    // {/* <div className="relative w-full max-w-md"> */}
    // {/* Purple decorative shapes */}
    // {/* <div className="absolute top-0 left-0 w-64 h-64 bg-violet-600 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl opacity-80" /> */}
    // {/* <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-600 rounded-tr-full blur-2xl opacity-80" /> */}

    // {/* Form card */}
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center rounded-lg p-12 relative z-10 border-2">
        <div className="space-y-16">
          <h1 className="text-2xl pb-4">Registro</h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-8">
            <div>
              <div>
                <label className="block text-md">Nome da Empresa</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-2 bg-transparent border-b border-gray-400 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm">NIF</label>
                <input
                  type="tel"
                  name="nif"
                  value={formData.nif}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-2 bg-transparent border-b border-gray-400 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm">Telefone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-2 bg-transparent border-b border-gray-400 outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-2 bg-transparent border-b border-gray-400 outline-none"
                  required
                />
              </div>
            </div>
            <div>
              <div>
                <label className="block text-sm">Utilizador</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-2 bg-transparent border-b border-gray-400 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm ">Senha</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-2 bg-transparent border-b border-gray-400 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm ">Confirmar Senha</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-2 bg-transparent border-b border-gray-400 outline-none"
                  required
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#5932EA] py-2 px-4 rounded-md hover:bg-violet-700 transition-colors mt-6"
          >
            REGISTRAR
          </button>
        </form>
      </div>
    </div>
    // {/* </div> */}
  );
};

export default CompanyRegistrationForm;
