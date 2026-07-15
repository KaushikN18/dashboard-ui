import FolderSidebar from "../components/filemanager/FolderSidebar";
import FolderGrid from "../components/filemanager/FolderGrid";
import InfoPanel from "../components/filemanager/InfoPanel";

function FileManager() {
  return (
    <div className="h-full bg-[#F7F8FA] p-8">

      <div className="flex h-full overflow-hidden rounded-[32px] border border-[#ECECEC] bg-[#F7F8FA]">

        <FolderSidebar />

        <FolderGrid />

        <InfoPanel />

      </div>

    </div>
  );
}

export default FileManager;