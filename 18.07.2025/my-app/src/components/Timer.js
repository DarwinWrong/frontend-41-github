import React, { useRef, useState, useEffect } from "react";

function Timer({ startFrom = 10 }) {
    const [seconds, setSeconds] = useState(startFrom)
    const [isRunning, setIsRunning] = useState(false)
    const [message, setMessage] = useState('')
    const intervalRef = useRef(null)

    useEffect(() => {
        return () => clearInterval(intervalRef.current)
    }, [])
    const startTimer = () => {
        if (isRunning) return
        setIsRunning(true)
        setMessage('')
    }

    intervalRef.current = setInterval(() => {
        setSeconds((prev) => {
            if (prev === 0) {
                clearInterval(intervalRef.current)
                setIsRunning(false)
                setMessage("Таймер завершено")
                return 0 
            }
            return prev -1
        })
    }, 1000)
    
    const stopTimer = () => {
        clearInterval(intervalRef.current)
        setIsRunning(false)
    }

    const toggleTimer = () => {
        isRunning ? stopTimer() : startTimer()
    }

    return (
        <div>
            <h3>Таймер: {seconds} секунд</h3>
            <button onClick={toggleTimer}>{isRunning ? 'Пауза' : 'Старт'}</button>
            {message && <p>{message}</p>}
        </div>
    )
}

export default Timer