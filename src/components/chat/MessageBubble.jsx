function MessageBubble({ message }) {
  const isMe = message.sender === "me";

  return (
    <div
      className={`flex mb-6 ${
        isMe ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[70%] px-5 py-4 rounded-2xl shadow-sm ${
          isMe
            ? "bg-[#2F9E44] text-white rounded-br-md"
            : "bg-white border border-[#ECECEC] text-[#2F3442] rounded-bl-md"
        }`}
      >
        <p className="leading-7 whitespace-pre-line">
          {message.text}
        </p>

        <p
          className={`text-xs mt-3 ${
            isMe ? "text-green-100" : "text-[#98A2B3]"
          }`}
        >
          {message.time}
        </p>
      </div>
    </div>
  );
}

export default MessageBubble;