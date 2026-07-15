import { FiMoreVertical } from "react-icons/fi";

function ProductRow({ product }) {
  return (
    <tr className="h-[64px] border-b border-[#F2F2F2] hover:bg-[#FAFBFC] transition">

      {/* Checkbox */}
      <td className="px-5">
        <input
          type="checkbox"
          defaultChecked={product.checked}
          className="w-[18px] h-[18px] accent-[#2F9E44]"
        />
      </td>

      {/* Product */}
      <td className="text-[17px] font-medium text-[#3D4654]">
        {product.name}
      </td>

      {/* Number */}
      <td className="text-[#98A2B3]">
        {product.number}
      </td>

      {/* Category */}
      <td className="text-[#596273]">
        {product.category}
      </td>

      {/* Date */}
      <td className="text-[#98A2B3]">
        {product.date}
      </td>

      {/* Price */}
      <td className="font-medium text-[#3D4654]">
        {product.price}
      </td>

      {/* Status */}
      <td>

        {product.status === "Available" ? (

          <span className="px-4 py-2 rounded-xl bg-[#EDF9EF] text-[#2F9E44] text-[14px] font-medium">
            Available
          </span>

        ) : (

          <span className="px-4 py-2 rounded-xl bg-[#FFF3E8] text-[#FF8A00] text-[14px] font-medium">
            Disabled
          </span>

        )}

      </td>

      {/* Menu */}
      <td>

        <button className="text-[#98A2B3] hover:text-black">

          <FiMoreVertical size={20} />

        </button>

      </td>

    </tr>
  );
}

export default ProductRow;