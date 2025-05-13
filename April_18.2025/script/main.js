const questions = [
  {
    question: "Яка столиця Франції?",
    answers: ["Мілан", "Париж", "Мадрид"],
    correct: 1
  },
  {
    question: "Яка столиця Італії?",
    answers: ["Рим", "Лісабон", "Відень"],
    correct: 0
  },
  {
    question: "Сонце — це?",
    answers: ["Планета", "Зірка", "Супутник"],
    correct: 1
  },
  {
    question: "Яка мова в Україні?",
    answers: ["Англійська", "Польська", "Українська"],
    correct: 2
  },
  {
    question: "Скільки буде 2 + 2?",
    answers: ["4", "5", "3"],
    correct: 0
  }
];

let currentQuestion = 0;
let correctAnswers = 0;

const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");
const modal = document.getElementById("result-modal");
const resultText = document.getElementById("result-text");
const retryBtn = document.getElementById("retry-btn");
const quizContainer = document.querySelector(".quiz-container");

function showQuestion() {
  const q = questions[currentQuestion];
  questionNumber.textContent = `Питання ${currentQuestion + 1} з ${questions.length}`;
  questionText.textContent = q.question;

  answerButtons.innerHTML = "";
  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.classList.add("answer-btn");
    btn.onclick = () => selectAnswer(index);
    answerButtons.appendChild(btn);
  });
}

function selectAnswer(index) {
  if (index === questions[currentQuestion].correct) {
    correctAnswers++;
  }
  nextBtn.style.display = "inline-block";
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  nextBtn.style.display = "none";

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showModal();
  }
});

retryBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
  quizContainer.style.display = "block";
  currentQuestion = 0;
  correctAnswers = 0;
  showQuestion();
});

function showModal() {
  resultText.textContent = `Правильних відповідей: ${correctAnswers} з ${questions.length}`;
  modal.classList.remove("hidden");
}
