import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

function Layout() {
  return (
    <div className="flex h-screen bg-[#F7F8FA] overflow-hidden">

      {/* Sidebar */}
      <Sidebar />

      {/* Right Side */}
      <div className="flex flex-col flex-1 overflow-hidden">

        {/* Header */}
        <Header />

        {/* Page Content */}
        <main className="flex-1 overflow-auto bg-[#F7F8FA] p-8">

          <div className="min-w-[1400px] min-h-full">

            <Outlet />

          </div>

        </main>

      </div>

    </div>
  );
}

export default Layout;