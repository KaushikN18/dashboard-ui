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
    <div className="bg-white rounded-3xl border border-[#ECECEC] p-8 h-[390px]">

      <div className="flex justify-between">

        <div className="flex gap-8">

          <div className="flex items-center gap-2">

            <div className="w-3 h-3 rounded-full bg-[#2E9E44]" />

            Income

          </div>

          <div className="flex items-center gap-2">

            <div className="w-3 h-3 rounded-full bg-[#53CEC5]" />

            Expense

          </div>

        </div>

        <button className="border rounded-xl px-4 py-2 flex items-center gap-2">

          <FiCalendar />

          19 Aug – 25 Aug

          <FiChevronDown />

        </button>

      </div>

      <div className="h-[280px] mt-5">

        <ResponsiveContainer>

          <BarChart
            data={data}
            layout="vertical"
          >

            <XAxis
              type="number"
              domain={[-400, 400]}
            />

            <YAxis
              type="category"
              dataKey="day"
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