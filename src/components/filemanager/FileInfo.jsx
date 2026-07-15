import { FiFolder } from "react-icons/fi";
import { useState } from "react";

function Toggle({ defaultOn = false }) {
  const [on, setOn] = useState(defaultOn);

  return (
    <button
      onClick={() => setOn(!on)}
      className={`w-11 h-6 rounded-full transition ${
        on ? "bg-[#2F9E44]" : "bg-[#E5E7EB]"
      }`}
    >
      <div
        className={`w-5 h-5 bg-white rounded-full mt-0.5 transition ${
          on ? "translate-x-5" : "translate-x-0.5"
        }`}
      />
    </button>
  );
}

function FileInfo() {
  return (
    <div className="w-[290px] border-l border-[#ECECEC] bg-white p-8">

      {/* Folder */}
      <div className="flex flex-col items-center">

        <FiFolder
          size={90}
          className="text-[#FFC76A]"
        />

        <h2 className="mt-4 text-[24px] font-semibold text-[#2F3442]">
          Projects
        </h2>

      </div>

      {/* Info */}

      <div className="mt-10">

        <h3 className="text-[12px] font-semibold tracking-wider text-[#98A2B3] mb-5">
          INFO
        </h3>

        <div className="space-y-4 text-[14px]">

          <div className="flex justify-between">
            <span className="text-[#98A2B3]">Type</span>
            <span>Folder</span>
          </div>

          <div className="flex justify-between">
            <span className="text-[#98A2B3]">Size</span>
            <span>3.2 GB</span>
          </div>

          <div className="flex justify-between">
            <span className="text-[#98A2B3]">Owner</span>
            <span>ArtTemplate</span>
          </div>

          <div className="flex justify-between">
            <span className="text-[#98A2B3]">Location</span>
            <span className="text-[#2F9E44]">
              My Files
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-[#98A2B3]">
              Modified
            </span>
            <span>Sep 17, 2020</span>
          </div>

          <div className="flex justify-between">
            <span className="text-[#98A2B3]">
              Created
            </span>
            <span>Sep 10, 2020</span>
          </div>

        </div>

      </div>

      {/* Settings */}

      <div className="mt-12">

        <h3 className="text-[12px] font-semibold tracking-wider text-[#98A2B3] mb-5">
          SETTINGS
        </h3>

        <div className="space-y-5">

          <div className="flex justify-between items-center">
            <span>File Sharing</span>
            <Toggle defaultOn />
          </div>

          <div className="flex justify-between items-center">
            <span>Backup</span>
            <Toggle />
          </div>

          <div className="flex justify-between items-center">
            <span>Sync</span>
            <Toggle />
          </div>

        </div>

      </div>

    </div>
  );
}

export default FileInfo;