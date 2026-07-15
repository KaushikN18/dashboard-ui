import {
  AreaChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import {
  FiArrowUp,
  FiArrowDown,
  FiCalendar,
  FiChevronDown,
} from "react-icons/fi";

const data = [
  { day: "Mon", income: 0, expense: 0 },
  { day: "Tue", income: 80, expense: 45 },
  { day: "Wed", income: 60, expense: 95 },
  { day: "Thu", income: 150, expense: 55 },
  { day: "Fri", income: 80, expense: 120 },
  { day: "Sat", income: 210, expense: 85 },
  { day: "Sun", income: 280, expense: 55 },
];

function AnalyticsCard() {
  return (
    <div className="relative overflow-hidden bg-white rounded-2xl border border-[#ECECEC] min-h-[402px] p-6">

      {/* Header */}

      <div className="flex items-center justify-between">

        <h2 className="text-2xl font-semibold text-[#2F3442]">
          Analytics
        </h2>

        <button className="flex items-center gap-2 h-11 px-5 border border-[#ECECEC] rounded-xl text-[#687284] hover:bg-[#F8F9FB] transition">

          <FiCalendar size={18} />

          <span>19 Aug – 25 Aug</span>

          <FiChevronDown size={16} />

        </button>

      </div>

      {/* Top Values */}

      <div className="flex flex-wrap gap-8 mt-8">

        <div className="flex items-center gap-4">

          <div className="w-14 h-14 rounded-2xl bg-[#EEF8F0] flex items-center justify-center">

            <FiArrowUp
              className="text-[#2E9E44]"
              size={26}
            />

          </div>

          <div>

            <p className="text-sm text-[#98A2B3]">
              Income
            </p>

            <h1 className="text-3xl font-bold text-[#2F3442]">
              $5.850
            </h1>

          </div>

        </div>

        <div className="flex items-center gap-4">

          <div className="w-14 h-14 rounded-2xl bg-[#EDF8F8] flex items-center justify-center">

            <FiArrowDown
              className="text-[#53CEC5]"
              size={26}
            />

          </div>

          <div>

            <p className="text-sm text-[#98A2B3]">
              Expense
            </p>

            <h1 className="text-3xl font-bold text-[#2F3442]">
              $1.750
            </h1>

          </div>

        </div>

      </div>
            {/* Floating Tooltip */}

      <div className="absolute left-1/2 top-40 -translate-x-1/2 bg-white rounded-3xl shadow-xl px-6 py-4 z-20 max-w-[90%]">

        <h2 className="text-lg font-semibold text-center text-[#2F3442]">
          $1.000
        </h2>

        <p className="text-[#98A2B3] text-sm text-center mt-1">
          22 August, 2019
        </p>

        <div className="absolute left-1/2 -bottom-3 -translate-x-1/2 w-6 h-6 bg-white rotate-45"></div>

      </div>

      {/* Chart */}

      <div className="w-full h-[190px] mt-6">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={data}>

            <CartesianGrid
              stroke="#EEF1F5"
              horizontal={false}
            />

            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#98A2B3",
                fontSize: 14,
              }}
            />

            <YAxis hide />

            <Area
              type="monotone"
              dataKey="income"
              fill="#2E9E44"
              fillOpacity={0.12}
              stroke="none"
            />

            <Line
              type="monotone"
              dataKey="income"
              stroke="#2E9E44"
              strokeWidth={4}
              dot={{
                r: 5,
                fill: "#fff",
                stroke: "#2E9E44",
                strokeWidth: 3,
              }}
            />

            <Line
              type="monotone"
              dataKey="expense"
              stroke="#53CEC5"
              strokeWidth={4}
              dot={{
                r: 5,
                fill: "#fff",
                stroke: "#53CEC5",
                strokeWidth: 3,
              }}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default AnalyticsCard;