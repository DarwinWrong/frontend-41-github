import React, { useRef, useState } from "react";

function NameForm() {
    const inputRef = useRef(null)
    const clickCount = useRef(0)
    const [, setForceRender] = useState(0)

    const handleClear = () => {
        if (inputRef.current) {
            inputRef.current.value = ''
            inputRef.current.focus()
        }
        clickCount.current += 1
    }

    const forceReRender = () => {
        setForceRender((prev) => prev +1)
    }

    return (
        <div>
            <h2>Форма імені</h2>
            <input type="text" placeholder="Введіть імʼя" ref={inputRef} />
            <button onClick={handleClear}>Очистити</button>
            <button onClick={forceReRender}>Примусовий ререндер</button>
            <p>Лічильник кліків:{clickCount.current}</p>
        </div>
    )
}

export default NameForm