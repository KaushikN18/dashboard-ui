import {
  FiCalendar,
  FiMessageCircle,
  FiPaperclip,
} from "react-icons/fi";

import profile from "../../assets/images/profile.png";

function ImageTaskCard() {
  return (
    <div className="bg-white border border-[#ECECEC] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">

      {/* Image Placeholder */}
      <div className="h-[180px] bg-gradient-to-r from-[#56C7C2] to-[#2F9E44] flex items-center justify-center">
        <span className="text-white text-[18px] font-semibold">
          Project Preview
        </span>
      </div>

      {/* Content */}
      <div className="p-5">

        <span className="inline-block px-3 py-1 rounded-full bg-[#EAF8EE] text-[#2F9E44] text-[12px] font-medium">
          Photography
        </span>

        <h2 className="mt-4 text-[18px] font-semibold text-[#2F3442]">
          Refresh Photo Slider
        </h2>

        <p className="mt-3 text-[14px] leading-6 text-[#7B8496]">
          Update the homepage image slider with new campaign
          photos and improve loading performance.
        </p>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between">

          <div className="flex items-center gap-3">

            <img
              src={profile}
              alt="Profile"
              className="w-9 h-9 rounded-full object-cover"
            />

            <div className="flex items-center gap-1 text-[#98A2B3] text-[13px]">
              <FiCalendar size={14} />
              30 Aug
            </div>

          </div>

          <div className="flex items-center gap-4 text-[#98A2B3] text-[13px]">

            <div className="flex items-center gap-1">
              <FiMessageCircle size={15} />
              9
            </div>

            <div className="flex items-center gap-1">
              <FiPaperclip size={15} />
              4
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ImageTaskCard;