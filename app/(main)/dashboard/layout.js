import DashboardPage from "./page";
import { BarLoader } from "react-spinners";
import { Suspense } from "react";

export default function Layout() {
  return (
    <div className="container mx-auto">
      <div className="mb-5">
        <h1 className="text-5xl font-bold tracking-tight gradient-title">
          Dashboard
        </h1>
      </div>
      <Suspense
        fallback={<BarLoader className="mt-4" width={"100%"} color="#45819b" />}
      >
        <DashboardPage />
      </Suspense>
    </div>
  );
}