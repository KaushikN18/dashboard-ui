function ProgressBar({ value }) {
  return (
    <div className="mt-2">

      <div className="flex justify-between mb-2">
        <span className="text-[15px] text-[#4B5364]">
          Progress
        </span>

        <span className="text-[15px] text-[#98A2B3]">
          {value}%
        </span>
      </div>

      <div className="h-[7px] rounded-full bg-[#EEF1F4] overflow-hidden">
        <div
          className="h-full rounded-full bg-[#45C66A]"
          style={{ width: `${value}%` }}
        />
      </div>

    </div>
  );
}

export default ProgressBar;