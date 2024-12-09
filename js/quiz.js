// Завантаження JSON із питаннями
(async () => {
    try {
        // Завантаження списку тестів
        const testsResponse = await fetch('/data/dependency/tests.json');
        if (!testsResponse.ok) {
            throw new Error('Помилка завантаження списку тестів');
        }
        const tests = await testsResponse.json();

        // Заповнення списку тестів у <datalist>
        populateTestList(tests);

        // Вибір активного тесту
        const activeTest = tests.find(test => test.active);
        if (activeTest) {
            await loadTest(activeTest);
        } else {
            console.warn('Немає активного тесту!');
        }
    } catch (error) {
        console.error('Сталася помилка:', error);
    }
})();

// Завантаження тесту за обраним шляхом
async function loadTest(test) {
    try {
        const { decodeFile } = await import('./decode.js');
        const questions = await decodeFile(test.path); // Декодування Base64

        renderQuiz(questions); // Відображення тесту
        setupSubmitHandler(questions); // Обробка відповідей
    } catch (error) {
        console.error(`Не вдалося завантажити тест "${test.name}":`, error);
    }
}

/**
 * Заповнення списку тестів у <datalist>
 * @param {*} tests 
 */
// function populateTestDataList(tests) {
//     const testsList = document.getElementById('tests');
//     const testInput = document.getElementById('test');

//     tests.forEach(test => {
//         const option = document.createElement('option');
//         option.value = test.name; // Назва тесту
//         testsList.appendChild(option);
//     });

//     // Обробка вибору тесту
//     testInput.addEventListener('input', async (event) => {
//         const selectedTestName = event.target.value;
//         const selectedTest = tests.find(test => test.name === selectedTestName);

//         if (selectedTest) {
//             // Позначаємо обраний тест як активний
//             tests.forEach(test => test.active = false);
//             selectedTest.active = true;

//             // Оновлюємо файл tests.json
//             await saveTestsData(tests);

//             // Завантажуємо обраний тест
//             await loadTest(selectedTest);
//         } else {
//             console.warn(`Тест "${selectedTestName}" не знайдено.`);
//         }
//     });
// }

function populateTestList(tests) {
    const testsList = document.getElementById('tests');
    // Select2
    // const testsList = document.getElementsByClassName('.select2-container');

    // Очищення списку, якщо він вже заповнений
    testsList.innerHTML = '';

    // Додавання тестів до списку
    tests.forEach(test => {
        const option = document.createElement('option');
        option.value = test.name; // Назва тесту
        option.textContent = test.name;
        if (test.active) {
            option.selected = true; // Позначаємо активний тест
        }
        testsList.appendChild(option);
    });

    // Додаємо обробник події 'change' для Select2
    $('#tests').on('change', async function (event) {
        const selectedTestName = $(this).val(); // Отримуємо значення вибраного тесту
        const selectedTest = tests.find(test => test.name === selectedTestName);

        if (selectedTest) {
            // Позначаємо обраний тест як активний
            tests.forEach(test => test.active = false);
            selectedTest.active = true;
            // Оновлюємо файл tests.json
            // await saveTestsData(tests);
            // Завантажуємо обраний тест
            await loadTest(selectedTest);
        } else {
            console.warn(`Тест "${selectedTestName}" не знайдено.`);
        }
    });

    // Обробка вибору тесту
    // testsList.addEventListener('change', async (event) => {
    //     const selectedTestName = event.target.value; // Отримуємо назву вибраного тесту
    //     const selectedTest = tests.find(test => test.name === selectedTestName);
    //     if (selectedTest) {
    //         // Позначаємо обраний тест як активний
    //         tests.forEach(test => test.active = false);
    //         selectedTest.active = true;
    //         // Оновлюємо файл tests.json
    //         // await saveTestsData(tests);
    //         // Завантажуємо обраний тест
    //         await loadTest(selectedTest);
    //     } else {
    //         console.warn(`Тест "${selectedTestName}" не знайдено.`);
    //     }
    // });
}

