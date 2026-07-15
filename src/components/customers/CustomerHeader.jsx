import { FiPlus } from "react-icons/fi";

function CustomerHeader() {
  return (
    <div className="flex items-center justify-between mb-8">

      <div>
        <h1 className="text-[34px] font-bold text-[#2F3442]">
          Customers
        </h1>

        <p className="text-[#98A2B3] mt-1">
          Manage all your customers
        </p>
      </div>

      <button className="flex items-center gap-2 bg-[#2F9E44] hover:bg-[#27863A] text-white px-5 py-3 rounded-xl transition shadow">

        <FiPlus size={20} />

        Add Customer

      </button>

    </div>
  );
}

export default CustomerHeader;