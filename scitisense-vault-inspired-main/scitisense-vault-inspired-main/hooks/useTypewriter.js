"use client";
import { useEffect, useState } from "react";
export function useTypewriter(text, speed = 40) {
    const [displayText, setDisplayText] = useState("");
    const [isComplete, setIsComplete] = useState(false);
    const [source, setSource] = useState({ text, speed });
    if (source.text !== text || source.speed !== speed) {
        setSource({ text, speed });
        setDisplayText("");
        setIsComplete(false);
    }
    useEffect(() => {
        if (!text) return;
        let i = 0;
        const interval = setInterval(() => {
            if (i < text.length) {
                setDisplayText(text.slice(0, i + 1));
                i++;
            }
            else {
                setIsComplete(true);
                clearInterval(interval);
            }
        }, speed);
        return () => clearInterval(interval);
    }, [text, speed]);
    return { displayText, isComplete };
}
