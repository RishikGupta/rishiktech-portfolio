import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete, fadeOut }) => {
  const [text, setText] = useState("");
  const fullText = "<Fetching portfolio data from the server.../>";

  useEffect(() => {
  let index = 0;
  const interval = setInterval(() => {
    setText(fullText.substring(0, index));
    index++;

    if (index > fullText.length) {
      clearInterval(interval);

      // ✅ Call onComplete ONLY ONCE after text animation finishes
      setTimeout(() => {
        onComplete(); // triggers isLoaded → then triggers fadeOut
      }, 300); // adjust if needed
    }
  }, 50);

  return () => clearInterval(interval);
}, [onComplete]);


  return (
    <div
      className={`fixed inset-0 z-50 bg-theme text-theme flex flex-col items-center justify-center transition-opacity duration-700 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="mb-4 text-4xl font-mono font-bold">
        {text} <span className="animate-blink ml-1">|</span>
      </div>

      <div className="w-[200px] h-[2px] bg-[var(--border-color)] rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-[var(--accent-color)] shadow-[0_0_15px_var(--accent-color)] animate-loading-bar" />
      </div>
    </div>
  );
};
