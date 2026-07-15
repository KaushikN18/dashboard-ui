import {
  FiCalendar,
  FiChevronDown,
  FiMoreVertical,
} from "react-icons/fi";

import profile from "../../assets/images/profile.png";

const orders = [
  {
    name: "Regina Cooper",
    order: "#790841",
    amount: "$2.500",
    payment: "Credit Card",
    date: "12.09.2019",
  },
  {
    name: "Robert Edwards",
    order: "#799894",
    amount: "$1.500",
    payment: "PayPal",
    date: "12.09.2019",
  },
  {
    name: "Gloria Mckinney",
    order: "#790857",
    amount: "$5.600",
    payment: "Credit Card",
    date: "12.09.2019",
  },
  {
    name: "Randall Fisher",
    order: "#790687",
    amount: "$2.850",
    payment: "PayPal",
    date: "12.09.2019",
  },
];

function LastOrders() {
  return (
    <div className="bg-white rounded-[24px] border border-[#ECECEC] p-7">

      <div className="flex items-center justify-between mb-8">

        <h2 className="text-[28px] font-semibold text-[#2F3442]">
          Last Orders
        </h2>

        <button className="h-11 px-5 border border-[#ECECEC] rounded-xl flex items-center gap-2 text-[#687284]">

          <FiCalendar />

          <span>19 Aug – 25 Aug</span>

          <FiChevronDown />

        </button>

      </div>

      <table className="w-full">

        <thead>

          <tr className="text-[#9CA3AF] text-sm">

            <th className="pb-4 text-left">Customer Name</th>

            <th className="pb-4 text-left">Order No.</th>

            <th className="pb-4 text-left">Amount</th>

            <th className="pb-4 text-left">Payment Type</th>

            <th className="pb-4 text-left">Date</th>

            <th></th>

          </tr>

        </thead>

        <tbody className="space-y-3">

          {orders.map((item, index) => (

            <tr
              key={index}
              className="bg-[#F9FAFB] rounded-2xl"
            >

              <td className="py-4">

                <div className="flex items-center gap-3">

                  <img
                    src={profile}
                    className="w-10 h-10 rounded-full"
                    alt=""
                  />

                  <span className="font-medium text-[#2F3442]">

                    {item.name}

                  </span>

                </div>

              </td>

              <td className="text-[#7B8496]">
                {item.order}
              </td>

              <td className="font-medium">
                {item.amount}
              </td>

              <td className="text-[#7B8496]">
                {item.payment}
              </td>

              <td className="text-[#7B8496]">
                {item.date}
              </td>

              <td>

                <FiMoreVertical className="text-[#A0A0A0]" />

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default LastOrders;