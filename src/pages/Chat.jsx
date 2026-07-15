import ChatSidebar from "../components/chat/ChatSidebar";
import ChatHeader from "../components/chat/ChatHeader";
import ChatMessages from "../components/chat/ChatMessages";
import ChatInput from "../components/chat/ChatInput";

function Chat() {
  return (
    <div className="page-container min-h-[calc(100vh-120px)] flex gap-6 overflow-hidden">

      {/* Sidebar */}

      <ChatSidebar />

      {/* Chat Window */}

      <div className="flex-1 flex flex-col bg-white rounded-2xl shadow-sm border border-[#ECECEC] overflow-hidden">

        <ChatHeader />

        <ChatMessages />

        <ChatInput />

      </div>

    </div>
  );
}

export default Chat;