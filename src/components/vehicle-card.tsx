"use client";

const VehicleCard = ({ vehicle }) => {
  return (
    <div className="w-72 p-4 border rounded-lg ">
      <div className="flex items-center space-x-4">
        <div>
          <h3 className="text-xl font-semibold">
            {vehicle.brand + " - " + vehicle.model}
          </h3>
          <p className="text-sm">{vehicle.plate}</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-sm font-medium">ID: {vehicle.id}</p>
        <p className="text-sm font-medium ">Tipo: {vehicle.type}</p>
        <p className="text-sm font-medium ">Estado: {vehicle.status}</p>
      </div>
    </div>
  );
};

export default VehicleCard;
