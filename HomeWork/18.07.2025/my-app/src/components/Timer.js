import React, { useRef, useState, useEffect } from "react";

function Timer({ startFrom = 10 }) {
  const [seconds, setSeconds] = useState(startFrom);
  const [isRunning, setIsRunning] = useState(false);
  const [message, setMessage] = useState("");
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => {
          if (prev === 0) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            setMessage("Таймер завершено");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const startTimer = () => {
    if (isRunning) return;
    setIsRunning(true);
    setMessage("");
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const toggleTimer = () => {
    isRunning ? stopTimer() : startTimer();
  };

  return (
    <div>
      <h3>Таймер: {seconds} секунд</h3>
      <button onClick={toggleTimer}>{isRunning ? "Пауза" : "Старт"}</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Timer;
