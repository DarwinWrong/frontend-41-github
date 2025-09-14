import React, { useState, useRef } from "react";

export default function FormRef() {
  const [, setRender] = useState(0);

  const inputRef = useRef(null);
  const countClick = useRef(0);

  const handelClear = (e) => {
    e.preventDefault();
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
    }

    countClick.current += 1;
    console.log(countClick.current);
  };

  const forceRender = (e) => {
    e.preventDefault();
    setRender((prev) => prev + 1);
  };

  return (
    <div>
      <form action="">
        <input type="text" ref={inputRef} placeholder="Введіть ім'я" />
        <div style={{ marginTop: "10px" }}>
          <button onClick={handelClear}>Очистити</button>
          <button onClick={forceRender}>Примусовий рендер</button>
        </div>
      </form>
      <p>Лічильник кліків: {countClick.current}</p>
    </div>
  );
}
