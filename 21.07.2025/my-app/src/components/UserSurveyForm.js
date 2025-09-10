import { React, useState, useEffect } from "react";

function UserSurveyForm() {
    const [formData, setFormData] = useState({
        age: '',
        gender: 'Чоловік',
        usedReact: false
    })
    const [changeCount, setChangeCount] = useState(0)
    const [summary, setSummary] = useState('')

    useEffect(() => {
        if (formData.age !== '' || formData.usedReact || formData.gender !== 'Чоловік') {
            setChangeCount((prev) => prev + 1)
        }
    }, [formData.age, formData.gender, formData.usedReact])

    const handleSubmit = (e) => {
        e.preventDefault()
        const { age, gender, usedReact } = formData
        setSummary(
            `Вам ${age || '?'} років, ви обрали стать: ${gender}, і ви вже користувалися React: ${usedReact ? 'Так':'Ні'} `
        )
    }

    return (
        <div>
            <h2>Опитування користувача</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Вік:
                    <input type="number" value={formData.age} onChange={(e) => setFormData({...formData, age : e.target.value})}></input>
                </label>
                <label>
                    Стать:
                    <select value={formData.gender} onChange={(e) => setFormData({ ...formData, gender: e.target.value })}>
                        <option>Чоловік</option>
                        <option>Жінка</option>
                        <option>Інше</option>
                    </select>
                </label>
                <label>
                    Чи користувався React раніше? 
                    <input type="checkbox" value={formData.usedReact} onChange={(e) => setFormData({...formData, usedReact : e.target.value})}></input>
                </label>
                <br/>
                <button type="submit">Надіслати</button>
            </form>
            <p> Кількість змін: {changeCount}</p>
            {summary && <p><strong>{summary}</strong></p>}
        </div>
    )
}
export default UserSurveyForm