import { Dashboard } from "@/components/";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className=" grid grid-cols-12 p-4">
      <Dashboard />
      <div className="col-span-11">{children}</div>
    </div>
  );
};

export default DashboardLayout;
