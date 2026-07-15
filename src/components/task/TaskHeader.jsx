import {
  FiChevronDown,
  FiFilter,
  FiPlus,
  FiClock,
} from "react-icons/fi";

function TaskHeader() {
  return (
    <div className="flex items-center justify-between mb-8">

      {/* Left */}
      <div className="flex items-center gap-2">

        <h1 className="text-[38px] font-semibold text-[#2F3442]">
          Design Plan
        </h1>

        <FiChevronDown
          size={20}
          className="text-[#98A2B3]"
        />

      </div>

      {/* Right */}
      <div className="flex items-center gap-4">

        {/* Filter */}
        <button className="w-11 h-11 rounded-xl border border-[#ECECEC] bg-white flex items-center justify-center hover:bg-[#F8F9FA] transition">
          <FiFilter
            size={18}
            className="text-[#687284]"
          />
        </button>

        {/* Add */}
        <button className="h-11 px-5 rounded-xl bg-[#2F9E44] text-white flex items-center gap-2 hover:bg-[#25853A] transition">

          <FiPlus size={18} />

          <span className="font-medium">
            Add
          </span>

          <div className="w-5 h-5 rounded-full bg-[#48B85D] flex items-center justify-center">
            <FiClock size={10} />
          </div>

        </button>

      </div>

    </div>
  );
}

export default TaskHeader;