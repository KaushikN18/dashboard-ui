import { FiPlus } from "react-icons/fi";

function NotesHeader() {
  return (
    <div className="flex items-center justify-between mb-8">

      {/* Left */}
      <div>

        <h1 className="text-[34px] font-semibold text-[#2F3442]">
          Notes
        </h1>

        <p className="text-[#98A2B3] mt-2">
          Manage your important notes and reminders.
        </p>

      </div>

      {/* Right */}

      <button className="h-12 px-6 bg-[#2F9E44] hover:bg-[#27863A] text-white rounded-xl flex items-center gap-2 transition">

        <FiPlus size={20} />

        New Note

      </button>

    </div>
  );
}

export default NotesHeader;