import FileCard from "./FileCard";

const files = [
  {
    name: "Rocket - Admin.fig",
    size: "1.8 MB",
    type: "figma",
  },
  {
    name: "Rocket - Admin.sketch",
    size: "1.5 MB",
    type: "diamond",
  },
  {
    name: "Arion - Admin.sketch",
    size: "1.2 MB",
    type: "diamond",
  },
  {
    name: "Project Brief.docx",
    size: "1.4 MB",
    type: "word",
  },
  {
    name: "Design.zip",
    size: "1.9 GB",
    type: "zip",
  },
  {
    name: "vCard - Resume.psd",
    size: "2.5 MB",
    type: "photoshop",
  },
  {
    name: "Project Brief.docx",
    size: "1.2 MB",
    type: "word",
  },
  {
    name: "Brand Styles Guide.pdf",
    size: "4.5 MB",
    type: "pdf",
  },
];

function FileGrid() {
  return (
    <div className="grid grid-cols-4 gap-x-10 gap-y-12 mt-6">
      {files.map((file, index) => (
        <FileCard key={index} file={file} />
      ))}
    </div>
  );
}

export default FileGrid;