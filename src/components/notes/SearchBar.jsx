import { FiSearch, FiFilter } from "react-icons/fi";

function SearchBar() {
  return (
    <div className="flex items-center gap-4 mb-8">

      {/* Search */}

      <div className="relative flex-1">

        <FiSearch
          className="absolute left-5 top-1/2 -translate-y-1/2 text-[#98A2B3]"
          size={18}
        />

        <input
          type="text"
          placeholder="Search notes..."
          className="w-full h-14 pl-14 pr-5 rounded-2xl border border-[#ECECEC] bg-white outline-none focus:border-[#2F9E44] transition"
        />

      </div>

      {/* Filter Button */}

      <button className="w-14 h-14 rounded-2xl border border-[#ECECEC] bg-white hover:bg-[#F8F9FB] flex items-center justify-center transition">

        <FiFilter
          size={20}
          className="text-[#687284]"
        />

      </button>

    </div>
  );
}

export default SearchBar;