import { profile } from "./data";
import {
  FiPaperclip,
  FiSmile,
  FiImage,
} from "react-icons/fi";

function CreatePost() {
  return (
    <div className="bg-white rounded-[22px] border border-[#ECECEC] shadow-sm p-6">

      {/* Top */}
      <div className="flex gap-4">

        <img
          src={profile.avatar}
          alt=""
          className="w-11 h-11 rounded-full object-cover"
        />

        <textarea
          rows={2}
          placeholder="Write something..."
          className="flex-1 resize-none outline-none text-[15px] text-[#2F3442] placeholder:text-[#98A2B3]"
        />

      </div>

      {/* Bottom */}
      <div className="flex items-center justify-between mt-5">

        <button className="px-7 h-10 rounded-lg bg-[#2F9E44] text-white text-[14px] font-medium hover:bg-[#27863B]">
          Post
        </button>

        <div className="flex items-center gap-5 text-[#98A2B3]">

          <FiPaperclip
            size={18}
            className="cursor-pointer hover:text-[#2F3442]"
          />

          <FiSmile
            size={18}
            className="cursor-pointer hover:text-[#2F3442]"
          />

          <FiImage
            size={18}
            className="cursor-pointer hover:text-[#2F3442]"
          />

        </div>

      </div>

    </div>
  );
}

export default CreatePost;