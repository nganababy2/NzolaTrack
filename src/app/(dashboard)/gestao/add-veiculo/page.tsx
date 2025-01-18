"use client";

import axios from "axios";
import { Truck } from "lucide-react";
import { redirect } from "next/navigation";
import { useState } from "react";

const AddDriverVehicle = () => {
  const [formData, setFormData] = useState({
    id: 0,
    brand: "",
    plate: "",
    model: "",
    year: "",
    driverId: 1,
    status: "Disponível",
    type: "Carrinha",
    companyId: 1,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.get("http://localhost:3001/vehicles").then((res) => {
      formData.id = res.data.length + 1;
    });

    axios.post("http://localhost:3001/vehicles", formData);

    console.log("Form submitted:", formData);

    // setFormData({
    //   id: 0,
    //   model: "",
    //   plate: "",
    //   year: "",
    //   driverId: 0,
    //   status: "Disponível",
    //   type: "Carrinha",
    //   companyId: 0,
    // });

    redirect("/gestao");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center justify-between w-[400px] p-12 border-2 rounded-lg space-y-6">
        <h1 className="text-2xl font-semibold">Adicionar Veículo</h1>

        <div className="flex space-x-4"></div>

        <form onSubmit={handleSubmit} className="w-full space-y-4">
          {/* Formulário de Motorista */}

          {/* Formulário de Veículo */}
          <>
            <div>
              <label className="text-lg">Marca</label>
              <div className="flex items-center border-b justify-between border-gray-400 p-3">
                <input
                  className="w-full bg-transparent border-none outline-none"
                  type="text"
                  name="brand"
                  placeholder="Marca"
                  onChange={handleChange}
                  required
                />
                <Truck size={28} />
              </div>
            </div>
            <div>
              <label className="text-lg">Modelo do Veículo</label>
              <div className="flex items-center border-b justify-between border-gray-400 p-3">
                <input
                  className="w-full bg-transparent border-none outline-none"
                  type="text"
                  name="model"
                  placeholder="Modelo"
                  onChange={handleChange}
                  required
                />
                <Truck size={28} />
              </div>
            </div>

            <div>
              <label className="text-lg">Matricula</label>
              <div className="flex items-center border-b justify-between border-gray-400 p-3">
                <input
                  className="w-full bg-transparent border-none outline-none"
                  type="text"
                  name="plate"
                  placeholder="Matricula"
                  onChange={handleChange}
                  required
                />
                <Truck size={28} />
              </div>
            </div>

            <div>
              <label className="text-lg">Ano de Fabricação</label>
              <div className="flex items-center border-b justify-between border-gray-400 p-3">
                <input
                  className="w-full bg-transparent border-none outline-none"
                  type="number"
                  name="year"
                  placeholder="Ano de fabricação"
                  onChange={handleChange}
                  required
                />
                <Truck size={28} />
              </div>
            </div>
          </>

          <button
            type="submit"
            className="w-full p-2 text-lg text-white bg-violet-600 rounded-md hover:bg-violet-700 transition duration-300"
          >
            Adicionar Veículo
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDriverVehicle;
