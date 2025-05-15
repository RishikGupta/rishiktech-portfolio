import { useEffect } from "react";
import { useState } from "react"

export const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("")
    const fullText = "<Getting things ready... just like I do in production! />";

    useEffect(() => {
        let index = 0;
        let delay = 80;
        const pausePoints = [22,23,24];
         const type = () => {
            if (index <= fullText.length) {
                setText(fullText.substring(0, index));
                index++;

                if (pausePoints.includes(index - 1)) {
                    delay = 2000;
                } else {
                    delay = 80;
                }

                setTimeout(type, delay);
            } else {
                setTimeout(() => {
                    onComplete();
                }, 1000);
            }
        };

        type(); // initiate typing
    }, [onComplete]);

    return <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
        <div className="mb-4 text-4xl font-mono font-bold">
            {text} <span className="animate-blink ml-1"> | </span>
        </div>

        <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden ">
            <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar">
                {" "}
            </div>
        </div>

    </div>
}