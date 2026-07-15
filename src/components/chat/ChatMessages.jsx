import { messages } from "./chatData";
import MessageBubble from "./MessageBubble";

function ChatMessages() {
  return (
    <div className="flex-1 bg-[#F7F8FA] px-8 py-8 overflow-y-auto">

      <div className="max-w-4xl mx-auto">

        {messages.map((message) => (

          <MessageBubble
            key={message.id}
            message={message}
          />

        ))}

      </div>

    </div>
  );
}

export default ChatMessages;