import React, { useState } from "react";

function MoodTracker (){
    const [mood, setMood] = useState('')
    const [comment, setComment] = useState('')

    let bgColor = '#eee'
    if (mood === '😊') bgColor = 'lightgreen'
    if (mood === '😐') bgColor = 'lightgray'
    if (mood === '😞') bgColor = 'lightcoral'

    const styles = {
        container: {
            maxWidth: '400px',
            margin: 'auto',
            textAlight: 'center'
        },
        buttons: {
            marginBottom: '10px',
        },
        input: {
            width: '100%',
            padding: '8px',
            borderRadius: '5px'
        },
        result: {
            backgroundColor: bgColor,
            marginTop: '15px',
            padding: '10px',
            borderRadius: '10px'
        }
    }

    return (
        <div style={styles.container}>
            <h2>Mood Tracker</h2>
            <div style={styles.buttons}>
                <button onClick={() => setMood("😊")}>😊</button>
                <button onClick={() => setMood("😐")}>😐</button>
                <button onClick={() => setMood("😞")}>😞</button>
            </div>
            <input type="text" placeholder="Що вплинуло на твій настрій?" value={comment} onChange={(e) => setComment(e.target.value)} style={styles.input}></input>
            <div style={styles.result}>
                {mood ? (
                    <p>Ваш настрій сьогодні: <strong>{mood}</strong> <br />
                    Коментар: <em>"{comment || "Без коментаря"}"</em></p>
                ): (<p>Настрій не вказано</p>)}
            </div>
        </div>
    )
}

export default MoodTracker