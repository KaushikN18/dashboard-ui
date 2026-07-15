import {
  FiMoreHorizontal,
  FiClock,
} from "react-icons/fi";

import avatar from "../../assets/projects/avatar.png";

function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-2xl border border-[#ECECEC] p-6 hover:shadow-lg transition-all duration-300">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex gap-4">
          <img
            src={project.logo}
            alt={project.title}
            className="w-14 h-14 object-contain rounded-xl border border-[#ECECEC] p-2 bg-white"
          />

          <div>
            <h3 className="text-[22px] font-semibold text-[#2F3442] leading-6">
              {project.title}
            </h3>

            <p className="mt-1 text-[15px] text-[#7D8799]">
              {project.company}
            </p>
          </div>
        </div>

        <button>
          <FiMoreHorizontal
            size={22}
            className="text-[#98A2B3]"
          />
        </button>
      </div>

      {/* Description */}
      <p className="mt-7 text-[16px] leading-7 text-[#687284] min-h-[78px]">
        {project.description}
      </p>

      {/* Progress */}
      <div className="mt-8">
        <div className="flex justify-between mb-3">
          <span className="text-[16px] text-[#2F3442]">
            Progress
          </span>

          <span className="text-[16px] text-[#98A2B3]">
            {project.progress}%
          </span>
        </div>

        <div className="w-full h-[6px] bg-[#ECECEC] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#3CC96A] rounded-full"
            style={{ width: `${project.progress}%` }}
          />
        </div>
      </div>

      {/* Footer */}
      <div className="mt-7 flex items-center justify-between">
        <div className="flex items-center gap-2 bg-[#F6F7F9] px-4 py-2 rounded-xl">
          <FiClock className="text-[#687284]" />

          <span
            className={`text-[14px] ${
              project.days === "5 days left"
                ? "text-[#FF8A00]"
                : "text-[#687284]"
            }`}
          >
            {project.days}
          </span>
        </div>

        <div className="flex -space-x-3">
          <img
            src={avatar}
            alt=""
            className="w-9 h-9 rounded-full border-2 border-white"
          />

          <img
            src={avatar}
            alt=""
            className="w-9 h-9 rounded-full border-2 border-white"
          />

          <img
            src={avatar}
            alt=""
            className="w-9 h-9 rounded-full border-2 border-white"
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;