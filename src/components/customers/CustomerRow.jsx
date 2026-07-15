import {
  FiEdit2,
  FiTrash2,
} from "react-icons/fi";

function CustomerRow({ customer }) {
  return (
    <tr className="border-b border-[#F1F1F1] hover:bg-[#FAFAFA] transition">

      {/* Avatar + Name */}
      <td className="py-5 px-6">
        <div className="flex items-center gap-4">

          <img
            src={customer.avatar}
            alt={customer.name}
            className="w-12 h-12 rounded-full object-cover"
          />

          <div>
            <h4 className="font-semibold text-[#2F3442]">
              {customer.name}
            </h4>

            <p className="text-sm text-[#98A2B3]">
              Customer
            </p>
          </div>

        </div>
      </td>

      {/* Email */}
      <td className="px-6 text-[#687284]">
        {customer.email}
      </td>

      {/* Phone */}
      <td className="px-6 text-[#687284]">
        {customer.phone}
      </td>

      {/* Orders */}
      <td className="px-6 font-semibold text-[#2F3442]">
        {customer.orders}
      </td>

      {/* Status */}
      <td className="px-6">

        <span
          className={`px-3 py-1 rounded-full text-sm font-medium
            ${
              customer.status === "Active"
                ? "bg-green-100 text-green-700"
                : customer.status === "Pending"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-red-100 text-red-700"
            }`}
        >
          {customer.status}
        </span>

      </td>

      {/* Actions */}
      <td className="px-6">

        <div className="flex gap-3">

          <button className="w-9 h-9 rounded-lg border hover:bg-[#F5F5F5] flex items-center justify-center">

            <FiEdit2 size={16} />

          </button>

          <button className="w-9 h-9 rounded-lg border hover:bg-red-50 text-red-500 flex items-center justify-center">

            <FiTrash2 size={16} />

          </button>

        </div>

      </td>

    </tr>
  );
}

export default CustomerRow;