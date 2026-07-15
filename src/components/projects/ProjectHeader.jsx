import {
  FiPlus,
  FiSliders,
} from "react-icons/fi";

function ProjectHeader() {
  return (
    <div className="flex items-center justify-between mb-8">

      {/* Left */}
      <div>
        <h1 className="text-[38px] font-bold text-[#2F3442]">
          Projects
        </h1>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">

        {/* Filter Button */}
        <button className="w-12 h-12 rounded-full bg-white border border-[#ECECEC] flex items-center justify-center hover:bg-[#F7F8FA] transition">

          <FiSliders
            size={18}
            className="text-[#98A2B3]"
          />

        </button>

        {/* Add Button */}
        <button className="h-12 px-6 rounded-xl bg-[#2F9E44] hover:bg-[#24873A] text-white font-medium flex items-center gap-2 transition">

          <FiPlus size={18} />

          Add Project

        </button>

      </div>

    </div>
  );
}

export default ProjectHeader;