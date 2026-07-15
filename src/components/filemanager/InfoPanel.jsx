import folderDesign from "../../assets/images/folder-design.png";

function InfoPanel() {
  return (
    <div className="w-[290px] bg-white border-l border-[#ECECEC] px-8 py-10 flex flex-col">

      {/* Folder */}
      <div className="flex flex-col items-center">

        <img
          src={folderDesign}
          alt="Projects"
          className="w-[130px] h-auto object-contain"
        />

        <h2 className="mt-5 text-[22px] font-semibold text-[#2F3442]">
          Projects
        </h2>

      </div>

      {/* INFO */}
      <div className="mt-14">

        <h3 className="text-[12px] font-semibold tracking-[1.5px] text-[#98A2B3] mb-8">
          INFO
        </h3>

        <div className="space-y-6">

          <InfoRow label="Type" value="Folder" />

          <InfoRow label="Size" value="3.2 GB" />

          <InfoRow label="Owner" value="ArtTemplate" />

          <InfoRow
            label="Location"
            value="My Files"
            green
          />

          <InfoRow
            label="Modified"
            value="Sep 17, 2020"
          />

          <InfoRow
            label="Created"
            value="Sep 10, 2020"
          />

        </div>

      </div>

      {/* Divider */}
      <div className="my-10 border-t border-[#ECECEC]" />

      {/* SETTINGS */}
      <div>

        <h3 className="text-[12px] font-semibold tracking-[1.5px] text-[#98A2B3] mb-8">
          SETTINGS
        </h3>

        <div className="space-y-7">

          <Toggle
            label="File Sharing"
            active
          />

          <Toggle label="Backup" />

          <Toggle label="Sync" />

        </div>

      </div>

    </div>
  );
}

function InfoRow({
  label,
  value,
  green,
}) {
  return (
    <div className="flex justify-between items-center">

      <span className="text-[15px] text-[#98A2B3]">
        {label}
      </span>

      <span
        className={`text-[15px] ${
          green
            ? "text-[#2F9E44]"
            : "text-[#2F3442]"
        }`}
      >
        {value}
      </span>

    </div>
  );
}

function Toggle({
  label,
  active = false,
}) {
  return (
    <div className="flex items-center justify-between">

      <span className="text-[15px] text-[#2F3442]">
        {label}
      </span>

      <div
        className={`relative w-[44px] h-[24px] rounded-full transition ${
          active
            ? "bg-[#2F9E44]"
            : "bg-[#E5E7EB]"
        }`}
      >

        <div
          className={`absolute top-[2px] w-5 h-5 rounded-full bg-white shadow transition-all ${
            active
              ? "left-[22px]"
              : "left-[2px]"
          }`}
        />

      </div>

    </div>
  );
}

export default InfoPanel;