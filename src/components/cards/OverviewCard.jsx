import {
  FiDollarSign,
  FiBarChart2,
  FiUser,
} from "react-icons/fi";

const cards = [
  {
    title: "Total Income",
    value: "$8.500",
    percent: "↑ 50.8%",
    icon: <FiDollarSign size={28} />,
    color: "text-[#62C8B5]",
    bg: "bg-[#EAF9F6]",
    percentColor: "text-green-500",
  },
  {
    title: "Total Sales",
    value: "3.500K",
    percent: "↓ 10.5%",
    icon: <FiBarChart2 size={28} />,
    color: "text-[#62C8B5]",
    bg: "bg-[#EAF9F6]",
    percentColor: "text-red-400",
  },
  {
    title: "New Clients",
    value: "2.500K",
    percent: "↑ 24.9%",
    icon: <FiUser size={28} />,
    color: "text-[#62C8B5]",
    bg: "bg-[#EAF9F6]",
    percentColor: "text-green-500",
  },
];

function OverviewCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

      {cards.map((card, index) => (

        <div
          key={index}
          className="bg-white rounded-2xl border border-[#ECECEC] p-5 flex items-center justify-between overflow-hidden"
        >

          <div className="min-w-0">

            <p className="text-sm text-gray-400">
              {card.title}
            </p>

            <div className="flex items-center gap-2 mt-2 flex-wrap">

              <h2 className="text-3xl font-semibold text-[#333]">
                {card.value}
              </h2>

              <span className={`text-sm ${card.percentColor}`}>
                {card.percent}
              </span>

            </div>

          </div>

          <div
            className={`w-16 h-16 rounded-2xl ${card.bg} flex items-center justify-center shrink-0 ${card.color}`}
          >
            {card.icon}
          </div>

        </div>

      ))}

    </div>
  );
}

export default OverviewCard;