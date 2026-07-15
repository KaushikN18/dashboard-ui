import {
  FiSearch,
  FiSliders,
  FiChevronDown,
} from "react-icons/fi";

import OrderRow from "./OrderRow";

const orders = [
  {
    id: 1,
    name: "Apple iPhone 11 Pro Max 256GB Space Gray",
    orderNo: "#790841",
    category: "Phone",
    date: "12.09.20",
    price: "$699",
    status: "Available",
  },
  {
    id: 2,
    name: "MacBook Pro 15 Retina Touch Bar MV902",
    orderNo: "#790842",
    category: "Notebook",
    date: "12.09.20",
    price: "$2,500",
    status: "Available",
  },
  {
    id: 3,
    name: "Apple Watch Series 5 GPS + Cellular",
    orderNo: "#790843",
    category: "Watch",
    date: "12.09.20",
    price: "$599",
    status: "Available",
  },
  {
    id: 4,
    name: "Apple iPhone 11 Pro Max 64GB Purple",
    orderNo: "#790844",
    category: "Phone",
    date: "12.09.20",
    price: "$699",
    status: "Disabled",
  },
  {
    id: 5,
    name: "Apple Watch Series 5 GPS + Cellular",
    orderNo: "#790845",
    category: "Watch",
    date: "12.09.20",
    price: "$599",
    status: "Available",
  },
];

function OrdersTable({ onSelectProduct }) {
  return (
    <div className="bg-white rounded-[20px] border border-[#ECECEC] shadow-sm overflow-hidden">

      {/* Search */}
      <div className="flex items-center justify-between p-5 border-b border-[#ECECEC]">

        <div className="relative w-[70%]">

          <FiSearch
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#98A2B3]"
            size={18}
          />

          <input
            type="text"
            placeholder="Search products..."
            className="w-full h-12 pl-11 pr-12 rounded-xl border border-[#ECECEC] outline-none"
          />

          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-[#687284]">
            <FiSliders />
          </button>

        </div>

        <button className="h-12 px-5 border border-[#ECECEC] rounded-xl flex items-center gap-2">
          Actions
          <FiChevronDown />
        </button>

      </div>

      {/* Table */}

      <table className="w-full">

        <thead className="border-b border-[#ECECEC] bg-[#FAFBFC]">

          <tr className="h-14 text-[13px] uppercase text-[#98A2B3]">

            <th className="w-14">
              <input type="checkbox" />
            </th>

            <th className="text-left">Product Name</th>

            <th className="text-left">Order No.</th>

            <th className="text-left">Category</th>

            <th className="text-left">Date</th>

            <th className="text-left">Price</th>

            <th className="text-left">Status</th>

            <th></th>

          </tr>

        </thead>

        <tbody>

          {orders.map((order) => (
            <OrderRow
              key={order.id}
              order={order}
              onSelectProduct={onSelectProduct}
            />
          ))}

        </tbody>

      </table>

      {/* Footer */}

      <div className="flex items-center justify-between p-5 border-t border-[#ECECEC]">

        <div className="text-[#687284]">
          Showing 1–10 of 100
        </div>

        <div className="flex gap-2">

          <button className="w-9 h-9 rounded-lg border">
            1
          </button>

          <button className="w-9 h-9 rounded-lg border">
            2
          </button>

          <button className="w-9 h-9 rounded-lg border">
            3
          </button>

        </div>

      </div>

    </div>
  );
}

export default OrdersTable;