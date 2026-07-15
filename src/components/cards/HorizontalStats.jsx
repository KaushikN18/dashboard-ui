import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import {
  FiCalendar,
  FiChevronDown,
} from "react-icons/fi";

const data = [
  { day: "19", income: 120, expense: -80 },
  { day: "20", income: 210, expense: -180 },
  { day: "21", income: 330, expense: -310 },
  { day: "22", income: 280, expense: -220 },
  { day: "23", income: 250, expense: -250 },
  { day: "24", income: 180, expense: -120 },
  { day: "25", income: 90, expense: -60 },
];

function HorizontalStats() {
  return (
    <div className="w-full overflow-hidden bg-white rounded-3xl border border-[#ECECEC] p-6 min-h-[390px]">

      {/* Header */}

      <div className="flex flex-wrap items-center justify-between gap-4">

        <div className="flex flex-wrap gap-6">

          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#2E9E44]" />
            <span className="text-sm text-[#687284]">Income</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#53CEC5]" />
            <span className="text-sm text-[#687284]">Expense</span>
          </div>

        </div>

        <button className="flex items-center gap-2 border border-[#ECECEC] rounded-xl px-4 py-2 text-[#687284] hover:bg-[#F8F9FB] transition">

          <FiCalendar size={16} />

          <span>19 Aug – 25 Aug</span>

          <FiChevronDown size={16} />

        </button>

      </div>

      {/* Chart */}

      <div className="w-full h-[280px] mt-6">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart
            data={data}
            layout="vertical"
            margin={{
              top: 5,
              right: 10,
              left: 10,
              bottom: 5,
            }}
          >

            <XAxis
              type="number"
              domain={[-400, 400]}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              type="category"
              dataKey="day"
              axisLine={false}
              tickLine={false}
            />

            <Tooltip />

            <Bar
              dataKey="income"
              fill="#2E9E44"
              radius={[8, 8, 8, 8]}
            />

            <Bar
              dataKey="expense"
              fill="#53CEC5"
              radius={[8, 8, 8, 8]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default HorizontalStats;