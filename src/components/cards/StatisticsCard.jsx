import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
} from "recharts";
import {
  FiCalendar,
  FiChevronDown,
} from "react-icons/fi";

const data = [
  { day: "Mon", income: 190, expense: 340 },
  { day: "Tue", income: 105, expense: 260 },
  { day: "Wed", income: 250, expense: 380 },
  { day: "Thu", income: 190, expense: 260 },
  { day: "Fri", income: 205, expense: 370 },
  { day: "Sat", income: 180, expense: 325 },
  { day: "Sun", income: 150, expense: 220 },
];

function StatisticsCard() {
  return (
    <div className="relative bg-white rounded-[24px] border border-[#ECECEC] h-[402px] px-8 pt-7 pb-5">

      {/* Header */}
      <div className="flex justify-between items-center mb-4">

        <h2 className="text-[24px] font-semibold text-[#2F3442]">
          Statistics
        </h2>

        <button className="flex items-center gap-2 h-12 px-5 rounded-2xl border border-[#ECECEC] text-[#687284] text-[15px]">
          <FiCalendar size={18} />
          19 Aug – 25 Aug
          <FiChevronDown />
        </button>

      </div>

      {/* Floating Tooltip */}
      <div className="absolute left-[115px] top-[58px] bg-white rounded-3xl shadow-xl px-7 py-4 z-20">

        <div className="flex items-center gap-5">

          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#2E9E44]" />
            <span className="font-semibold text-[15px]">2.500</span>
          </div>

          <div className="w-px h-6 bg-gray-200" />

          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#53CEC5]" />
            <span className="font-semibold text-[15px]">1.200</span>
          </div>

        </div>

        <p className="text-[#9CA3AF] text-[14px] mt-2">
          23 August, 2020
        </p>

        {/* Tooltip Arrow */}
        <div className="absolute left-1/2 -bottom-3 -translate-x-1/2 w-6 h-6 bg-white rotate-45"></div>

      </div>

      {/* Chart */}
      <div className="h-[255px] mt-6">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart
            data={data}
            barGap={8}
            barCategoryGap="32%"
          >

            <CartesianGrid
              stroke="#EEF1F5"
              vertical={false}
            />

            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#98A2B3",
                fontSize: 15,
              }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              domain={[0, 400]}
              ticks={[0, 100, 200, 300, 400]}
              tick={{
                fill: "#98A2B3",
                fontSize: 14,
              }}
            />

            <Bar
              dataKey="income"
              radius={[12, 12, 12, 12]}
              barSize={20}
            >
              {data.map((_, i) => (
                <Cell key={i} fill="#2E9E44" />
              ))}
            </Bar>

            <Bar
              dataKey="expense"
              radius={[12, 12, 12, 12]}
              barSize={20}
            >
              {data.map((_, i) => (
                <Cell key={i} fill="#53CEC5" />
              ))}
            </Bar>

          </BarChart>

        </ResponsiveContainer>

      </div>

      {/* Legend */}
      <div className="flex justify-center gap-12 mt-2">

        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#2E9E44]" />
          <span className="text-[#687284] text-[16px]">Income</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#53CEC5]" />
          <span className="text-[#687284] text-[16px]">Expense</span>
        </div>

      </div>

    </div>
  );
}

export default StatisticsCard;