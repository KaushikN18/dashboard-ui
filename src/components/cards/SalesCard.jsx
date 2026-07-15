import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { value: 2500 },
  { value: 1000 },
];

const COLORS = ["#2E9E44", "#53CEC5"];

function SalesCard() {
  return (
    <div className="bg-white rounded-3xl border border-[#ECECEC] p-8 h-[390px]">

      <h2 className="text-[22px] font-semibold text-[#2F3442]">
        Sales
      </h2>

      <div className="h-[210px] mt-5 relative">

        <ResponsiveContainer>

          <PieChart>

            <Pie
              data={data}
              innerRadius={70}
              outerRadius={90}
              dataKey="value"
              stroke="none"
            >

              {data.map((item, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}

            </Pie>

          </PieChart>

        </ResponsiveContainer>

        <div className="absolute inset-0 flex flex-col items-center justify-center">

          <h1 className="text-[38px] font-bold">
            3.500
          </h1>

          <p className="text-gray-400">
            Total
          </p>

        </div>

      </div>

      <div className="space-y-5 mt-3">

        <div className="flex justify-between">

          <div className="flex gap-2 items-center">

            <div className="w-3 h-3 rounded-full bg-[#2E9E44]" />

            Current Week

          </div>

          <div className="flex gap-3">

            <span>2.500</span>

            <span className="text-green-500">
              ↑8.8%
            </span>

          </div>

        </div>

        <div className="flex justify-between">

          <div className="flex gap-2 items-center">

            <div className="w-3 h-3 rounded-full bg-[#53CEC5]" />

            Last Week

          </div>

          <div className="flex gap-3">

            <span>1.000</span>

            <span className="text-red-500">
              ↓5.8%
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}

export default SalesCard;