import { useState } from "react";
import { NavLink } from "react-router-dom";
import flowerLogo from "../../assets/images/flower-logo.png";

import {
  FiSearch,
  FiHome,
  FiShoppingCart,
  FiCalendar,
  FiMail,
  FiMessageSquare,
  FiClipboard,
  FiBriefcase,
  FiFolder,
  FiFileText,
  FiUsers,
  FiUser,
  FiChevronDown,
  FiChevronRight,
} from "react-icons/fi";

const menuItems = [
  {
    title: "Dashboard",
    path: "/",
    icon: <FiHome size={16} />,
    end: true,
  },
  {
    title: "Profile",
    path: "/profile",
    icon: <FiUser size={16} />,
  },
  {
    title: "Calendar",
    path: "/calendar",
    icon: <FiCalendar size={16} />,
    trailingIcon: <FiChevronRight size={14} />,
  },
  {
    title: "Mail",
    path: "/mail",
    icon: <FiMail size={16} />,
    badge: 8,
  },
  {
    title: "Chat",
    path: "/chat",
    icon: <FiMessageSquare size={16} />,
  },
  {
    title: "Task",
    path: "/task",
    icon: <FiClipboard size={16} />,
  },
  {
    title: "Projects",
    path: "/projects",
    icon: <FiBriefcase size={16} />,
  },
  {
    title: "File Manager",
    path: "/file-manager",
    icon: <FiFolder size={16} />,
  },
  {
    title: "Notes",
    path: "/notes",
    icon: <FiFileText size={16} />,
  },
  {
    title: "Contacts",
    path: "/contacts",
    icon: <FiUsers size={16} />,
  },
];

const ecommerceSubItems = [
  { title: "Products", path: "/products" },
  { title: "Orders", path: "/orders" },
  { title: "Customers", path: "/customers" },
];

const calendarLegend = [
  ["#FF6B6B", "Important"],
  ["#56C7C2", "Meeting"],
  ["#42C96A", "Event"],
  ["#FFD54F", "Work"],
  ["#A0A8B8", "Other"],
];

function Sidebar() {
  const [openMenu, setOpenMenu] = useState(true);

  return (
    <aside className="w-[270px] h-screen bg-white border-r border-[#ECECEC] flex flex-col">
      {/* Logo */}
      <div className="flex items-center gap-3 px-6 pt-6 pb-5">
        <img
          src={flowerLogo}
          alt="Flower"
          className="w-7 h-7 object-contain"
        />

        <h2 className="text-[18px] font-semibold text-[#2C2C2C]">FLOWER</h2>
      </div>

      {/* Search */}
      <div className="px-5">
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
      <div className="flex-1 overflow-y-auto px-3 mt-8">
        <p className="px-4 mb-4 text-[11px] tracking-wider font-semibold text-[#A4ACB9]">
          MAIN MENU
        </p>

        {/* Dashboard (rendered from menuItems[0]) */}
        <NavLink
          to={menuItems[0].path}
          end={menuItems[0].end}
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl text-[13px] transition ${
              isActive
                ? "bg-[#B9F26D] text-[#2F3442] font-medium"
                : "text-[#687284] hover:bg-[#F5F6F8]"
            }`
          }
        >
          {menuItems[0].icon}
          {menuItems[0].title}
        </NavLink>

        {/* Profile (rendered from menuItems[1]) */}
        <NavLink
          to={menuItems[1].path}
          className={({ isActive }) =>
            `mt-2 flex items-center gap-3 px-4 py-3 rounded-xl text-[13px] transition ${
              isActive
                ? "bg-[#B9F26D] text-[#2F3442] font-medium"
                : "text-[#687284] hover:bg-[#F5F6F8]"
            }`
          }
        >
          {menuItems[1].icon}
          {menuItems[1].title}
        </NavLink>

        {/* Ecommerce (dropdown, kept separate since it has sub-items) */}
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="mt-2 w-full flex items-center justify-between px-4 py-3 rounded-xl bg-[#B9F26D]"
        >
          <div className="flex items-center gap-3 text-[13px] text-[#2F3442] font-medium">
            <FiShoppingCart size={16} />
            E-Commerce
          </div>

          {openMenu ? (
            <FiChevronDown size={16} />
          ) : (
            <FiChevronRight size={16} />
          )}
        </button>

        {openMenu && (
          <div className="ml-8 mt-3 space-y-3">
            {ecommerceSubItems.map((sub) => (
              <NavLink
                key={sub.path}
                to={sub.path}
                className="block text-[13px] text-[#687284] hover:text-[#2F3442]"
              >
                {sub.title}
              </NavLink>
            ))}
          </div>
        )}

        {/* Remaining menu items, data-driven */}
        {menuItems.slice(2).map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `mt-1 flex items-center justify-between px-4 py-3 rounded-xl text-[13px] transition ${
                isActive
                  ? "bg-[#B9F26D] text-[#2F3442]"
                  : "text-[#687284] hover:bg-[#F5F6F8]"
              }`
            }
          >
            <div className="flex items-center gap-3">
              {item.icon}
              {item.title}
            </div>

            {item.badge && (
              <span className="w-4 h-4 rounded-full bg-[#FF5D5D] text-white text-[9px] flex items-center justify-center">
                {item.badge}
              </span>
            )}

            {item.trailingIcon}
          </NavLink>
        ))}

        {/* Calendars */}
        <div className="mt-10 px-3 pb-6">
          <div className="flex items-center justify-between mb-5">
            <p className="text-[11px] tracking-wider font-semibold text-[#A4ACB9]">
              CALENDARS
            </p>

            <button className="w-6 h-6 rounded-full bg-[#F5F6F8] text-[#687284]">
              +
            </button>
          </div>

          <div className="space-y-4">
            {calendarLegend.map(([color, label]) => (
              <div key={label} className="flex items-center gap-3">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ background: color }}
                />

                <span className="text-[14px] text-[#687284]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;