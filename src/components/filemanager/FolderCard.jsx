import { FiPlus } from "react-icons/fi";

import design from "../../assets/images/folder-design.png";
import project from "../../assets/images/folder-project.png";
import music from "../../assets/images/folder-music.png";
import picture from "../../assets/images/folder-picture.png";
import document from "../../assets/images/folder-document.png";
import download from "../../assets/images/folder-download.png";

const folders = [
  {
    name: "Design",
    size: "15.8 GB",
    image: design,
  },
  {
    name: "Projects",
    size: "3.2 GB",
    image: project,
    active: true,
  },
  {
    name: "Music",
    size: "1.5 GB",
    image: music,
  },
  {
    name: "Pictures",
    size: "1.7 GB",
    image: picture,
  },
  {
    name: "Documents",
    size: "440 MB",
    image: document,
  },
  {
    name: "Downloads",
    size: "10.1 GB",
    image: download,
  },
];

function FolderCard() {
  return (
    <div className="grid grid-cols-4 gap-x-7 gap-y-8">
      {folders.map((folder) => (
        <div
          key={folder.name}
          className={`h-[170px] rounded-[24px] border border-[#ECECEC]
          flex flex-col items-center justify-center transition-all cursor-pointer
          ${
            folder.active
              ? "bg-[#F3F5F8]"
              : "bg-white hover:bg-[#FAFBFC]"
          }`}
        >
          <img
            src={folder.image}
            alt={folder.name}
            className="w-[90px] object-contain"
          />

          <h3 className="mt-4 text-[18px] font-semibold text-[#2F3442]">
            {folder.name}
          </h3>

          <p className="mt-1 text-[15px] text-[#98A2B3]">
            {folder.size}
          </p>
        </div>
      ))}

      {/* Add Folder */}
      <div
        className="h-[170px] rounded-[24px]
        border-2 border-dashed border-[#D8DDE4]
        flex flex-col items-center justify-center
        bg-[#F7F8FA] cursor-pointer"
      >
        <div className="w-14 h-14 rounded-full bg-[#F1F3F6] flex items-center justify-center">
          <FiPlus size={22} className="text-[#4B5364]" />
        </div>

        <p className="mt-5 text-[18px] font-medium text-[#687284]">
          Add Folder
        </p>
      </div>
    </div>
  );
}

export default FolderCard;