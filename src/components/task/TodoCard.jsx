import {
  FiCalendar,
  FiPaperclip,
  FiMessageSquare,
} from "react-icons/fi";

import profile from "../../assets/images/profile.png";
import mountain from "../../assets/images/mountain.jpg";

function TodoCard({ index }) {
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

        {index === 1
          ? "Brand Logo Design"
          : index === 2
          ? "New Header Image"
          : "Wireframe for App"}

      </h3>

      {/* Description */}
      {index !== 2 && (
        <p className="mt-3 text-[16px] leading-8 text-[#7B8496]">
          {index === 1
            ? "Make a redesign of the logo in corporate colors."
            : "Make a framework for an app for a pre-presentation."}
        </p>
      )}

      {/* Image */}
      {index === 2 && (
        <img
          src={mountain}
          alt=""
          className="w-full h-[180px] object-cover rounded-2xl mt-5"
        />
      )}

      {/* Footer */}
      <div className="flex justify-between items-center mt-6">

        <div className="flex gap-6 text-[#98A2B3]">

          <div className="flex items-center gap-2">
            <FiPaperclip />
            {index === 1 ? 2 : 1}
          </div>

          <div className="flex items-center gap-2">
            <FiMessageSquare />
            {index === 1 ? 5 : index === 2 ? 3 : 1}
          </div>

        </div>

        <div className="flex -space-x-2">

          <img
            src={profile}
            className="w-8 h-8 rounded-full border-2 border-white"
            alt=""
          />

          {index !== 2 && (
            <img
              src={profile}
              className="w-8 h-8 rounded-full border-2 border-white"
              alt=""
            />
          )}

        </div>

      </div>

    </div>
  );
}

export default TodoCard;