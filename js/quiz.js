(async () => {
    try {
        const testsResponse = await fetch('/frontend-41-github/data/dependency/tests.json');
        if (!testsResponse.ok) {
            throw new Error('Помилка завантаження списку тестів');
        }
        const tests = await testsResponse.json();

        populateTestList(tests);

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

async function loadTest(test) {
    try {
        const { decodeFile } = await import('./decode.js');
        const questions = await decodeFile(test.path);

        renderQuiz(questions);
        setupSubmitHandler(questions);
    } catch (error) {
        console.error(`Не вдалося завантажити тест "${test.name}":`, error);
    }
}

function populateTestList(tests) {
    const testsList = document.getElementById('tests');

    testsList.innerHTML = '';

    tests.forEach(test => {
        const option = document.createElement('option');
        option.value = test.name;
        option.textContent = test.name;
        if (test.active) {
            option.selected = true;
        }
        testsList.appendChild(option);
    });

    $('#tests').on('change', async function (event) {
        const selectedTestName = $(this).val();
        const selectedTest = tests.find(test => test.name === selectedTestName);

        if (selectedTest) {
            tests.forEach(test => test.active = false);
            selectedTest.active = true;

            await loadTest(selectedTest);
        } else {
            console.warn(`Тест "${selectedTestName}" не знайдено.`);
        }
    });
}

function escapeHtmlUsingTextContent(str) {
    var div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
}

function renderQuiz(questions) {
    const quizContainer = document.getElementById("quiz");

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

function setupSubmitHandler(questions) {
    document.getElementById("submit").addEventListener("click", () => {
        let score = 0;
        let allAnswered = true;
        const explanations = document.querySelectorAll(
            "[class^='hint']"
        );

        explanations.forEach((explain) => {
            explain.style.display = "none";
        });

        questions.forEach((q, index) => {
            const options = document.querySelectorAll(
                `input[name="q${index}"]`
            );
            let answered = false;

            options.forEach((option) => {
                const label = option.parentElement;
                const question = option.parentElement.parentElement.querySelector('h3');

                label.classList.remove("correct", "incorrect", "correct-answer", "incorrect-answer", "unanswered");

                if (option.checked) {
                    answered = true;
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

            if (!answered) {
                allAnswered = false;
                options.forEach((option) => {
                    const label = option.parentElement;
                    label.classList.add("unanswered");
                });
            }
        });

        const result = document.getElementById("result");
        if (!allAnswered) {
            result.innerHTML = `Не усі відповіді надані! </br> Вірно ${score} з ${questions.length} відповідей!`;
        } else {
            result.textContent = `Вірно ${score} з ${questions.length} відповідей!`;
        }
    });
}