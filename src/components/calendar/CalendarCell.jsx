import EventCard from "./EventCard";

function CalendarCell({ date, row, col }) {
  const isCurrentDay = date === 8;

  const isOtherMonth =
    (row === 0 && (date === 30 || date === 31)) ||
    (row === 4 && (date === 1 || date === 2 || date === 3));

  const events = {
    "0-2": [
      {
        title: "Call Back Priscilla",
        color: "cyan",
        time: "10:00",
        wide: true,
      },
    ],

    "1-3": [
      {
        title: "Meeting with Judith",
        color: "cyan",
        time: "10:00",
        wide: true,
      },
      {
        title: "Meeting...",
        color: "cyan",
        time: "11:00",
      },
    ],

    "2-1": [
      {
        title: 'Project "Rocket"',
        color: "yellow",
        time: "09:30",
        wide: true,
      },
    ],

    "3-2": [
      {
        title: "Presentation",
        color: "green",
        time: "02:00",
        wide: true,
      },
      {
        title: "Presentation",
        color: "green",
        time: "04:00",
      },
    ],
  };

  const key = `${row}-${col}`;

  return (
    <div
      className={`relative h-[165px] border-r border-b border-[#ECECEC] overflow-hidden ${
        isOtherMonth ? "bg-[#FAFAFA]" : "bg-white"
      }`}
    >
      {/* Date */}

      <div className="absolute top-4 right-5">

        {isCurrentDay ? (
          <div className="w-10 h-10 rounded-full bg-[#2F9E44] text-white flex items-center justify-center text-[18px] font-semibold shadow-sm">
            {date}
          </div>
        ) : (
          <span
            className={`text-[18px] font-medium ${
              isOtherMonth
                ? "text-[#C6CCD6]"
                : "text-[#2F3442]"
            }`}
          >
            {date}
          </span>
        )}

      </div>

      {/* Events */}

      <div className="absolute left-2 right-2 top-14 space-y-2">

        {events[key]?.map((event, index) => (
          <EventCard
            key={index}
            {...event}
          />
        ))}

      </div>

    </div>
  );
}

export default CalendarCell;