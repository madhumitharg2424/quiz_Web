import React, { useState } from "react";
import robot from "/assets/robot.webp"; // Use your own robot image

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! How can I assist you today? 😊" },
  ]);
  const [input, setInput] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = () => {
    if (!input.trim()) return;

    const newUserMsg = { from: "user", text: input };
    const botReply = generateReply(input);

    setMessages((prev) => [...prev, newUserMsg, { from: "bot", text: botReply }]);
    setInput("");
  };

  const generateReply = (msg) => {
    const text = msg.toLowerCase();
    if (text.includes("quiz")) return "You can find quizzes on your dashboard! 💡";
    if (text.includes("streak")) return "Your current streak is 🔥! Keep it going!";
    if (text.includes("profile")) return "Head over to the profile tab to check your progress.";
    if (text.includes("about")) return "REAL-MIND is built to prepare you for real-time decision making!";
    return "I'm still learning! Try asking about quiz, streak, profile, or about!";
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat window */}
      {isOpen && (
        <div className="w-80 h-96 mb-4 bg-white border border-blue-300 rounded-xl shadow-xl flex flex-col animate-fade-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-t-xl font-bold">
            REAL-MIND Assistant 🤖
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`text-sm px-3 py-2 rounded-xl max-w-[80%] ${
                  msg.from === "user"
                    ? "bg-blue-100 ml-auto text-right"
                    : "bg-gray-100 mr-auto text-left"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-blue-100 flex items-center gap-2">
            <input
              type="text"
              className="flex-1 border border-blue-300 rounded-full px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Ask me anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-full text-sm font-medium"
            >
              Send
            </button>
          </div>
        </div>
      )}

      {/* Floating robot button */}
      <button
        onClick={toggleChat}
        className={`transition-transform hover:scale-110 duration-300 ${
          isOpen ? "rotate-12 scale-110" : ""
        }`}
      >
        <img
          src={robot}
          alt="ChatBot"
          className="w-30 h-40 rounded-full shadow-xl border-2 border-blue-300"
        />
      </button>
    </div>
  );
};

export default ChatBot;
