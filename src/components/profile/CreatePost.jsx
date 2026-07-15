import { profile } from "./data";
import {
  FiPaperclip,
  FiSmile,
  FiImage,
} from "react-icons/fi";

function CreatePost() {
  return (
    <div className="bg-white rounded-2xl border border-[#ECECEC] shadow-sm p-6">

      {/* Top */}
      <div className="flex items-start gap-4">

        <img
          src={profile.avatar}
          alt="Profile"
          className="w-12 h-12 rounded-full object-cover"
        />

        <textarea
          rows={5}
          placeholder="Write something..."
          className="flex-1 resize-none outline-none text-[18px] placeholder:text-[#A0A8B8]"
        />

      </div>

      {/* Bottom */}
      <div className="flex items-center justify-between mt-6">

        <button className="bg-[#2F9E44] hover:bg-[#25863A] text-white px-8 h-11 rounded-lg font-medium transition">
          Post
        </button>

        <div className="flex items-center gap-5 text-[#98A2B3]">

          <FiPaperclip
            size={22}
            className="cursor-pointer hover:text-[#2F3442]"
          />

          <FiSmile
            size={22}
            className="cursor-pointer hover:text-[#2F3442]"
          />

          <FiImage
            size={22}
            className="cursor-pointer hover:text-[#2F3442]"
          />

        </div>

      </div>

    </div>
  );
}

export default CreatePost;