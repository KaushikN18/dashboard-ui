import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import flowerLogo from "../../assets/images/flower-logo.png";

import {
  FiSearch,
  FiHome,
  FiShoppingCart,
  FiCalendar,
  FiMail,
  FiMessageSquare,
  FiFolder,
  FiFileText,
  FiUsers,
  FiChevronDown,
  FiChevronRight,
} from "react-icons/fi";

function Sidebar() {
  const [openMenu, setOpenMenu] = useState(true);

  const location = useLocation();

  const showCalendarSection =
    location.pathname === "/calendar" ||
    location.pathname === "/mail";

  const isEcommerceActive =
    location.pathname.startsWith("/products") ||
    location.pathname.startsWith("/orders") ||
    location.pathname.startsWith("/customers");

  return (
    <aside className="w-[270px] h-screen bg-white border-r border-[#ECECEC] flex flex-col">

      {/* Logo */}
      <div className="flex items-center gap-3 px-5 pt-5 pb-4">

        <img
          src={flowerLogo}
          alt="Flower"
          className="w-7 h-7 object-contain"
        />

        <h2 className="text-[18px] font-semibold tracking-wide text-[#2C2C2C]">
          FLOWER
        </h2>

      </div>

      {/* Search */}
      <div className="px-4 mt-1">

        <div className="flex items-center h-10 rounded-lg bg-[#F7F7F9] px-3">

          <FiSearch className="text-[#A8A8A8]" />

          <input
            type="text"
            placeholder="Search anything"
            className="ml-2 flex-1 bg-transparent outline-none text-[13px] placeholder:text-[#A8A8A8]"
          />

        </div>

      </div>

      {/* Main Menu */}
      <div className="mt-8">

        <p className="px-7 mb-4 text-[11px] font-semibold tracking-wider text-[#A4ACB9]">
          MAIN MENU
        </p>

        <div className="px-3">
                    {/* Dashboard */}
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2.5 rounded-lg text-[13px] font-medium transition-all ${
                isActive
                  ? "bg-[#B9F26D] text-[#222]"
                  : "text-[#555] hover:bg-gray-100"
              }`
            }
          >
            <FiHome size={16} />
            Dashboard
          </NavLink>

          {/* Profile */}
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `mt-2 flex items-center gap-3 px-4 py-2.5 rounded-lg text-[13px] font-medium transition-all ${
                isActive
                  ? "bg-[#B9F26D] text-[#222]"
                  : "text-[#555] hover:bg-gray-100"
              }`
            }
          >
            <FiUsers size={16} />
            Profile
          </NavLink>

          {/* E-Commerce */}
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className={`mt-2 w-full flex items-center justify-between px-4 py-2.5 rounded-lg transition-all ${
              isEcommerceActive
                ? "bg-[#B9F26D] text-[#222]"
                : "text-[#555] hover:bg-gray-100"
            }`}
          >
            <div className="flex items-center gap-3 text-[13px] font-medium">
              <FiShoppingCart size={16} />
              E-Commerce
            </div>

            {(openMenu || isEcommerceActive) ? (
              <FiChevronDown size={16} />
            ) : (
              <FiChevronRight size={16} />
            )}
          </button>

          {/* E-Commerce Sub Menu */}
          {(openMenu || isEcommerceActive) && (
            <div className="ml-8 mt-3 space-y-3">

              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `flex items-center gap-2 text-[13px] transition ${
                    isActive
                      ? "font-semibold text-[#2F9E44]"
                      : "text-[#666] hover:text-[#2F9E44]"
                  }`
                }
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                Products
              </NavLink>

              <NavLink
                to="/orders"
                className={({ isActive }) =>
                  `flex items-center gap-2 text-[13px] transition ${
                    isActive
                      ? "font-semibold text-[#2F9E44]"
                      : "text-[#666] hover:text-[#2F9E44]"
                  }`
                }
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                Orders
              </NavLink>

              <NavLink
                to="/customers"
                className={({ isActive }) =>
                  `flex items-center gap-2 text-[13px] transition ${
                    isActive
                      ? "font-semibold text-[#2F9E44]"
                      : "text-[#666] hover:text-[#2F9E44]"
                  }`
                }
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                Customers
              </NavLink>

            </div>
          )}
                    {/* Other Menu */}
          <div className="mt-6 space-y-1">

            {/* Calendar */}
            <NavLink
              to="/calendar"
              className={({ isActive }) =>
                `flex items-center justify-between px-4 py-2.5 rounded-lg text-[13px] transition ${
                  isActive
                    ? "bg-[#B9F26D] text-[#222]"
                    : "text-[#555] hover:bg-gray-100"
                }`
              }
            >
              <div className="flex items-center gap-3">
                <FiCalendar size={16} />
                Calendar
              </div>

              <FiChevronRight size={14} />
            </NavLink>

            {/* Mail */}
            <NavLink
              to="/mail"
              className={({ isActive }) =>
                `flex items-center justify-between px-4 py-2.5 rounded-lg text-[13px] transition ${
                  isActive
                    ? "bg-[#B9F26D] text-[#222]"
                    : "text-[#555] hover:bg-gray-100"
                }`
              }
            >
              <div className="flex items-center gap-3">
                <FiMail size={16} />
                Mail
              </div>

              <span className="w-4 h-4 rounded-full bg-red-500 text-white text-[9px] flex items-center justify-center">
                8
              </span>
            </NavLink>

            {/* Chat */}
            <NavLink
              to="/chat"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2.5 rounded-lg text-[13px] transition ${
                  isActive
                    ? "bg-[#B9F26D] text-[#222]"
                    : "text-[#555] hover:bg-gray-100"
                }`
              }
            >
              <FiMessageSquare size={16} />
              Chat
            </NavLink>

            {/* File Manager */}
            <NavLink
              to="/file-manager"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2.5 rounded-lg text-[13px] transition ${
                  isActive
                    ? "bg-[#B9F26D] text-[#222]"
                    : "text-[#555] hover:bg-gray-100"
                }`
              }
            >
              <FiFolder size={16} />
              File Manager
            </NavLink>

            {/* Notes */}
            <NavLink
              to="/notes"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2.5 rounded-lg text-[13px] transition ${
                  isActive
                    ? "bg-[#B9F26D] text-[#222]"
                    : "text-[#555] hover:bg-gray-100"
                }`
              }
            >
              <FiFileText size={16} />
              Notes
            </NavLink>

            {/* Contacts */}
            <NavLink
              to="/contacts"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2.5 rounded-lg text-[13px] transition ${
                  isActive
                    ? "bg-[#B9F26D] text-[#222]"
                    : "text-[#555] hover:bg-gray-100"
                }`
              }
            >
              <FiUsers size={16} />
              Contacts
            </NavLink>

          </div>

        </div>

      </div>
            {/* Calendar List */}
      {showCalendarSection && (
        <div className="mt-12 px-7 pb-6 overflow-y-auto">

          <div className="flex items-center justify-between mb-5">

            <p className="text-[11px] font-semibold tracking-wider text-[#A4ACB9]">
              CALENDARS
            </p>

            <button className="w-6 h-6 rounded-full bg-[#F5F6F8] hover:bg-[#ECECEC] text-[#687284] text-sm">
              +
            </button>

          </div>

          <div className="space-y-5">

            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded bg-[#FF6B6B]" />
              <span className="text-[14px] text-[#555]">
                Important
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded bg-[#56C7C2]" />
              <span className="text-[14px] text-[#555]">
                Meeting
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded bg-[#2F9E44]" />
              <span className="text-[14px] text-[#555]">
                Event
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded bg-[#FFD54F]" />
              <span className="text-[14px] text-[#555]">
                Work
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded bg-[#A0A8B8]" />
              <span className="text-[14px] text-[#555]">
                Other
              </span>
            </div>

          </div>

        </div>
      )}

    </aside>
  );
}

export default Sidebar;