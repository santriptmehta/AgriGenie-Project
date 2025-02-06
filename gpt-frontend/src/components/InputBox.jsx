import { useState } from "react";

export default function InputBox({ sendMessage }) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    sendMessage(input);
    setInput("");
  };

  return (
    <div className="p-4 border-t border-gray-700">
      <div className="flex items-center bg-gray-800 p-3 rounded-lg">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Send a message..."
          className="flex-1 bg-transparent outline-none text-white"
        />
        <button
          onClick={handleSend}
          className="ml-2 px-4 py-2 bg-blue-600 rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
}
