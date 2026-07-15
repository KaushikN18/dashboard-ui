import TaskColumn from "../components/task/TaskColumn";
import {
  FiSliders,
  FiChevronDown,
} from "react-icons/fi";

function Task() {
  return (
    <div className="w-full min-w-[1280px]">

      {/* Header */}
      <div className="flex items-center justify-between mb-10">

        <div className="flex items-center gap-2">

          <h1 className="text-[38px] font-semibold text-[#2F3442]">
            Design Plan
          </h1>

          <FiChevronDown
            className="text-[#98A2B3]"
            size={20}
          />

        </div>

        <div className="flex items-center gap-4">

          {/* Filter Button */}
          <button className="w-11 h-11 rounded-xl border border-[#ECECEC] bg-white flex items-center justify-center hover:bg-[#F7F8FA] transition">

            <FiSliders
              size={18}
              className="text-[#687284]"
            />

          </button>

          {/* Add Button */}
          <button className="h-11 px-8 rounded-xl bg-[#2F9E44] text-white font-semibold hover:bg-[#25853A] transition">

            Add

          </button>

        </div>

      </div>

      {/* Task Columns */}
      <div className="grid grid-cols-[390px_390px_390px] gap-8">

        <TaskColumn type="todo" />

        <TaskColumn type="progress" />

        <TaskColumn type="completed" />

      </div>

    </div>
  );
}

export default Task;