//

// ----------------------------------

"use client";

import { useState } from "react";
import { AddDelivery, DeliveryList, MapView } from "@/components";

const DeliveriesPage = () => {
  const [selectedDelivery, setSelectedDelivery] = useState(null);
  const [isAddingDelivery, setIsAddingDelivery] = useState(false);

  const deliveries = [
    {
      id: "EV-2017002346",
      type: "Food Materials",
      origin: { lat: -8.838333, lng: 13.234444 },
      destination: { lat: -8.94, lng: 13.29 },
      client: {
        name: "Luis Alexandre",
        company: "Mariene, LTD",
      },
    },
    {
      id: "EV-2017002347",
      type: "Electronic Goods",
      origin: { lat: -8.833, lng: 13.25 },
      destination: { lat: -8.85, lng: 13.3 },
      client: {
        name: "Blessing Ok",
        company: "ElectroServe, Inc.",
      },
    },
  ];

  return (
    <div className="flex h-screen w-96 p-6 overflow-y-auto border-r">
      {isAddingDelivery ? (
        <AddDelivery
          onAddDelivery={isAddingDelivery}
          setIsCancelling={() => {
            setIsAddingDelivery(false);
          }}
        />
      ) : (
        <>
          <DeliveryList
            deliveries={deliveries}
            selectedDelivery={selectedDelivery}
            onDeliverySelect={(delivery) => setSelectedDelivery(delivery)}
            setIsAdding={() => {
              setIsAddingDelivery(true);
            }}
          />
        </>
      )}
      <MapView selectedDelivery={selectedDelivery} />
    </div>
  );
};

export default DeliveriesPage;
