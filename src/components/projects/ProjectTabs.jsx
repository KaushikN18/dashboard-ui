function ProjectTabs() {
  const tabs = [
    { name: "All", count: 151, active: true },
    { name: "Started", count: 128 },
    { name: "On Hold", count: 15 },
    { name: "Completed", count: 8 },
  ];

  return (
    <div className="mb-8">

      <div className="flex items-center gap-10 border-b border-[#ECECEC]">

        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`relative pb-5 flex items-center gap-3 transition ${
              tab.active
                ? "text-[#2F3442] font-semibold"
                : "text-[#98A2B3]"
            }`}
          >
            {tab.name}

            <span className="px-3 py-1 rounded-lg bg-[#F3F5F7] text-[12px] text-[#98A2B3]">
              {tab.count}
            </span>

            {tab.active && (
              <div className="absolute left-0 bottom-0 w-full h-[3px] bg-[#45C66A] rounded-full"></div>
            )}
          </button>
        ))}

      </div>

    </div>
  );
}

export default ProjectTabs;