import CalendarHeader from "../components/calendar/CalendarHeader";
import CalendarGrid from "../components/calendar/CalendarGrid";

function Calendar() {
  return (
    <div className="space-y-6">

      <CalendarHeader />

      <div className="bg-white rounded-[24px] border border-[#ECECEC] overflow-hidden shadow-sm">

        <CalendarGrid />

      </div>

    </div>
  );
}

export default Calendar;