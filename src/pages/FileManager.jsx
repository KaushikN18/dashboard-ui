import FolderSidebar from "../components/filemanager/FolderSidebar";
import FolderGrid from "../components/filemanager/FolderGrid";
import InfoPanel from "../components/filemanager/InfoPanel";

function FileManager() {
  return (
    <div className="h-full bg-[#F7F8FA] p-6 overflow-hidden">

      <div className="flex h-full rounded-[32px] border border-[#ECECEC] bg-white overflow-hidden">

        {/* Left Sidebar */}
        <div className="w-[220px] flex-shrink-0 border-r border-[#ECECEC]">
          <FolderSidebar />
        </div>

        {/* Center Content */}
        <div className="flex-1 min-w-0 overflow-y-auto overflow-x-hidden">
          <FolderGrid />
        </div>

        {/* Right Info Panel */}
        <div className="w-[280px] flex-shrink-0 border-l border-[#ECECEC]">
          <InfoPanel />
        </div>

      </div>

    </div>
  );
}

export default FileManager;