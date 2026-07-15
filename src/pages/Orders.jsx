import { useState } from "react";
import {
  FiDownload,
  FiPlus,
  FiChevronDown,
} from "react-icons/fi";

import OrdersTable from "../components/orders/OrdersTable";
import ProductModal from "../components/orders/ProductModal";

function Orders() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="page-container space-y-6">

      {/* Header */}
      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-[34px] font-semibold text-[#2F3442]">
            Orders
          </h1>

          <div className="flex items-center gap-6 mt-5">

            <button className="text-[#2F9E44] border-b-2 border-[#2F9E44] pb-2 text-[15px] font-medium">
              All
              <span className="ml-2 px-2 py-0.5 rounded-md bg-[#F3F4F6] text-[#687284] text-[12px]">
                283
              </span>
            </button>

            <button className="text-[#687284] text-[15px]">
              Available
              <span className="ml-2 px-2 py-0.5 rounded-md bg-[#F3F4F6] text-[12px]">
                268
              </span>
            </button>

            <button className="text-[#687284] text-[15px]">
              Disabled
              <span className="ml-2 px-2 py-0.5 rounded-md bg-[#F3F4F6] text-[12px]">
                15
              </span>
            </button>

          </div>

        </div>

        <div className="flex items-center gap-3">

          <button className="h-11 px-5 rounded-xl border border-[#ECECEC] bg-white flex items-center gap-2 text-[#687284] hover:bg-[#F9FAFB]">
            <FiDownload />
            Export
            <FiChevronDown />
          </button>

          <button className="w-11 h-11 rounded-xl bg-[#2F9E44] text-white flex items-center justify-center hover:bg-[#25853A]">
            <FiPlus size={18} />
          </button>

        </div>

      </div>

      {/* Orders Table */}
      <OrdersTable
        onSelectProduct={setSelectedProduct}
      />

      {/* Product Popup */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

    </div>
  );
}

export default Orders;