import {
  FiEdit2,
  FiTrash2,
  FiPaperclip,
} from "react-icons/fi";

function NoteCard({ note }) {
  return (
    <div
      className="rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-[#ECECEC]"
      style={{ backgroundColor: note.color }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-5">

        <div>

          <h3 className="text-xl font-semibold text-[#2F3442]">
            {note.title}
          </h3>

          <p className="text-sm text-[#98A2B3] mt-1">
            {note.date}
          </p>

        </div>

        <FiPaperclip
          size={20}
          className="text-[#98A2B3]"
        />

      </div>

      {/* Content */}

      <div className="space-y-3 min-h-[140px]">

        {note.content.map((item, index) => (

          <p
            key={index}
            className="text-[15px] text-[#4B5563]"
          >
            {item}
          </p>

        ))}

      </div>

      {/* Footer */}

      <div className="flex justify-end gap-4 mt-6 pt-4 border-t border-black/10">

        <button className="w-10 h-10 rounded-xl bg-white hover:bg-[#F7F8FA] flex items-center justify-center transition">

          <FiEdit2
            size={17}
            className="text-[#2F9E44]"
          />

        </button>

        <button className="w-10 h-10 rounded-xl bg-white hover:bg-[#F7F8FA] flex items-center justify-center transition">

          <FiTrash2
            size={17}
            className="text-red-500"
          />

        </button>

      </div>

    </div>
  );
}

export default NoteCard;