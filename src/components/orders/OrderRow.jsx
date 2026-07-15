import { FiMoreVertical } from "react-icons/fi";

function OrderRow({ order, onSelectProduct }) {
  return (
    <tr
      onClick={() => {
        console.log(order);
        onSelectProduct(order);
      }}
      className="h-[64px] border-b border-[#ECECEC] hover:bg-[#F8FAFC] cursor-pointer transition"
    >
      <td className="text-center">
        <input
          type="checkbox"
          className="accent-[#2F9E44]"
          onClick={(e) => e.stopPropagation()}
        />
      </td>

      <td className="font-medium text-[#2F3442]">
        {order.name}
      </td>

      <td>{order.orderNo}</td>

      <td>{order.category}</td>

      <td>{order.date}</td>

      <td className="font-semibold">
        {order.price}
      </td>

      <td>
        {order.status === "Available" ? (
          <span className="px-3 py-1 rounded-full bg-[#EDF9EF] text-[#2F9E44] text-sm">
            Available
          </span>
        ) : (
          <span className="px-3 py-1 rounded-full bg-[#FFF4E8] text-[#F59E0B] text-sm">
            Disabled
          </span>
        )}
      </td>

      <td>
        <button
          onClick={(e) => e.stopPropagation()}
          className="text-[#98A2B3]"
        >
          <FiMoreVertical />
        </button>
      </td>
    </tr>
  );
}

export default OrderRow;