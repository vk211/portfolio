"use client";

import { useState } from "react";

export default function ChatBot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ from: "user" | "bot"; text: string }[]>([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
  
    const userMessage: { from: "user"; text: string } = { from: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);
  
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });
  
    const data = await res.json();
    const botMessage: { from: "bot"; text: string } = { from: "bot", text: data.reply };
    setMessages((prev) => [...prev, botMessage]);
    setLoading(false);
  };
  

  return (
    <div className="max-w-xl mx-auto p-4 bg-white shadow rounded-xl space-y-4">
      <h2 className="text-xl font-bold">AI ChatBot</h2>
      <div className="h-64 overflow-y-auto border p-3 rounded bg-gray-50">
        {messages.map((msg, idx) => (
          <div key={idx} className={`my-2 text-${msg.from === "user" ? "right" : "left"}`}>
            <span className={`inline-block px-3 py-2 rounded-xl ${msg.from === "user" ? "bg-blue-200" : "bg-green-200"}`}>
              {msg.text}
            </span>
          </div>
        ))}
        {loading && <p className="text-gray-400">Bot is typing...</p>}
      </div>
      <div className="flex gap-2">
        <input
          className="flex-1 border px-3 py-2 rounded"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me something..."
        />
        <button onClick={sendMessage} className="bg-blue-600 text-white px-4 py-2 rounded">
          Send
        </button>
      </div>
    </div>
  );
}
