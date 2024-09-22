import Dashboard from "./component/dashboard/Dashboard";
import Header from "./component/header/Header";


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
