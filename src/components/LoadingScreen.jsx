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
        setTimeout(() => {
          onComplete();
        }, 300); // allow a brief pause before fade starts
      }
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-700 
      bg-theme text-theme ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{
        willChange: "opacity",
        contain: "layout style paint",
      }}
      aria-hidden={!fadeOut ? "false" : "true"}
    >
      <div className="w-full max-w-xl text-center px-4">
        <div className="mb-4 text-2xl sm:text-4xl font-mono font-bold min-h-[2.5rem]">
          {text}
          <span className="animate-blink ml-1">|</span>
        </div>

        <div className="w-[200px] h-[2px] bg-[var(--border-color)] rounded relative overflow-hidden mx-auto">
          <div className="w-[40%] h-full bg-[var(--accent-color)] shadow-[0_0_15px_var(--accent-color)] animate-loading-bar" />
        </div>
      </div>
    </div>
  );
};
