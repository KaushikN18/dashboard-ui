import {
  FiCalendar,
  FiPaperclip,
  FiMessageSquare,
} from "react-icons/fi";

import profile from "../../assets/images/profile.png";

import mountain from "../../assets/images/mountain.jpg";
import ocean from "../../assets/images/ocean.jpg";
import desert from "../../assets/images/desert.jpg";

function CompletedCard({ index }) {
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
          ? "Refresh Photo Slider"
          : index === 2
          ? "Server Startup"
          : "New Background"}

      </h3>

      {/* Gallery */}
      {index === 1 && (

        <div className="grid grid-cols-3 gap-3 mt-5">

          <img
            src={mountain}
            className="h-24 w-full object-cover rounded-xl"
            alt=""
          />

          <img
            src={ocean}
            className="h-24 w-full object-cover rounded-xl"
            alt=""
          />

          <img
            src={desert}
            className="h-24 w-full object-cover rounded-xl"
            alt=""
          />

        </div>

      )}

      {/* Single Image */}
      {index === 3 && (

        <img
          src={ocean}
          className="w-full h-[180px] rounded-xl object-cover mt-5"
          alt=""
        />

      )}

      {/* Description */}
      {index === 2 && (

        <p className="mt-4 text-[16px] leading-8 text-[#7B8496]">
          Running the server in test mode and configuring all
          required services.
        </p>

      )}

      {/* Footer */}
      <div className="flex justify-between items-center mt-6">

        <div className="flex gap-6 text-[#98A2B3]">

          <div className="flex items-center gap-2">
            <FiPaperclip />
            {index === 2 ? 0 : index}
          </div>

          <div className="flex items-center gap-2">
            <FiMessageSquare />
            {index === 2 ? 17 : 2}
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

export default CompletedCard;