import { DeliveryList, MapView } from "@/components";

const DeliveriesPage = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <DeliveryList />
      <MapView />
    </div>
  );
};

export default DeliveriesPage;
