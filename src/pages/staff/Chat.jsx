import React, { useState, useEffect, useRef } from "react";
import { Send, User } from "lucide-react";
import { chatList } from "../../assets/data/data";


const Chat = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [message, setMessage] = useState("");
  const messagesEndRef = useRef(null);

  /* ===== AUTO SCROLL TO BOTTOM ===== */
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [selectedChat]);

  const sendMessage = () => {
    if (!message.trim() || !selectedChat) return;

    setSelectedChat({
      ...selectedChat,
      messages: [
        ...selectedChat.messages,
        { from: "doctor", text: message },
      ],
      lastMessage: message,
    });

    setMessage("");
  };

  return (
  <div className="h-full flex bg-gray-50 overflow-hidden">

    {/* ===== LEFT: CHAT LIST ===== */}
    <div className="w-1/4 bg-white border-r flex flex-col">

      <div className="p-4 pb-8 font-semibold border-b shrink-0">
        Danh sách chat
      </div>

      <div className="flex-1 overflow-y-auto">
        {chatList.map((chat) => (
          <div
            key={chat.id}
            onClick={() => setSelectedChat(chat)}
            className={`flex items-center gap-3 p-4 cursor-pointer border-b hover:bg-gray-50 ${
              selectedChat?.id === chat.id ? "bg-blue-50" : ""
            }`}
          >
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
              <User size={18} className="text-gray-500" />
            </div>

            <div>
              <p className="font-medium">{chat.name}</p>
              <p className="text-xs text-gray-500 truncate w-40">
                {chat.lastMessage}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* ===== RIGHT: CHAT WINDOW ===== */}
    <div className="flex-1 flex flex-col">

      {!selectedChat ? (
        <div className="flex-1 flex items-center justify-center text-gray-400">
          Chọn một cuộc trò chuyện
        </div>
      ) : (
        <>
          <div className="p-4 border-b bg-white shrink-0">
            <p className="font-semibold">{selectedChat.name}</p>
            <p className="text-xs text-gray-500">{selectedChat.role}</p>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {selectedChat.messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.from === "doctor" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-4 py-2 rounded-lg max-w-[70%] text-sm ${
                    msg.from === "doctor"
                      ? "bg-maincolor text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t bg-white shrink-0 flex gap-2">
            <input
              className="flex-1 border rounded-full px-4 py-2 text-sm"
              placeholder="Nhập tin nhắn..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-maincolor text-white rounded-full px-4 py-2"
            >
              <Send size={18} />
            </button>
          </div>
        </>
      )}
    </div>
  </div>
);

};

export default Chat;
