import { useState } from "react";
import {
  FiSmile,
  FiPaperclip,
  FiSend,
} from "react-icons/fi";

function ChatInput() {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    console.log(message);
    setMessage("");
  };

  return (
    <div className="bg-white rounded-b-2xl border-t border-[#ECECEC] p-5">

      <div className="flex items-center gap-4">

        <button className="text-[#98A2B3] hover:text-[#2F9E44]">
          <FiSmile size={22} />
        </button>

        <button className="text-[#98A2B3] hover:text-[#2F9E44]">
          <FiPaperclip size={22} />
        </button>

        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 h-12 px-4 rounded-xl border border-[#ECECEC] outline-none focus:border-[#2F9E44]"
        />

        <button
          onClick={handleSend}
          className="w-12 h-12 rounded-xl bg-[#2F9E44] hover:bg-[#27863A] text-white flex items-center justify-center transition"
        >
          <FiSend size={18} />
        </button>

      </div>

    </div>
  );
}

export default ChatInput;