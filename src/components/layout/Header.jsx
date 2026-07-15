import {
  FiMenu,
  FiSearch,
  FiBell,
  FiChevronDown,
} from "react-icons/fi";

import profile from "../../assets/images/profile.png";

function Header() {
  return (
    <header className="h-[72px] bg-white border-b border-[#ECECEC] px-10 lg:px-12 flex items-center justify-between">

      {/* Left */}
      <div className="flex items-center">
        <button className="text-[#687284] hover:text-[#2F3442] transition">
          <FiMenu size={22} strokeWidth={2.2} />
        </button>
      </div>

      {/* Right */}
      <div className="flex items-center gap-6">

        <button className="text-[#687284] hover:text-[#2F3442] transition">
          <FiSearch size={19} strokeWidth={2} />
        </button>

        <button className="text-[#687284] hover:text-[#2F3442] transition">
          <FiBell size={19} strokeWidth={2} />
        </button>

        {/* Divider */}
        <div className="w-px h-7 bg-[#ECECEC]" />

        {/* Profile */}
        <button className="flex items-center gap-3 hover:opacity-90 transition">

          <img
            src={profile}
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />

          <span className="text-[15px] font-medium text-[#2F3442]">
            ArtTemplate
          </span>

          <FiChevronDown
            size={16}
            className="text-[#687284]"
          />

        </button>

      </div>

    </header>
  );
}

export default Header;