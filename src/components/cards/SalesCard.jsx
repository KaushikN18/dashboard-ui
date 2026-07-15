import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { value: 2500 },
  { value: 1000 },
];

const COLORS = ["#2E9E44", "#53CEC5"];

function SalesCard() {
  return (
    <div className="w-full overflow-hidden bg-white rounded-3xl border border-[#ECECEC] p-6 min-h-[390px]">

      <h2 className="text-2xl font-semibold text-[#2F3442]">
        Sales
      </h2>

      <div className="relative h-[210px] mt-5">

        <ResponsiveContainer width="100%" height="100%">

          <PieChart>

            <Pie
              data={data}
              innerRadius={60}
              outerRadius={80}
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

          <h1 className="text-3xl font-bold text-[#2F3442]">
            3.500
          </h1>

          <p className="text-sm text-[#98A2B3]">
            Total
          </p>

        </div>

      </div>

      <div className="space-y-5 mt-4">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-2">

            <div className="w-3 h-3 rounded-full bg-[#2E9E44]" />

            <span className="text-[#687284]">
              Current Week
            </span>

          </div>

          <div className="flex gap-3">

            <span>2.500</span>

            <span className="text-green-500">
              ↑8.8%
            </span>

          </div>

        </div>

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-2">

            <div className="w-3 h-3 rounded-full bg-[#53CEC5]" />

            <span className="text-[#687284]">
              Last Week
            </span>

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