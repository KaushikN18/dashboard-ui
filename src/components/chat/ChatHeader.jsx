import {
  FiPhone,
  FiVideo,
  FiMoreVertical,
} from "react-icons/fi";

function ChatHeader() {
  return (
    <div className="h-[88px] bg-white rounded-t-2xl border-b border-[#ECECEC] px-8 flex items-center justify-between">

      {/* Left */}

      <div className="flex items-center gap-4">

        <div className="relative">

          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="Ronald"
            className="w-14 h-14 rounded-full object-cover"
          />

          <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-[#2F9E44] border-2 border-white"></span>

        </div>

        <div>

          <h2 className="text-[20px] font-semibold text-[#2F3442]">
            Ronald Robertson
          </h2>

          <p className="text-sm text-[#2F9E44]">
            Online
          </p>

        </div>

      </div>

      {/* Right */}

      <div className="flex items-center gap-3">

        <button className="w-11 h-11 rounded-xl border border-[#ECECEC] hover:bg-[#F8F9FB] flex items-center justify-center transition">

          <FiPhone size={18} />

        </button>

        <button className="w-11 h-11 rounded-xl border border-[#ECECEC] hover:bg-[#F8F9FB] flex items-center justify-center transition">

          <FiVideo size={18} />

        </button>

        <button className="w-11 h-11 rounded-xl border border-[#ECECEC] hover:bg-[#F8F9FB] flex items-center justify-center transition">

          <FiMoreVertical size={18} />

        </button>

      </div>

    </div>
  );
}

export default ChatHeader;