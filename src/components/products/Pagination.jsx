import {
  FiChevronLeft,
  FiChevronRight,
  FiChevronsLeft,
  FiChevronsRight,
  FiChevronDown,
} from "react-icons/fi";

function Pagination() {
  return (
    <div className="flex items-center justify-between px-8 py-6 border-t border-[#ECECEC]">

      {/* Left */}
      <div className="flex items-center gap-5">

        <button className="h-12 px-5 rounded-xl border border-[#ECECEC] flex items-center gap-2">

          10

          <FiChevronDown />

        </button>

        <p className="text-[#8B95A7] text-[17px]">
          Showing 1 – 10 of 100
        </p>

      </div>

      {/* Right */}
      <div className="flex items-center gap-3">

        <button className="w-11 h-11 rounded-xl bg-[#F7F8FA] flex justify-center items-center">
          <FiChevronsLeft />
        </button>

        <button className="w-11 h-11 rounded-xl bg-[#F7F8FA] flex justify-center items-center">
          <FiChevronLeft />
        </button>

        <button className="w-11 h-11 rounded-xl bg-[#2F9E44] text-white font-semibold">
          1
        </button>

        <button className="w-11 h-11 rounded-xl hover:bg-[#F7F8FA]">
          2
        </button>

        <button className="w-11 h-11 rounded-xl hover:bg-[#F7F8FA]">
          3
        </button>

        <span className="px-2">...</span>

        <button className="w-11 h-11 rounded-xl hover:bg-[#F7F8FA]">
          5
        </button>

        <button className="w-11 h-11 rounded-xl bg-[#ECF9EE] text-[#2F9E44] flex justify-center items-center">
          <FiChevronRight />
        </button>

        <button className="w-11 h-11 rounded-xl bg-[#ECF9EE] text-[#2F9E44] flex justify-center items-center">
          <FiChevronsRight />
        </button>

      </div>

    </div>
  );
}

export default Pagination;