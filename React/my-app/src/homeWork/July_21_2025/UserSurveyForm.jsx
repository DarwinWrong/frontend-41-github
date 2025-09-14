import React from "react";
import { useState, useEffect } from "react";

export default function UserSurveyForm() {
  const [formData, setFormData] = useState({
    age: "",
    gender: "Чоловік",
    usedReact: false,
  });

  const [changeCount, setChangeCount] = useState(0);
  const [summary, setSummary] = useState("");

  useEffect(() => {
    if (formData.age !== "" || formData.usedReact !== false || formData.gender !== "Чоловік") {
      setChangeCount((prev) => prev + 1);
    }
  }, [formData.age, formData.gender, formData.usedReact]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSummary(
      `Вам ${formData.age} років, ви обрали стать: ${formData.gender}, і вже користувались React: ${
        formData.usedReact ? "Так" : "Ні"
      }.`
    );
  };

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto", fontFamily: "sans-serif" }}>
      <h2>Опитування користувача</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Вік:{" "}
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Стать:{" "}
            <select name="gender" value={formData.gender} onChange={handleChange}>
              <option value="Чоловік">Чоловік</option>
              <option value="Жінка">Жінка</option>
              <option value="Інше">Інше</option>
            </select>
          </label>
        </div>

        <div>
          <label>
            Чи користувався React раніше?{" "}
            <input
              type="checkbox"
              name="usedReact"
              checked={formData.usedReact}
              onChange={handleChange}
            />
          </label>
        </div>

        <button type="submit">Надіслати</button>
      </form>

      <p>Кількість змін: {changeCount}</p>
      {changeCount > 10 && <p style={{ color: "orange" }}>Та ти не можеш визначитися 😄</p>}

      {summary && (
        <div style={{ marginTop: "15px", fontWeight: "bold" }}>
          {summary}
        </div>
      )}
    </div>
  );
}