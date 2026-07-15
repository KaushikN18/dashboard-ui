function EventCard({ title, color, time, wide }) {
  const colors = {
    green: {
      bg: "bg-[#EAF8EC]",
      border: "border-[#2F9E44]",
      text: "text-[#2F9E44]",
    },
    cyan: {
      bg: "bg-[#EAF8FB]",
      border: "border-[#56C7C2]",
      text: "text-[#2F3442]",
    },
    yellow: {
      bg: "bg-[#FFF7DB]",
      border: "border-[#FFC531]",
      text: "text-[#2F3442]",
    },
  };

  const style = colors[color];

  return (
    <div
      className={`
        ${style.bg}
        border-l-4
        ${style.border}
        rounded-xl
        px-3
        py-2
        ${wide ? "w-[220px]" : "w-full"}
        shadow-sm
      `}
    >
      <div className="flex items-center justify-between">

        <span className="text-[13px] font-semibold text-[#2F3442] truncate">
          {title}
        </span>

        <span className="text-[11px] text-[#98A2B3] ml-2">
          {time}
        </span>

      </div>
    </div>
  );
}

export default EventCard;