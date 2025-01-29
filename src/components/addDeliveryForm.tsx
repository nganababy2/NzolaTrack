"use client";

import { X } from "lucide-react";
import { useState } from "react";

const AddDeliveryForm = ({ onAddDelivery, setIsCancelling }) => {
  const [formData, setFormData] = useState({
    id: "",
    type: "",
    origin: { lat: "", lng: "" },
    destination: { lat: "", lng: "" },
    client: {
      name: "",
      company: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const keys = name.split(".");
    if (keys.length === 1) {
      setFormData((prev) => ({ ...prev, [name]: value }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [keys[0]]: {
          ...prev[keys[0]],
          [keys[1]]: value,
        },
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onAddDelivery) onAddDelivery(formData);
    setFormData({
      id: "",
      type: "",
      origin: { lat: "", lng: "" },
      destination: { lat: "", lng: "" },
      client: { name: "", company: "" },
    });
  };

  return (
    <div className="h-screen w-full ">
      <div className="w-full max-w-md mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Adicionar Entrega</h2>
          <X onClick={setIsCancelling} className="hover:cursor-pointer" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">ID da Entrega</label>
            <input
              type="text"
              name="id"
              value={formData.id}
              onChange={handleChange}
              className="w-full border-b p-2 bg-transparent outline-none"
              placeholder="Ex: EV-123456"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Tipo</label>
            <input
              type="text"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full border-b  p-2 bg-transparent outline-none"
              placeholder="Ex: Materiais Alimentícios"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">
              Origem (Lat, Lng)
            </label>
            <div className="flex space-x-2">
              <input
                type="number"
                name="origin.lat"
                value={formData.origin.lat}
                onChange={handleChange}
                className="w-1/2 border-b p-2 bg-transparent outline-none"
                placeholder="Latitude"
                required
              />
              <input
                type="number"
                name="origin.lng"
                value={formData.origin.lng}
                onChange={handleChange}
                className="w-1/2 border-b p-2 bg-transparent outline-none"
                placeholder="Longitude"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium">
              Destino (Lat, Lng)
            </label>
            <div className="flex space-x-2">
              <input
                type="number"
                name="destination.lat"
                value={formData.destination.lat}
                onChange={handleChange}
                className="w-1/2 border-b p-2 bg-transparent outline-none"
                placeholder="Latitude"
                required
              />
              <input
                type="number"
                name="destination.lng"
                value={formData.destination.lng}
                onChange={handleChange}
                className="w-1/2 border-b p-2 bg-transparent outline-none"
                placeholder="Longitude"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium">Cliente</label>
            <div className="space-y-2">
              <input
                type="text"
                name="client.name"
                value={formData.client.name}
                onChange={handleChange}
                className="w-full border-b p-2 bg-transparent outline-none"
                placeholder="Nome do Cliente"
                required
              />
              <input
                type="text"
                name="client.phone"
                value={formData.client.company}
                onChange={handleChange}
                className="w-full border-b p-2 bg-transparent outline-none"
                placeholder="Telefone do Cliente"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-violet-600 text-white py-2 hover:bg-violet-500"
          >
            Adicionar Entrega
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDeliveryForm;
