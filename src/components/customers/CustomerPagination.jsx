function CustomerPagination() {
  return (
    <div className="flex items-center justify-between mt-6">

      <p className="text-[#98A2B3] text-sm">
        Showing 1 to 5 of 50 customers
      </p>

      <div className="flex gap-2">

        <button className="w-10 h-10 rounded-lg border border-[#ECECEC] hover:bg-[#F8F9FB]">
          &lt;
        </button>

        <button className="w-10 h-10 rounded-lg bg-[#2F9E44] text-white">
          1
        </button>

        <button className="w-10 h-10 rounded-lg border border-[#ECECEC] hover:bg-[#F8F9FB]">
          2
        </button>

        <button className="w-10 h-10 rounded-lg border border-[#ECECEC] hover:bg-[#F8F9FB]">
          3
        </button>

        <button className="w-10 h-10 rounded-lg border border-[#ECECEC] hover:bg-[#F8F9FB]">
          &gt;
        </button>

      </div>

    </div>
  );
}

export default CustomerPagination;