// Збереження оновленого списку тестів
async function saveTestsData(tests) {
    try {
        const response = await fetch('/data/dependency/tests.json', {
            method: 'POST', // Потрібен сервер для обробки POST-запитів
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(tests, null, 2),
        });

        if (!response.ok) {
            throw new Error('Помилка збереження списку тестів');
        }
        console.log('Список тестів успішно оновлено');
    } catch (error) {
        console.error('Не вдалося зберегти список тестів:', error);
    }
}

// Функція для екранування HTML-спеціальних символів
function escapeHtmlUsingTextContent(str) {
    var div = document.createElement("div"); // Створюємо тимчасовий елемент
    div.textContent = str; // Присвоюємо текстовий вміст
    return div.innerHTML; // Повертаємо екранований HTML
}

// Генерація HTML для тесту
function renderQuiz(questions) {
    const quizContainer = document.getElementById("quiz");

    // Очищення контейнера перед додаванням нового HTML
    quizContainer.innerHTML = "";

    questions.forEach((q, index) => {
        const questionHTML = `
     <div class="question">
         <h3>${index + 1}. ${escapeHtmlUsingTextContent(q.question)}</h3>
             <p class="hint" id="hint-${index}" style="display: none;">
             ${escapeHtmlUsingTextContent(q.hint)}
         </p>
         ${q.options
                .map(
                    (option) => `
             <label>
                 <input type="radio" name="q${index}" value="${escapeHtmlUsingTextContent(
                        option
                    )}">
                 <span>${escapeHtmlUsingTextContent(option)}</span>
             </label><br>
         `
                )
                .join("")}
         <button class="describe-btn" data-index="${index}">Підказка</button>
     </div>
 `;
        quizContainer.innerHTML += questionHTML;
    });

    // Додаємо події до кнопок пояснень
    const explanationButtons = document.querySelectorAll(".describe-btn");
    explanationButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const index = button.getAttribute("data-index");
            const hint = document.getElementById(`hint-${index}`);
            hint.style.display =
                hint.style.display === "none" ? "block" : "none";
        });
    });
}

// Налаштування обробника для перевірки результатів
function setupSubmitHandler(questions) {
    document.getElementById("submit").addEventListener("click", () => {
        let score = 0;
        let allAnswered = true; // Флаг для перевірки, чи всі відповіді дані.
        const explanations = document.querySelectorAll(
            "[class^='hint']"
        );

        // Приховуєм пояснення
        explanations.forEach((explain) => {
            explain.style.display = "none";
        });

        questions.forEach((q, index) => {
            const options = document.querySelectorAll(
                `input[name="q${index}"]`
            );
            let answered = false; // Чи відповів користувач на це питання?

            options.forEach((option) => {
                const label = option.parentElement; // Отримуємо <label>
                const question = option.parentElement.parentElement.querySelector('h3');

                // Скидаємо класи
                label.classList.remove("correct", "incorrect", "correct-answer", "incorrect-answer", "unanswered");

                if (option.checked) {
                    answered = true; // Користувач обрав варіант
                    if (option.value === q.correctAnswer) {
                        label.classList.add("correct");
                        question.classList.remove("incorrect-answer");
                        question.classList.add("correct-answer");
                        score++;
                    } else {
                        label.classList.add("incorrect");
                        question.classList.remove("correct-answer");
                        question.classList.add("incorrect-answer");
                    }
                }
            });

            // Якщо питання залишилось без відповіді
            if (!answered) {
                allAnswered = false;
                options.forEach((option) => {
                    const label = option.parentElement;
                    label.classList.add("unanswered");
                });
            }
        });

        // Показуємо результат
        const result = document.getElementById("result");
        if (!allAnswered) {
            result.innerHTML = `Не усі відповіді надані! </br> Вірно ${score} з ${questions.length} відповідей!`;
        } else {
            result.textContent = `Вірно ${score} з ${questions.length} відповідей!`;
        }
    });
}