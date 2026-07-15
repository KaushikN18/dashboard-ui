import { FiMoreVertical } from "react-icons/fi";

function ProductRow({ product }) {
  return (
    <tr className="border-b border-[#F2F2F2] hover:bg-[#FAFBFC] transition">

      {/* Checkbox */}
      <td className="px-5 py-4">
        <input
          type="checkbox"
          defaultChecked={product.checked}
          className="w-[18px] h-[18px] accent-[#2F9E44]"
        />
      </td>

      {/* Product */}
      <td className="px-4 py-4 max-w-[280px]">
        <p
          className="text-[15px] font-medium text-[#3D4654] truncate"
          title={product.name}
        >
          {product.name}
        </p>
      </td>

      {/* Number */}
      <td className="px-4 py-4 text-[#98A2B3] whitespace-nowrap">
        {product.number}
      </td>

      {/* Category */}
      <td className="px-4 py-4 text-[#596273] whitespace-nowrap">
        {product.category}
      </td>

      {/* Date */}
      <td className="px-4 py-4 text-[#98A2B3] whitespace-nowrap">
        {product.date}
      </td>

      {/* Price */}
      <td className="px-4 py-4 font-medium text-[#3D4654] whitespace-nowrap">
        {product.price}
      </td>

      {/* Status */}
      <td className="px-4 py-4 whitespace-nowrap">
        {product.status === "Available" ? (
          <span className="inline-block px-3 py-1 rounded-lg bg-[#EDF9EF] text-[#2F9E44] text-sm font-medium">
            Available
          </span>
        ) : (
          <span className="inline-block px-3 py-1 rounded-lg bg-[#FFF3E8] text-[#FF8A00] text-sm font-medium">
            Disabled
          </span>
        )}
      </td>

      {/* Menu */}
      <td className="px-4 py-4 text-center">
        <button className="text-[#98A2B3] hover:text-black">
          <FiMoreVertical size={18} />
        </button>
      </td>

    </tr>
  );
}

export default ProductRow;