"use client";

import { DriverCard, VehicleCard } from "@/components";
import axios from "axios";
import { Plus, Users, Truck } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const TrucksPage = () => {
  const router = useRouter();
  const [vehiclesList, setVehiclesList] = useState<any[]>([]);
  const [driversList, setDriversList] = useState<any[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3001/vehicles").then((res) => {
      setVehiclesList(res.data);
    });

    axios.get("http://localhost:3001/drivers").then((res) => {
      setDriversList(res.data);
    });
  });

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-11/12 h-4/5 border-2 rounded p-8 space-y-8">
        <div>
          <div className="flex justify-between mt-8">
            <div className="flex items-center space-x-4 mb-8">
              <Users />
              <p className="text-2xl mb-3">Motoristas</p>
            </div>
            <div className="flex items-center space-x-4">
              <Plus
                className="hover:cursor-pointer"
                onClick={() => router.push("/gestao/add-motorista")}
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {driversList.map((driver) => (
              <DriverCard driver={driver} key={driver.name} />
            ))}
          </div>
        </div>
        <hr />
        <div>
          <div className="flex justify-between mt-8">
            <div className="flex items-center space-x-4 mb-8">
              <Truck />
              <p className="text-2xl">Veículos</p>
            </div>
            <div>
              <Plus
                className="hover:cursor-pointer"
                onClick={() => router.push("/gestao/add-veiculo")}
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {vehiclesList.map((vehicle) => (
              <VehicleCard vehicle={vehicle} key={vehicle.plate} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrucksPage;
