import {
  FiCalendar,
  FiPaperclip,
  FiMessageSquare,
  FiChevronDown,
  FiChevronUp,
  FiCheckCircle,
  FiCircle,
} from "react-icons/fi";

import profile from "../../assets/images/profile.png";

function ProgressCard({ index }) {
  const expanded = index === 2;

  return (
    <div className="bg-white rounded-[28px] border border-[#ECECEC] p-7">

      {/* Top */}
      <div className="flex justify-between items-center">

        <div className="flex gap-3">
          <span className="w-12 h-1 rounded-full bg-[#59D4C8]" />
          <span className="w-12 h-1 rounded-full bg-[#49C15C]" />
        </div>

        <div className="flex items-center gap-2 text-[#98A2B3] text-[15px]">
          <FiCalendar />
          Jun 17
        </div>

      </div>

      {/* Title */}
      <h3 className="mt-6 text-[20px] font-semibold text-[#2F3442]">
        {expanded ? "Template Progress" : "Updating Modules"}
      </h3>

      {/* Description */}
      <p className="mt-3 text-[16px] leading-8 text-[#7B8496]">
        {expanded
          ? "Designing cool UI design templates."
          : "Step-by-step update of modules."}
      </p>

      {/* Progress */}
      <div className="mt-6">

        <div className="flex justify-between text-[15px] text-[#687284]">
          <span>SUB-TASKS: 4</span>
          <span>{expanded ? "75%" : "50%"}</span>
        </div>

        <div className="mt-3 h-3 rounded-full bg-[#EEF1F5] overflow-hidden">
          <div
            className="h-full bg-[#2F9E44] rounded-full"
            style={{ width: expanded ? "75%" : "50%" }}
          />
        </div>

      </div>

      {/* Expand Icon */}
      <div className="flex justify-center my-5">
        {expanded ? (
          <FiChevronUp size={24} className="text-[#98A2B3]" />
        ) : (
          <FiChevronDown size={24} className="text-[#98A2B3]" />
        )}
      </div>

      {/* Checklist */}
      {expanded && (
        <div className="space-y-3 mb-6">

          {[
            ["Inbox Template", true],
            ["Chat Template", true],
            ["Tasks Template", true],
            ["Projects Template", false],
          ].map(([item, done]) => (
            <div
              key={item}
              className="flex justify-between items-center bg-[#F7F8FA] rounded-xl px-4 py-3"
            >
              <span className="text-[16px] text-[#4B5364]">
                {item}
              </span>

              {done ? (
                <FiCheckCircle
                  className="text-[#2F9E44]"
                  size={22}
                />
              ) : (
                <FiCircle
                  className="text-[#D9DEE5]"
                  size={22}
                />
              )}

            </div>
          ))}

        </div>
      )}

      {/* Footer */}
      <div className="flex justify-between items-center">

        <div className="flex gap-6 text-[#98A2B3]">

          <div className="flex items-center gap-2">
            <FiPaperclip />
            2
          </div>

          <div className="flex items-center gap-2">
            <FiMessageSquare />
            5
          </div>

        </div>

        <div className="flex -space-x-2">

          <img
            src={profile}
            className="w-8 h-8 rounded-full border-2 border-white"
            alt=""
          />

          <img
            src={profile}
            className="w-8 h-8 rounded-full border-2 border-white"
            alt=""
          />

        </div>

      </div>

    </div>
  );
}

export default ProgressCard;