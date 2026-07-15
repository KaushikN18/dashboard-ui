import {
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

function CalendarHeader() {
  return (
    <div className="bg-white border border-[#ECECEC] rounded-[24px] px-8 py-6">

      <div className="flex items-center justify-between">

        {/* Left Side */}
        <div className="flex items-center gap-4">

          <div className="flex items-center bg-white border border-[#ECECEC] rounded-xl overflow-hidden shadow-sm">

            <button className="w-12 h-12 flex items-center justify-center hover:bg-[#F7F8FA] transition">
              <FiChevronLeft size={20} className="text-[#687284]" />
            </button>

            <div className="w-px h-6 bg-[#ECECEC]" />

            <button className="w-12 h-12 flex items-center justify-center hover:bg-[#F7F8FA] transition">
              <FiChevronRight size={20} className="text-[#687284]" />
            </button>

          </div>

          <button className="h-12 px-7 rounded-xl border border-[#ECECEC] bg-[#F8F9FA] text-[#2F3442] text-[15px] font-medium hover:bg-[#ECECEC] transition">
            Today
          </button>

        </div>

        {/* Center */}
        <div className="text-center">

          <h1 className="text-[36px] font-semibold text-[#2F3442] leading-none">
            September
          </h1>

          <p className="mt-2 text-[18px] text-[#98A2B3]">
            2020
          </p>

        </div>

        {/* Right Side */}
        <div className="flex items-center rounded-xl border border-[#ECECEC] overflow-hidden bg-white shadow-sm">

          <button className="px-7 h-12 bg-[#2F9E44] text-white text-[15px] font-medium">
            Month
          </button>

          <button className="px-7 h-12 text-[#687284] hover:bg-[#F8F9FA] transition">
            Week
          </button>

          <button className="px-7 h-12 text-[#687284] hover:bg-[#F8F9FA] transition">
            Day
          </button>

        </div>

      </div>

    </div>
  );
}

export default CalendarHeader;