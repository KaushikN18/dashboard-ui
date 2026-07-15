import { FiSearch, FiFilter } from "react-icons/fi";

function CustomerFilters() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-[#ECECEC] p-5 mb-6">

      <div className="flex flex-col lg:flex-row gap-4 justify-between">

        {/* Search */}
        <div className="relative w-full lg:w-[350px]">

          <FiSearch
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#98A2B3]"
            size={18}
          />

          <input
            type="text"
            placeholder="Search customers..."
            className="w-full h-12 pl-11 pr-4 rounded-xl border border-[#E5E7EB] outline-none focus:border-[#2F9E44]"
          />

        </div>

        {/* Filters */}
        <div className="flex gap-4">

          <select className="h-12 px-4 rounded-xl border border-[#E5E7EB] outline-none">
            <option>All Status</option>
            <option>Active</option>
            <option>Pending</option>
            <option>Blocked</option>
          </select>

          <select className="h-12 px-4 rounded-xl border border-[#E5E7EB] outline-none">
            <option>Newest</option>
            <option>Oldest</option>
            <option>Most Orders</option>
          </select>

          <button className="h-12 w-12 rounded-xl border border-[#E5E7EB] flex items-center justify-center hover:bg-[#F7F8FA] transition">
            <FiFilter />
          </button>

        </div>

      </div>

    </div>
  );
}

export default CustomerFilters;