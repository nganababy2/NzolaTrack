// ------------------------------------------------------------
"use client";

import { Plus } from "lucide-react";

interface DeliveryListProps {
  deliveries: any[];
  selectedDelivery: any;
  onDeliverySelect: (delivery: any) => void;
  setIsAdding: () => void;
}

const DeliveryList: React.ComponentType<DeliveryListProps> = ({
  deliveries,
  selectedDelivery,
  onDeliverySelect,
  setIsAdding,
}) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-bold">Entregas</h1>
        <Plus onClick={setIsAdding} className="hover:cursor-pointer" />
      </div>
      <div className="space-y-4">
        {deliveries.map((delivery) => (
          <div
            key={delivery.id}
            className={`p-4 border rounded-lg cursor-pointer ${
              selectedDelivery?.id === delivery.id
                ? "border-[#5932EA] border-2 text-[#5932EA]"
                : "border-gray-400"
            }`}
            onClick={() => onDeliverySelect(delivery)}
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="font-semibold">{delivery.id}</p>
                <p className="font-medium text-sm text-gray-400">
                  {delivery.type}
                </p>
              </div>
            </div>
            <div className="text-sm text-gray-400">
              <p>
                Origem: {delivery.origin.lat}, {delivery.origin.lng}
              </p>
              <p>
                Destino: {delivery.destination.lat}, {delivery.destination.lng}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeliveryList;
