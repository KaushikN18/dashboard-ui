import { FiSearch } from "react-icons/fi";
import chats from "./chatData";

function ChatSidebar() {
  return (
    <div className="w-[340px] bg-white rounded-2xl border border-[#ECECEC] shadow-sm overflow-hidden">

      {/* Header */}
      <div className="p-6 border-b border-[#ECECEC]">

        <h2 className="text-[24px] font-semibold text-[#2F3442]">
          Messages
        </h2>

        <div className="relative mt-5">

          <FiSearch
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#98A2B3]"
            size={18}
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-full h-12 pl-11 pr-4 rounded-xl border border-[#ECECEC] outline-none focus:border-[#2F9E44]"
          />

        </div>

      </div>

      {/* Chat List */}
      <div className="h-[650px] overflow-y-auto">

        {chats.map((chat) => (

          <div
            key={chat.id}
            className="flex items-center gap-4 px-6 py-4 hover:bg-[#F8F9FB] cursor-pointer transition border-b border-[#F5F5F5]"
          >

            {/* Avatar */}
            <div className="relative">

              <img
                src={chat.avatar}
                alt={chat.name}
                className="w-14 h-14 rounded-full object-cover"
              />

              {chat.online && (
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-[#2F9E44] border-2 border-white"></span>
              )}

            </div>

            {/* Name + Message */}
            <div className="flex-1 min-w-0">

              <div className="flex justify-between">

                <h3 className="font-semibold text-[#2F3442] truncate">
                  {chat.name}
                </h3>

                <span className="text-xs text-[#98A2B3]">
                  {chat.time}
                </span>

              </div>

              <p className="text-sm text-[#98A2B3] truncate mt-1">
                {chat.lastMessage}
              </p>

            </div>

            {/* Unread */}
            {chat.unread > 0 && (

              <div className="w-6 h-6 rounded-full bg-[#2F9E44] text-white text-xs flex items-center justify-center">

                {chat.unread}

              </div>

            )}

          </div>

        ))}

      </div>

    </div>
  );
}

export default ChatSidebar;