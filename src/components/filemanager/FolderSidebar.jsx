import {
  FiChevronDown,
  FiChevronRight,
  FiTrash2,
} from "react-icons/fi";

import folderIcon from "../../assets/images/folder-icon.png";

function FolderSidebar() {
  return (
    <div className="w-[260px] border-r border-[#ECECEC] bg-white flex flex-col">

      {/* Folder List */}
      <div className="flex-1 p-6">

        <p className="text-[12px] font-semibold text-[#98A2B3] mb-6 tracking-wider">
          FOLDERS
        </p>

        {/* Design */}
        <div className="flex items-center justify-between py-3 cursor-pointer">
          <div className="flex items-center gap-3">
            <img
              src={folderIcon}
              alt="Folder"
              className="w-5 h-5 object-contain"
            />

            <span className="text-[15px] text-[#4B5364]">
              Design
            </span>
          </div>

          <FiChevronRight className="text-[#98A2B3]" />
        </div>

        {/* Projects */}
        <div className="mt-2">

          <div className="flex items-center justify-between py-3">

            <div className="flex items-center gap-3">

              <img
                src={folderIcon}
                alt="Folder"
                className="w-5 h-5 object-contain"
              />

              <span className="text-[15px] font-semibold text-[#2F3442]">
                Projects
              </span>

            </div>

            <FiChevronDown className="text-[#98A2B3]" />

          </div>

          <div className="ml-9 mt-3 border-l border-dashed border-[#D9DEE6] pl-6 space-y-4">

            <p className="text-[14px] text-[#687284]">Projects_01</p>
            <p className="text-[14px] text-[#687284]">Projects_02</p>
            <p className="text-[14px] text-[#687284]">Projects_03</p>
            <p className="text-[14px] text-[#687284]">Projects_04</p>

          </div>

        </div>

        {/* Remaining folders */}

        {["Music", "Pictures", "Documents", "Downloads"].map((item) => (

          <div
            key={item}
            className="flex items-center justify-between py-3 mt-2 cursor-pointer"
          >

            <div className="flex items-center gap-3">

              <img
                src={folderIcon}
                alt="Folder"
                className="w-5 h-5 object-contain"
              />

              <span className="text-[15px] text-[#4B5364]">
                {item}
              </span>

            </div>

            <FiChevronRight className="text-[#98A2B3]" />

          </div>

        ))}

      </div>

      {/* Trash */}

      <div className="border-t border-[#ECECEC] px-6 py-5">

        <div className="flex items-center gap-3 text-[#687284]">

          <FiTrash2 />

          <span className="text-[15px]">
            Trash
          </span>

        </div>

      </div>

      {/* Storage */}

      <div className="px-6 pb-6">

        <div className="flex justify-between text-[13px] text-[#98A2B3] mb-2">

          <span>Storage</span>

          <span>70%</span>

        </div>

        <div className="w-full h-2 rounded-full bg-[#ECECEC]">

          <div className="w-[70%] h-full rounded-full bg-[#2F9E44]" />

        </div>

      </div>

    </div>
  );
}

export default FolderSidebar;