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
    <div className="w-full overflow-hidden bg-white rounded-3xl border border-[#ECECEC] p-6">

      {/* Header */}

      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">

        <h2 className="text-2xl font-semibold text-[#2F3442]">
          Last Orders
        </h2>

        <button className="flex items-center gap-2 h-11 px-4 border border-[#ECECEC] rounded-xl text-[#687284]">

          <FiCalendar />

          <span>19 Aug – 25 Aug</span>

          <FiChevronDown />

        </button>

      </div>

      {/* Responsive Table */}

      <div className="overflow-x-auto">

        <table className="w-full min-w-[700px]">

          <thead>

            <tr className="border-b border-[#ECECEC]">

              <th className="py-4 text-left text-sm text-[#98A2B3]">
                Customer
              </th>

              <th className="py-4 text-left text-sm text-[#98A2B3]">
                Order
              </th>

              <th className="py-4 text-left text-sm text-[#98A2B3]">
                Amount
              </th>

              <th className="py-4 text-left text-sm text-[#98A2B3]">
                Payment
              </th>

              <th className="py-4 text-left text-sm text-[#98A2B3]">
                Date
              </th>

              <th></th>

            </tr>

          </thead>

          <tbody>

            {orders.map((item, index) => (

              <tr
                key={index}
                className="border-b border-[#F3F4F6] hover:bg-[#F9FAFB] transition"
              >

                <td className="py-4">

                  <div className="flex items-center gap-3">

                    <img
                      src={profile}
                      alt=""
                      className="w-10 h-10 rounded-full"
                    />

                    <span className="font-medium text-[#2F3442] whitespace-nowrap">

                      {item.name}

                    </span>

                  </div>

                </td>

                <td className="text-[#687284] whitespace-nowrap">
                  {item.order}
                </td>

                <td className="font-medium whitespace-nowrap">
                  {item.amount}
                </td>

                <td className="text-[#687284] whitespace-nowrap">
                  {item.payment}
                </td>

                <td className="text-[#687284] whitespace-nowrap">
                  {item.date}
                </td>

                <td>

                  <FiMoreVertical className="text-[#98A2B3]" />

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default LastOrders;