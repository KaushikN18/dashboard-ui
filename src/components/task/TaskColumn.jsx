import {
  FiMoreHorizontal,
  FiPlus,
} from "react-icons/fi";

import TodoCard from "./TodoCard";
import ProgressCard from "./ProgressCard";
import CompletedCard from "./CompletedCard";

function TaskColumn({ type }) {
  const config = {
    todo: {
      title: "TODO",
      count: 8,
      color: "bg-[#FFC83D]",
    },
    progress: {
      title: "IN PROGRESS",
      count: 5,
      color: "bg-[#45D2E8]",
    },
    completed: {
      title: "COMPLETED",
      count: 9,
      color: "bg-[#45C66A]",
    },
  };

  const section = config[type];

  return (
    <div className="bg-[#FAFBFC] rounded-[24px] p-6 flex flex-col h-fit">

      {/* Top Indicator */}
      <div className="flex justify-center">
        <div className={`w-24 h-1 rounded-full ${section.color}`} />
      </div>

      {/* Header */}
      <div className="flex items-center justify-between mt-6 mb-6">

        <div className="flex items-center gap-3">

          <h2 className="text-[18px] font-semibold text-[#4B5364] tracking-wide">
            {section.title}
          </h2>

          <div className="w-8 h-8 rounded-lg bg-[#EEF1F5] flex items-center justify-center text-[14px] font-semibold text-[#687284]">
            {section.count}
          </div>

        </div>

        <button className="text-[#98A2B3] hover:text-[#2F3442] transition">
          <FiMoreHorizontal size={20} />
        </button>

      </div>

      {/* Cards */}
      <div className="space-y-6 flex-grow">

        {type === "todo" && (
          <>
            <TodoCard index={1} />
            <TodoCard index={2} />
            <TodoCard index={3} />
          </>
        )}

        {type === "progress" && (
          <>
            <ProgressCard index={1} />
            <ProgressCard index={2} />
          </>
        )}

        {type === "completed" && (
          <>
            <CompletedCard index={1} />
            <CompletedCard index={2} />
            <CompletedCard index={3} />
          </>
        )}

      </div>

      {/* Add Button */}
      <div className="flex justify-center mt-8">

        <button className="w-12 h-12 rounded-full bg-[#EAF8EE] text-[#2F9E44] flex items-center justify-center hover:bg-[#DDF4E3] transition">

          <FiPlus size={22} />

        </button>

      </div>

    </div>
  );
}

export default TaskColumn;