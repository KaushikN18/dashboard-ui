import {
  FiMoreHorizontal,
  FiArrowUpRight,
  FiArrowDownLeft,
} from "react-icons/fi";

import profile from "../../assets/images/profile.png";

const transactions = [
  {
    name: "Devon Williamson",
    time: "08:00 AM",
    date: "19 August",
    amount: "+$1,400",
    type: "Payment",
    color: "text-[#2E9E44]",
    bg: "bg-[#EAF8EE]",
    icon: <FiArrowUpRight />,
  },
  {
    name: "Debra Wilson",
    time: "09:45 AM",
    date: "19 August",
    amount: "-$850",
    type: "Refund",
    color: "text-red-500",
    bg: "bg-[#FFF3F3]",
    icon: <FiArrowDownLeft />,
  },
  {
    name: "Judith Black",
    time: "10:15 AM",
    date: "20 August",
    amount: "+$2,050",
    type: "Payment",
    color: "text-[#2E9E44]",
    bg: "bg-[#EAF8EE]",
    icon: <FiArrowUpRight />,
  },
  {
    name: "Philip Henry",
    time: "10:50 AM",
    date: "23 August",
    amount: "+$650",
    type: "Payment",
    color: "text-[#2E9E44]",
    bg: "bg-[#EAF8EE]",
    icon: <FiArrowUpRight />,
  },
  {
    name: "Mitchell Cooper",
    time: "12:45 AM",
    date: "25 August",
    amount: "+$900",
    type: "Payment",
    color: "text-[#2E9E44]",
    bg: "bg-[#EAF8EE]",
    icon: <FiArrowUpRight />,
  },
];

function Transactions() {
  return (
    <div className="bg-white rounded-[24px] border border-[#ECECEC] p-7">

      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <h2 className="text-[28px] font-semibold text-[#2F3442]">
          Transactions
        </h2>

        <FiMoreHorizontal
          size={22}
          className="text-[#98A2B3]"
        />

      </div>

      {/* Transaction List */}

      <div className="space-y-5">

        {transactions.map((item, index) => (

          <div
            key={index}
            className="flex justify-between items-center"
          >

            {/* Left */}

            <div className="flex items-center gap-4">

              <img
                src={profile}
                alt=""
                className="w-12 h-12 rounded-full object-cover"
              />

              <div>

                <h3 className="font-semibold text-[#2F3442]">
                  {item.name}
                </h3>

                <p className="text-[13px] text-[#98A2B3]">
                  {item.time} • {item.date}
                </p>

              </div>

            </div>

            {/* Right */}

            <div className="text-right">

              <div className="flex items-center gap-2 justify-end">

                <div
                  className={`w-8 h-8 rounded-full ${item.bg} flex items-center justify-center ${item.color}`}
                >
                  {item.icon}
                </div>

                <span className={`font-semibold ${item.color}`}>
                  {item.amount}
                </span>

              </div>

              <p className="text-[13px] text-[#98A2B3] mt-1">
                {item.type}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Transactions;