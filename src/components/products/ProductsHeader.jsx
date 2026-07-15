import {
  FiSearch,
  FiSliders,
  FiChevronDown,
} from "react-icons/fi";

function ProductsHeader() {
  return (
    <div className="space-y-5">

      {/* Tabs */}
      <div className="flex items-center gap-8 border-b border-[#ECECEC]">

        <button className="pb-4 text-[#2F3442] font-semibold border-b-[3px] border-[#2F9E44]">
          All
          <span className="ml-2 px-2 py-1 bg-[#F4F5F7] rounded-lg text-xs">
            283
          </span>
        </button>

        <button className="pb-4 text-[#687284] font-medium">
          Available
          <span className="ml-2 px-2 py-1 bg-[#F4F5F7] rounded-lg text-xs">
            268
          </span>
        </button>

        <button className="pb-4 text-[#687284] font-medium">
          Disabled
          <span className="ml-2 px-2 py-1 bg-[#F4F5F7] rounded-lg text-xs">
            15
          </span>
        </button>

      </div>

      {/* Search */}
      <div className="flex justify-between gap-4">

        <div className="flex-1 relative">

          <FiSearch
            className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />

          <input
            type="text"
            placeholder="Search products..."
            className="w-full h-14 rounded-2xl border border-[#ECECEC] pl-14 pr-14 outline-none"
          />

          <FiSliders
            className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500"
            size={20}
          />

        </div>

        <button className="h-14 px-6 border border-[#ECECEC] rounded-2xl flex items-center gap-2">

          Actions

          <FiChevronDown />

        </button>

      </div>

    </div>
  );
}

export default ProductsHeader;