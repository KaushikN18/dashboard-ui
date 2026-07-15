import profile from "../../assets/images/profile.png";
import {
  FiCalendar,
  FiPaperclip,
  FiMessageSquare,
} from "react-icons/fi";

function TaskCard({
  title,
  description,
  image,
  images,
  date = "Jun 17",
  attachments,
  comments,
  avatars,
}) {
  return (
    <div className="bg-white border border-[#E8E8E8] rounded-[24px] p-6">

      {/* Top */}
      <div className="flex justify-between items-center">

        <div className="flex gap-3">
          <div className="w-12 h-1 rounded-full bg-[#52D3C7]" />
          <div className="w-12 h-1 rounded-full bg-[#42C96A]" />
        </div>

        <div className="flex items-center gap-2 text-[#8C94A3]">
          <FiCalendar size={16} />
          <span>{date}</span>
        </div>

      </div>

      {/* Title */}
      <h3 className="mt-6 text-[20px] font-semibold text-[#2F3442]">
        {title}
      </h3>

      {/* Description */}
      {description && (
        <p className="mt-3 text-[16px] leading-7 text-[#7B8496]">
          {description}
        </p>
      )}

      {/* Single Image */}
      {image && (
        <img
          src={image}
          alt=""
          className="mt-5 w-full h-[210px] object-cover rounded-2xl"
        />
      )}

      {/* Three Images */}
      {images && (
        <div className="grid grid-cols-3 gap-3 mt-5">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              className="h-[120px] w-full object-cover rounded-xl"
            />
          ))}
        </div>
      )}

      {/* Bottom */}
      <div className="mt-6 flex items-center justify-between">

        <div className="flex gap-6 text-[#7B8496]">

          {attachments && (
            <div className="flex items-center gap-2">
              <FiPaperclip />
              {attachments}
            </div>
          )}

          {comments && (
            <div className="flex items-center gap-2">
              <FiMessageSquare />
              {comments}
            </div>
          )}

        </div>

        <div className="flex -space-x-3">

          {Array.from({ length: avatars || 1 }).map((_, index) => (
            <img
              key={index}
              src={profile}
              alt=""
              className="w-9 h-9 rounded-full border-2 border-white"
            />
          ))}

        </div>

      </div>

    </div>
  );
}

export default TaskCard;