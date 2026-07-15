import {
  FiSearch,
  FiFilter,
  FiDownload,
} from "react-icons/fi";

function ContactsSearch() {
  return (
    <div className="flex items-center gap-4 mb-8">

      {/* Search */}

      <div className="relative flex-1">

        <FiSearch
          size={18}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-[#98A2B3]"
        />

        <input
          type="text"
          placeholder="Search contacts..."
          className="w-full h-14 pl-14 pr-5 rounded-2xl border border-[#ECECEC] bg-white outline-none focus:border-[#2F9E44] transition"
        />

      </div>

      {/* Filter */}

      <button className="h-14 px-6 rounded-2xl border border-[#ECECEC] bg-white hover:bg-[#F8F9FB] flex items-center gap-2 transition">

        <FiFilter size={18} />

        Filter

      </button>

      {/* Export */}

      <button className="h-14 px-6 rounded-2xl bg-[#2F9E44] hover:bg-[#27863A] text-white flex items-center gap-2 transition">

        <FiDownload size={18} />

        Export

      </button>

    </div>
  );
}

export default ContactsSearch;