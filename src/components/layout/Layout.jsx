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
        <main className="flex-1 bg-[#F7F8FA] overflow-y-auto overflow-x-hidden">
          <div className="p-8 max-w-full">
            <Outlet />
          </div>
        </main>

      </div>

    </div>
  );
}

export default Layout;