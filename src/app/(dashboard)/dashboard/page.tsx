"use client";

import DeliveryList from "@/components/delivery-list";
import { redirect } from "next/navigation";

const DeliveryDashboard = () => {
  return redirect("/deliveries");
};

export default DeliveryDashboard;
