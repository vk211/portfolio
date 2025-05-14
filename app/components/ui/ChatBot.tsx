"use client";

import { useState } from "react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-slate-800 hover:bg-slate-700 text-white text-xl p-4 rounded-full shadow-xl transition"
      >
        🤖
      </button>

      {/* Chat Overlay */}
      {open && (
        <div className="fixed bottom-20 right-6 w-[350px] max-h-[500px] bg-white border border-gray-300 rounded-xl shadow-lg flex flex-col z-50">
          {/* Header */}
          <div className="bg-slate-800 text-white p-3 rounded-t-xl flex justify-between items-center">
            <span className="font-semibold">What to Know more about Vijay ? </span>
            <button onClick={() => setOpen(false)} className="text-lg">✖️</button>
          </div>

          {/* Coming Soon Message */}
          <div className="flex-1 overflow-y-auto px-3 py-6 text-center text-gray-600 text-sm flex items-center justify-center">
            🚧 Chatbot in progress... Coming soon!
          </div>

          {/* Disabled Input Area */}
          <div className="p-3 border-t text-sm text-gray-400 text-center">
            Stay tuned for live AI interaction!
          </div>
        </div>
      )}
    </>
  );
}
