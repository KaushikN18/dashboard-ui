import { FiSearch, FiUpload } from "react-icons/fi";
import FolderCard from "./FolderCard";
import FileGrid from "./FileGrid";

function FolderGrid() {
  return (
    <div className="flex-1 bg-[#F7F8FA] p-10 overflow-y-auto">

      {/* Top Bar */}
      <div className="flex items-center justify-between mb-10">

        {/* Search */}
        <div className="w-[390px] h-12 rounded-xl bg-[#F7F8FA] flex items-center px-5">
          <FiSearch
            size={18}
            className="text-[#98A2B3]"
          />

          <input
            type="text"
            placeholder="Search..."
            className="ml-3 flex-1 bg-transparent outline-none text-[14px] text-[#2F3442] placeholder:text-[#A7AFBE]"
          />
        </div>

        {/* Upload */}
        <button className="h-12 px-7 rounded-xl bg-[#2F9E44] hover:bg-[#28913E] text-white font-medium flex items-center gap-3 transition">
          <FiUpload size={18} />
          Upload
        </button>

      </div>

      {/* Folder Title */}
      <h2 className="text-[42px] font-bold text-[#2F3442] mb-8">
        Folders
      </h2>

      {/* Folder Section */}
      <div className="min-h-[390px]">
        <FolderCard />
      </div>

      {/* Files Title */}
      <h2 className="text-[42px] font-bold text-[#2F3442] mb-8">
        Files
      </h2>

      {/* Files */}
      <FileGrid />

    </div>
  );
}

export default FolderGrid;