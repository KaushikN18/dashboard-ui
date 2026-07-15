import CalendarCell from "./CalendarCell";

const days = [
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
  "SUNDAY",
];

const dates = [
  [30, 31, 1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24, 25, 26],
  [27, 28, 29, 30, 1, 2, 3],
];

function CalendarGrid() {
  return (
    <div>

      {/* Week Days */}

      <div className="grid grid-cols-7 border-b border-[#ECECEC]">

        {days.map((day) => (
          <div
            key={day}
            className="h-[70px] flex items-center justify-center text-[16px] font-semibold text-[#8B95A7]"
          >
            {day}
          </div>
        ))}

      </div>

      {/* Calendar */}

      {dates.map((week, row) => (
        <div
          key={row}
          className="grid grid-cols-7"
        >
          {week.map((date, col) => (
            <CalendarCell
              key={col}
              date={date}
              row={row}
              col={col}
            />
          ))}
        </div>
      ))}

    </div>
  );
}

export default CalendarGrid;