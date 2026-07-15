import { useState } from "react";
import profile from "../../assets/images/profile.png";

import {
  FiCornerUpLeft,
  FiChevronLeft,
  FiChevronRight,
  FiBookmark,
  FiPrinter,
  FiTrash2,
  FiLink,
  FiSmile,
  FiImage,
  FiList,
  FiAlignLeft,
  FiAlignCenter,
  FiAlignRight,
  FiAlignJustify,
  FiChevronDown,
  FiX,
  FiClock,
  FiPaperclip,
  FiFileText,
  FiPackage,
  FiDownload,
} from "react-icons/fi";

function MailDetails() {
  const [reply, setReply] = useState("");

  return (
    <div className="flex-1 bg-white flex flex-col h-screen">

      {/* Top Toolbar */}
      <div className="h-[70px] px-8 flex items-center justify-between shrink-0">
        <button className="text-[#2F3442] hover:text-[#111] transition">
          <FiCornerUpLeft size={22} />
        </button>

        <div className="flex items-center gap-6 text-[#2F3442]">
          <button className="hover:text-[#111] transition">
            <FiChevronLeft size={20} />
          </button>

          <span className="text-[16px] font-medium">
            1 of 200
          </span>

          <button className="hover:text-[#111] transition">
            <FiChevronRight size={20} />
          </button>
        </div>

        <div className="flex items-center gap-6">
          <button className="text-[#E8604C] hover:opacity-80 transition">
            <FiBookmark size={22} fill="#E8604C" />
          </button>

          <button className="text-[#4B5364] hover:text-[#111] transition">
            <FiPrinter size={22} />
          </button>

          <button className="text-[#4B5364] hover:text-[#111] transition">
            <FiTrash2 size={22} />
          </button>
        </div>
      </div>

      {/* Scrollable body */}
      <div className="flex-1 overflow-y-auto px-8 pb-8">

        {/* Sender info */}
        <div className="flex items-start justify-between mt-4 mb-9">
          <div className="flex items-center gap-4">
            <img
                src={profile}
                alt="Regina Cooper"
                className="w-12 h-12 rounded-full object-cover"
                />

            <div>
              <p className="text-[16px] font-medium text-[#2F3442]">
                Regina Cooper
              </p>
              <p className="text-[15px] text-[#2F9E44]">
                regina_cooper@mail.com
              </p>
            </div>
          </div>

          <p className="text-[16px] text-[#2F3442] mt-2">
            May 27, 2020 — 10:45
          </p>
        </div>

        {/* Subject */}
        <h1 className="text-[34px] font-bold text-[#1E2330] mb-8">
          Creative Director Resume
        </h1>

        {/* Email body */}
        <div className="text-[16px] text-[#2F3442] leading-8 space-y-6">
          <p>Hello, Regina Cooper!</p>

          <p>
            I am writing to introduce you to David Boyd. I know
            you&apos;ve been looking hard for a candidate for that
            Creative Director position and I believe David Boyd
            fits the position.
          </p>

          <p>
            David Boyd and I worked together at Apple company, Where
            they were the senior Creative Director. They did a
            terrific job there. David Boyd was responsible for
            completely restructuring both the public-facing and
            internal websites. They&apos;d be a great fit at Google
            company.
          </p>

          <p>
            I&apos;ve attached David Boyd resume and portfolio for
            your review. You can contact David Boyd at{" "}
            <span className="text-[#2F9E44]">
              regina_cooper@mail.com
            </span>
          </p>

          <p>Thanks for any help you can give. 🤪</p>

          <p>
            Best regards,
            <br />
            Regina Cooper
          </p>
        </div>

        {/* Attachments */}
        <div className="flex flex-wrap gap-5 mt-9">
          <div className="w-[240px] border border-[#ECECEC] rounded-xl p-5 flex items-center justify-between hover:shadow-sm transition cursor-pointer">
            <div className="flex items-center gap-3">
              <FiFileText size={22} className="text-[#E8604C]" />

              <div>
                <p className="text-[15px] font-medium text-[#2F3442]">
                  Resume.pdf
                </p>
                <p className="text-[13px] text-[#98A2B3] mt-0.5">
                  570 KB
                </p>
              </div>
            </div>

            <button className="text-[#98A2B3] hover:text-[#4B5364] transition">
              <FiDownload size={18} />
            </button>
          </div>

          <div className="w-[240px] border border-[#ECECEC] rounded-xl p-5 flex items-center justify-between hover:shadow-sm transition cursor-pointer">
            <div className="flex items-center gap-3">
              <FiPackage size={22} className="text-[#98A2B3]" />

              <div>
                <p className="text-[15px] font-medium text-[#2F3442]">
                  Portfolio.zip
                </p>
                <p className="text-[13px] text-[#98A2B3] mt-0.5">
                  250 MB
                </p>
              </div>
            </div>

            <button className="text-[#98A2B3] hover:text-[#4B5364] transition">
              <FiDownload size={18} />
            </button>
          </div>
        </div>

        {/* Reply box */}
        <div className="mt-10 border border-[#ECECEC] rounded-2xl overflow-hidden relative">

          {/* To row */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#ECECEC]">
            <div className="flex items-center gap-3">
              <span className="text-[15px] text-[#98A2B3]">
                To:
              </span>

              <span className="flex items-center gap-2 bg-[#F5F6F8] rounded-lg px-3 py-1.5 text-[14px] text-[#2F3442]">
                Regina Cooper
                <FiX size={14} className="text-[#98A2B3] cursor-pointer" />
              </span>
            </div>

            <div className="flex items-center gap-4 text-[14px] text-[#98A2B3]">
              <button className="hover:text-[#4B5364] transition">Cc</button>
              <button className="hover:text-[#4B5364] transition">Bcc</button>
            </div>
          </div>

          {/* Formatting toolbar */}
          <div className="flex items-center gap-5 px-5 py-3 border-b border-[#ECECEC] text-[#4B5364]">
            <button className="flex items-center gap-1 text-[15px] font-medium hover:text-[#111] transition">
              A
              <FiChevronDown size={12} />
            </button>

            <div className="w-px h-5 bg-[#ECECEC]" />

            <button className="font-bold text-[15px] hover:text-[#111] transition">
              B
            </button>

            <button className="italic text-[15px] hover:text-[#111] transition">
              I
            </button>

            <button className="underline text-[15px] hover:text-[#111] transition">
              U
            </button>

            <div className="w-px h-5 bg-[#ECECEC]" />

            <button className="hover:text-[#111] transition">
              <FiLink size={17} />
            </button>

            <button className="hover:text-[#111] transition">
              <FiSmile size={17} />
            </button>

            <button className="hover:text-[#111] transition">
              <FiImage size={17} />
            </button>

            <button className="hover:text-[#111] transition">
              <FiList size={17} />
            </button>

            <button className="hover:text-[#111] transition">
              <FiList size={17} className="rotate-90" />
            </button>

            <div className="w-px h-5 bg-[#ECECEC]" />

            <button className="hover:text-[#111] transition">
              <FiAlignLeft size={17} />
            </button>

            <button className="hover:text-[#111] transition">
              <FiAlignCenter size={17} />
            </button>

            <button className="hover:text-[#111] transition">
              <FiAlignRight size={17} />
            </button>

            <button className="hover:text-[#111] transition">
              <FiAlignJustify size={17} />
            </button>
          </div>

          {/* Text area */}
          <textarea
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            placeholder="Type something"
            className="w-full h-[170px] px-5 py-4 resize-none outline-none text-[15px] text-[#2F3442] placeholder:text-[#98A2B3]"
          />

          {/* Bottom actions */}
          <div className="flex items-center gap-4 px-5 py-4">
            <button className="h-11 px-6 rounded-full bg-[#2F9E44] text-white text-[15px] font-medium flex items-center gap-2.5 hover:bg-[#25853A] transition">
              Send
              <span className="w-4 h-4 rounded-full border-2 border-white flex items-center justify-center">
                <FiClock size={9} />
              </span>
            </button>

            <button className="text-[#98A2B3] hover:text-[#4B5364] transition">
              <FiPaperclip size={18} />
            </button>
          </div>

          {/* Resize handle */}
          <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-[#D9DEE5]" />
        </div>
      </div>
    </div>
  );
}

export default MailDetails;