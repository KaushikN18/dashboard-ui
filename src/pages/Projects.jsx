import { FiPlus, FiSliders } from "react-icons/fi";
import ProjectGrid from "../components/projects/ProjectGrid";

function Projects() {
  return (
    <div className="p-8 bg-[#F7F8FA] min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-[52px] font-bold text-[#2F3442]">
          Projects
        </h1>

        <div className="flex items-center gap-4">
          <button className="w-11 h-11 rounded-full bg-white border border-[#ECECEC] flex items-center justify-center">
            <FiSliders />
          </button>

          <button className="bg-[#2F9E44] hover:bg-[#26863A] text-white px-6 h-11 rounded-xl flex items-center gap-2 font-medium transition">
            <FiPlus />
            Add Project
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-10 mt-10 border-b border-[#ECECEC]">
        {[
          ["All", 151],
          ["Started", 128],
          ["On Hold", 15],
          ["Completed", 8],
        ].map(([title, count], index) => (
          <div
            key={title}
            className={`pb-4 cursor-pointer ${
              index === 0
                ? "border-b-[3px] border-[#3CC96A]"
                : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <span
                className={`text-[16px] ${
                  index === 0
                    ? "font-semibold text-[#2F3442]"
                    : "text-[#98A2B3]"
                }`}
              >
                {title}
              </span>

              <span className="px-2 py-0.5 rounded-md bg-[#F3F4F6] text-[#98A2B3] text-xs font-medium">
                {count}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Project Cards */}
      <ProjectGrid />
    </div>
  );
}

export default Projects;