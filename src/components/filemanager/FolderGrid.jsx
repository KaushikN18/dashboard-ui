import { FiSearch, FiUpload } from "react-icons/fi";
import FolderCard from "./FolderCard";
import FileGrid from "./FileGrid";

function FolderGrid() {
  return (
    <div className="flex-1 min-w-0 bg-[#F7F8FA] p-6 overflow-y-auto overflow-x-hidden">

      {/* Top Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">

        {/* Search */}
        <div className="flex items-center flex-1 max-w-[420px] h-11 rounded-xl bg-white border border-[#ECECEC] px-4">

          <FiSearch
            size={18}
            className="text-[#98A2B3]"
          />

          <input
            type="text"
            placeholder="Search..."
            className="ml-3 flex-1 bg-transparent outline-none text-sm placeholder:text-[#A7AFBE]"
          />

        </div>

        {/* Upload */}
        <button className="h-11 px-6 rounded-xl bg-[#2F9E44] hover:bg-[#28913E] text-white font-medium flex items-center gap-2 transition">

          <FiUpload size={17} />

          Upload

        </button>

      </div>

      {/* Folder Title */}
      <h2 className="text-4xl font-bold text-[#2F3442] mb-6">
        Folders
      </h2>

      {/* Folder Cards */}
      <div className="mb-10">
        <FolderCard />
      </div>

      {/* Files Title */}
      <h2 className="text-4xl font-bold text-[#2F3442] mb-6">
        Files
      </h2>

      {/* File Grid */}
      <FileGrid />

    </div>
  );
}

export default FolderGrid;