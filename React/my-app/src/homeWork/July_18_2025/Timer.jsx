import React from "react";
import { useState, useEffect, useRef } from "react";

export default function Timer(){
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    useEffect(() => {
        let interval = null;
        if (isActive && !isPaused) {
            interval = setInterval(() => {
                setSeconds((prev) => prev + 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, isPaused, seconds]);

    return (
        <div>
            <h2>⏱ Timer</h2>
            <div>{seconds} seconds</div>
            <button onClick={() => setIsActive(true)}>Start</button>
            <button onClick={() => setIsPaused(!isPaused)}>
                {isPaused ? "Resume" : "Pause"}
            </button>
            <button onClick={() => {
                setIsActive(false);
                setSeconds(0);
            }}>Reset</button>
        </div>
    );
}

