import { useState } from "react";
import Message from "./Message";
import InputBox from "./InputBox";

export default function ChatWindow() {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you?", sender: "bot" },
  ]);

  const sendMessage = (text) => {
    if (!text.trim()) return;
    setMessages([...messages, { text, sender: "user" }]);
  };

  return (
    <div className="flex flex-col flex-1">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, idx) => (
          <Message key={idx} text={msg.text} sender={msg.sender} />
        ))}
      </div>
      <InputBox sendMessage={sendMessage} />
    </div>
  );
}
