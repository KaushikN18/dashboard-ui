import {
  FiPaperclip,
  FiMoreHorizontal,
} from "react-icons/fi";
import { BsBookmarkFill } from "react-icons/bs";

import profile from "../../assets/images/profile.png";

function MailCard({ mail }) {
  return (
    <div className="flex gap-5 px-7 py-7 border-b border-[#ECECEC] hover:bg-[#FAFBFC] cursor-pointer transition">

      {/* Avatar */}

      <div className="flex flex-col items-center">

        <img
          src={profile}
          alt="profile"
          className="w-14 h-14 rounded-full object-cover"
        />

        <FiMoreHorizontal
          size={20}
          className="mt-3 text-[#98A2B3]"
        />

        {mail.bookmarked && (
          <BsBookmarkFill
            className="mt-5 text-[#FF6B6B]"
            size={18}
          />
        )}

      </div>

      {/* Content */}

      <div className="flex-1">

        <div className="flex justify-between items-start">

          <h3 className="text-[18px] font-medium text-[#98A2B3]">
            {mail.name}
          </h3>

          <div className="flex items-center gap-3">

            {mail.attachment && (
              <FiPaperclip
                className="text-[#98A2B3]"
                size={18}
              />
            )}

            <span className="text-[15px] text-[#98A2B3]">
              {mail.time}
            </span>

          </div>

        </div>

        <h2 className="mt-3 text-[20px] font-semibold text-[#2F3442]">
          {mail.subject}
        </h2>

        <p className="mt-3 text-[16px] leading-7 text-[#98A2B3] line-clamp-2">
          {mail.preview}
        </p>

      </div>

    </div>
  );
}

export default MailCard;