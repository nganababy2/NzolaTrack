"use client";

const DriverCard = ({ driver }) => {
  return (
    <div className="w-72 p-4 border rounded-lg">
      <div className="flex items-center space-x-4">
        <div>
          <h3 className="text-xl font-semibold">{driver.name}</h3>
          <p className="text-sm ">{driver.phone}</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-sm font-medium ">ID: {driver.id}</p>
        {/* <p className="text-sm font-medium ">: {driver.license}</p> */}
        {/* <p className="text-sm font-medium ">Estado: {driver.status}</p> */}
      </div>
    </div>
  );
};

export default DriverCard;
