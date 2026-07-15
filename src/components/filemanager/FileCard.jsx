import figma from "../../assets/images/figma-file.png";
import sketch from "../../assets/images/sketch-file.png";
import word from "../../assets/images/word-file.png";
import pdf from "../../assets/images/pdf-file.png";
import photoshop from "../../assets/images/photoshop-file.png";
import zip from "../../assets/images/zip.png";

function FileCard({ file }) {
  const getIcon = () => {
    switch (file.type) {
      case "figma":
        return figma;

      case "photoshop":
        return photoshop;

      case "word":
        return word;

      case "pdf":
        return pdf;

      case "diamond":
        return sketch;

      case "zip":
        return zip;

      default:
        return zip;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src={getIcon()}
        alt={file.type}
        className="w-[72px] h-[88px] object-contain"
      />

      <h3 className="mt-4 text-[15px] font-medium text-[#2F3442] text-center leading-5 truncate w-[120px]">
        {file.name}
      </h3>

      <p className="mt-1 text-[13px] text-[#98A2B3]">
        {file.size}
      </p>
    </div>
  );
}

export default FileCard;