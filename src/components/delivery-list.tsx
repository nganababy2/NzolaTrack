"use client";

import { useState } from "react";
import { Search, Phone, FileText, Truck, User } from "lucide-react";

const DeliveryList = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const deliveries = [
    {
      id: "EV-2017002346",
      type: "Food Materials",
      origin: "Luanda",
      destination: "Cidade da china",
      client: {
        name: "Luis Alexandre",
        company: "Mariene, LTD",
      },
    },
    {
      id: "EV-2017002346",
      type: "Food Materials",
      origin: "Luanda",
      destination: "Cidade da china",
      client: {
        name: "Blessing Ok",
        company: "Mariene, LTD",
      },
    },
  ];

  return (
    // {/* Deliveries List */}
    <div className="w-96 h-screen bg-white p-6 overflow-y-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-bold">NzolaTrack</h1>
      </div>

      {/* Search Bar */}
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Pesquisar..."
          className="w-full text-gray-700 pl-10 pr-4 py-2 bg-gray-50 rounded-lg"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
      </div>

      <h2 className="text-lg text-gray-700 font-semibold mb-4">Entregas</h2>

      {/* Delivery Cards */}
      <div className="space-y-4">
        {deliveries.map((delivery, index) => (
          <div
            key={index}
            className="p-4 border border-violet-100 rounded-lg hover:border-violet-500 cursor-pointer"
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="font-medium text-sm text-gray-500">
                  {delivery.id}
                </p>
                <p className="text-sm text-gray-400">{delivery.type}</p>
              </div>
              <div className="w-12">
                <Truck className="text-gray-400" size={24} />
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <p className="text-sm text-gray-700">{delivery.origin}</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-violet-500 rounded-full" />
                <p className="text-sm text-gray-700">{delivery.destination}</p>
              </div>
              <div className="flex items-center space-x-2 pt-2">
                <User className="text-gray-400" size={20} />
                <div>
                  <p className="text-sm text-gray-700 font-medium">Cliente</p>
                  <p className="text-sm text-gray-500">
                    {delivery.client.name}
                  </p>
                  <p className="text-xs text-gray-400">
                    {delivery.client.company}
                  </p>
                </div>
              </div>
              <div className="flex space-x-2 pt-2">
                <button className="p-2 text-violet-600 hover:bg-violet-50 rounded-lg">
                  <Phone size={20} />
                </button>
                <button className="p-2 text-violet-600 hover:bg-violet-50 rounded-lg">
                  <FileText size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeliveryList;
