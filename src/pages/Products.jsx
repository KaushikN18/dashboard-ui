import {
  FiDownload,
  FiPlus,
  FiList,
  FiGrid,
  FiChevronDown,
} from "react-icons/fi";

import ProductsHeader from "../components/products/ProductsHeader";
import ProductsTable from "../components/products/ProductsTable";

function Products() {
  return (
    <div className="space-y-6">

      {/* Top */}
      <div className="flex items-center justify-between">

        <h1 className="text-[34px] font-semibold text-[#2F3442]">
          Products
        </h1>

        <div className="flex items-center gap-3">

          {/* Export */}
          <button className="h-11 px-5 bg-white border border-[#ECECEC] rounded-xl flex items-center gap-2 text-[14px] text-[#687284] hover:bg-[#F8F9FA]">

            <FiDownload size={16} />

            Export

            <FiChevronDown size={14} />

          </button>

          {/* Add */}
          <button className="w-11 h-11 rounded-xl bg-[#2F9E44] text-white flex justify-center items-center hover:bg-[#28893B]">

            <FiPlus size={20} />

          </button>

        </div>

      </div>

      {/* Tabs + Search */}
      <ProductsHeader />

      {/* List/Grid */}
      <div className="flex justify-end gap-4 -mt-2">

        <button className="text-[#2F9E44]">
          <FiList size={18} />
        </button>

        <button className="text-[#9AA3B2]">
          <FiGrid size={18} />
        </button>

      </div>

      {/* Table */}
      <ProductsTable />

    </div>
  );
}

export default Products;