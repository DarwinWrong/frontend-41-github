const questions = [{
    question: 'Яка планета Сонячної системи має найбільшу кількість супутників?',
    options: [
        'Сатурн',
        'Юпітер',
        'Уран',
        'Марс'],
    rightAnswer: 0
},
{
    question: ' Скільки часу потрібно світлу, щоб дістатися від Сонця до Землі?',
    options: [
        '8 хвилин 20 секунд',
        '1 хвилина 5 секунд',
        '12 хвилин 45 секунд',
        '2 хвилини'],

    rightAnswer: 0
},
{
    question: 'Чому небо вночі темне, якщо у Всесвіті мільярди зірок?',
    options: [
        'Через обмежену кількість зірок, які видно неозброєним оком',
        'Через атмосферу Землі',
        'Через парадокс Ольберса та розширення Всесвіту',
        'Тому що Сонце заходить'],
    rightAnswer: 2
},
{
    question: 'Що таке чорна діра і чому з неї не може втекти навіть світло?',
    options: [
        'Бо в ній дуже сильне магнітне поле',
        ' Через надзвичайно сильне гравітаційне поле',
        'Тому що вона заморожує час',
        'Вона має магнітне поле, яке притягує світло'],
    rightAnswer: 1
},
{
    question: 'Чи може астронавт заплакати в космосі?',
    options: [
        'Ні, бо в космосі не працюють слізні залози',
        'Так, але сльози не стікають — вони збираються в кульки',
        'Ні, бо в шоломі немає повітря',
        'Ні, бо тіло зневоднюється'],
    rightAnswer: 1
}]

const option1 = document.querySelector('.option1'),
    option2 = document.querySelector('.option2'),
    option3 = document.querySelector('.option3'),
    option4 = document.querySelector('.option4')

const optionElements = document.querySelectorAll('.option')
const question = document.getElementById('question')
const numberOfQuestion = document.getElementById('number-of-question')
const numberOfAllQuestions = document.getElementById('number-of-all-questions')

let indexOfQuestions,
    indexOfPage = 0
const answerTracker = document.getElementById('answer-tracker')
const btnNext = document.getElementById('btn-next')
let score = 0

const correctAnswer = document.getElementById('correct-answer')
const numberOfAllQuestions2 = document.getElementById('number-of-all-questions2')
const btnTryAgain = document.getElementById('btn-try-again')

numberOfAllQuestions.innerHTML = questions.length

const load = () => {
    question.innerHTML = questions[indexOfQuestions].question
    option1.innerHTML = questions[indexOfQuestions].options[0]
    option2.innerHTML = questions[indexOfQuestions].options[1]
    option3.innerHTML = questions[indexOfQuestions].options[2]
    option4.innerHTML = questions[indexOfQuestions].options[3]
    numberOfQuestion.innerHTML = indexOfPage + 1
    indexOfPage++
}

let completedAnswers = []
const randomQuestion = () => {
    let randomNumber = Math.floor(Math.random() * questions.length)
    let hiDuplicate = false
    if (indexOfPage == questions.length) {
        quizOver()
    } else {
        if (completedAnswers.length > 0) {
            completedAnswers.forEach(item => {
                if (item == randomNumber) {
                    hiDuplicate = true
                }
            })
            if (hiDuplicate == true) {
                randomQuestion();
            } else {
                indexOfQuestions = randomNumber
                load()
            }
        }
        if (completedAnswers.length == 0) {
            indexOfQuestions = randomNumber
            load()
        }
    }
    completedAnswers.push(indexOfQuestions)
}

const checkAnswer = (el) => {
    if (el.dataset.id == questions[indexOfQuestions].rightAnswer) {
        el.classList.add('correct')
        updateAnswerTracker('correct')
        score++
    } else {
        el.classList.add('wrong')
        updateAnswerTracker('wrong')
    }
    disableOptions()
}

const disableOptions = () => {
    optionElements.forEach(item => {
        item.classList.add('disabled')
        if (item.dataset.id == questions[indexOfQuestions].rightAnswer) {
            item.classList.add('correct')
        }
    })
}

const enableOptions = () => {
    optionElements.forEach(item => {
        item.classList.remove('disabled', 'correct', 'wrong')
    })
}

const validate = () => {
    if (optionElements[0].classList.contains('disabled')) {
        randomQuestion()
        enableOptions()
    } else {
        alert('Будь ласка, виберіть відповідь!')
    }
}

optionElements.forEach(option => {
    option.addEventListener('click', () => checkAnswer(option))
})

btnNext.addEventListener('click', validate)

const answerTrackerCreator = () => {
    questions.forEach(() => {
        const div = document.createElement('div')
        answerTracker.appendChild(div)
    })
}

const updateAnswerTracker = (status) => {
    answerTracker.children[indexOfPage - 1].classList.add(status)
}

const quizOverModal = document.querySelector('.quiz-over-modal')

const quizOver = () => {
    quizOverModal.classList.add('active')
    correctAnswer.innerHTML = score
    numberOfAllQuestions2.innerHTML = questions.length
}

btnTryAgain.addEventListener('click', () => {
    window.location.reload()
})

window.addEventListener('load', () => {
    randomQuestion()
    answerTrackerCreator()
})