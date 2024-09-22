import Image from "next/image";
import Header from "./components/Header";
import Dashboard from "./pages/dashboard/Dashboard";

export default function Home() {
  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Dashboard />
      </div>
    </>
  );
}
