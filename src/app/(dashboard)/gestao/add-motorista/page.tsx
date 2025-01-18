"use client";

import axios from "axios";
import { Mail, Phone, User } from "lucide-react";
import { redirect } from "next/navigation";
import { useState } from "react";

const AddDriver = () => {
  const [formData, setFormData] = useState({
    id: 0,
    name: "",
    phone: "",
    idNumber: "",
    email: "",
    password: "",
    companyId: 1,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.get("http://localhost:3001/drivers").then((res) => {
      formData.id = res.data.lenght + 1;
    });

    axios.post("http://localhost:3001/drivers", formData);

    redirect("/gestao");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="flex h-screen w-full items-center justify-center">
        <div className="flex flex-col items-center justify-between w-[400px] p-12 border-2 rounded-lg space-y-6">
          <h1 className="text-2xl font-semibold">Adicionar Motorista</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="text-lg">Nome do Motorista</label>
              <div className="flex items-center border-b justify-between border-gray-400 p-3">
                <input
                  className="w-full bg-transparent border-none outline-none"
                  type="text"
                  name="name"
                  placeholder="Nome Completo"
                  onChange={handleChange}
                  required
                />
                <User size={28} />
              </div>
            </div>

            <div>
              <label className="text-lg">Nº de Identificação</label>
              <div className="flex items-center border-b justify-between border-gray-400 p-3">
                <input
                  className="w-full bg-transparent border-none outline-none"
                  type="text"
                  name="idNumber"
                  placeholder="Número de Identificação"
                  onChange={handleChange}
                  required
                />
                <Phone size={28} />
              </div>
            </div>

            <div>
              <label className="text-lg">Telefone</label>
              <div className="flex items-center border-b justify-between border-gray-400 p-3">
                <input
                  className="w-full bg-transparent border-none outline-none"
                  type="tel"
                  name="phone"
                  placeholder="Número de Telefone"
                  onChange={handleChange}
                  required
                />
                <Phone size={28} />
              </div>
            </div>

            <div>
              <label className="text-lg">Email</label>
              <div className="flex items-center border-b justify-between border-gray-400 p-3">
                <input
                  className="w-full bg-transparent border-none outline-none"
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  required
                />
                <Mail size={28} />
              </div>
            </div>
            <button
              type="submit"
              className="w-full p-2 text-lg text-white bg-violet-600 rounded-md hover:bg-violet-700 transition duration-300"
            >
              Adicionar Motorista
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddDriver;
