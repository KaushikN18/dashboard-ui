import {
  FiInbox,
  FiStar,
  FiEdit3,
  FiSend,
  FiBookmark,
  FiTrash2,
  FiPlus,
} from "react-icons/fi";

function MailSidebar() {
  return (
    <div className="w-[260px] bg-white border-r border-[#ECECEC] p-6">

      {/* New Message */}
      <button className="w-full h-12 rounded-xl bg-[#43A047] text-white font-semibold text-[14px] hover:bg-[#388E3C] transition">
        NEW MESSAGE
      </button>

      {/* Menu */}
      <div className="mt-8 space-y-2">

        <button className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-[#F7F9FC] text-[#2F3442]">
          <div className="flex items-center gap-3">
            <FiInbox size={17} />
            <span>Inbox</span>
          </div>

          <span className="w-6 h-6 rounded-full bg-[#FF6B6B] text-white text-xs flex items-center justify-center">
            5
          </span>
        </button>

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#F7F9FC] text-[#687284]">
          <FiStar size={17} />
          Marked
        </button>

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#F7F9FC] text-[#687284]">
          <FiEdit3 size={17} />
          Drafts
        </button>

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#F7F9FC] text-[#687284]">
          <FiSend size={17} />
          Sent
        </button>

        <button className="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-[#F7F9FC] text-[#687284]">
          <div className="flex items-center gap-3">
            <FiBookmark size={17} />
            Important
          </div>

          <span className="w-6 h-6 rounded-full bg-[#FF6B6B] text-white text-xs flex items-center justify-center">
            4
          </span>
        </button>

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#F7F9FC] text-[#687284]">
          <FiTrash2 size={17} />
          Deleted
        </button>

      </div>

      {/* Labels */}
      <div className="mt-10">

        <div className="flex items-center justify-between mb-5">
          <h3 className="text-xs uppercase tracking-wider text-[#98A2B3] font-semibold">
            Labels
          </h3>

          <button>
            <FiPlus className="text-[#98A2B3]" />
          </button>
        </div>

        <div className="space-y-4">

          <Label color="bg-cyan-400" text="Personal" />
          <Label color="bg-sky-400" text="Work" />
          <Label color="bg-green-400" text="Friends" />
          <Label color="bg-yellow-400" text="Family" />
          <Label color="bg-emerald-500" text="Social" />

        </div>

      </div>

    </div>
  );
}

function Label({ color, text }) {
  return (
    <div className="flex items-center gap-3 text-[#687284] text-[14px]">
      <div className={`w-3 h-3 rounded-full ${color}`}></div>
      {text}
    </div>
  );
}

export default MailSidebar;