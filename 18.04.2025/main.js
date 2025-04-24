const questions = [{
        question: 'Яка планета найбільша у Сонячній системі?',
        option: [
            'Земля',
            'Юпітер',
            'Сатурн',
            'Марс',
        ],
        rightAnswer: 1
    },
    {
        question: 'Як називається перший штучний супутник Землі?',
        option: [
            'Аполлон-11',
            'Луна-1',
            'Супутник-1',
            'Вояджер-1',
        ],
        rightAnswer: 2
    },
    {
        question: 'Хто був першою людиною в космосі?',
        option: [
            'Юрій Гагарін',
            'Ніл Армстронг',
            'Алан Шепард',
            'Леонов Олексій',
        ],
        rightAnswer: 0
    },
    {
        question: 'Скільки планет у Сонячній системі?',
        option: [
            '8',
            '9',
            '7',
            '10',
        ],
        rightAnswer: 0
    },
    {
        question: 'Яка планета найближча до Сонця?',
        option: [
            'Венера',
            'Марс',
            'Меркурій',
            'Земля',
        ],
        rightAnswer: 2
    }
];

const option1 = document.querySelectorAll(".option1"),
    option2 = document.querySelectorAll(".option2"),
    option3 = document.querySelectorAll(".option3"),
    option4 = document.querySelectorAll(".option4")

const optionElements = document.querySelectorAll(".option")
const question = document.getElementById("question")
const numberOfQuestion = document.getElementById("number-of-question"),
numberOfAllQuestions = document.getElementById("number-of-all-questions")

let indexOfQuestions,
indexOfPage = 0;
const answerTracker = document.getElementById("answer-tracker");
const bntNext = document.getElementById("btn-next");
let score = 0;

const correctAnswer  = document.getElementById("correct-answer"),
numberOfAllQuestions2 = document.getElementById("number-of-all-questions2"),
btnTryAgain = document.getElementById("btn-try-again")

numberOfAllQuestions.innerHTML = questions.length;

const load =()=>{
    question.innerHTML = questions[indexOfQuestions].question;
    option1.innerHTML = questions[indexOfQuestions].options[0];
    option2.innerHTML = questions[indexOfQuestions].options[1];
    option3.innerHTML = questions[indexOfQuestions].options[2];
    option4.innerHTML = questions[indexOfQuestions].options[3];
    numberOfQuestion.innerHTML = indexOfPage +1;
    indexOfPage++
}

let completedAnswers = []
const randomQuestion = ()=>{
    let randomNumber = Math.floor(Math.random() * questions.length)
    let hitDublicate = false;
    if(indexOfPage == questions.length){
        quizOver()
    }else{
        if(completedAnswers.length > 0){
            completedAnswers.forEach(item=>{
                if(item == randomNumber){
                    hitDublicate = true
                }
            })
            if(hitDublicate){
                randomQuestion();
            }else{
                indexOfQuestion = randomNumber;
                load()
            }
        }
        if(completedAnswers.length == 0){
            indexOfQuestion = randomNumber;
            load()
        }
    }
completedAnswers.push(indexOfQuestion)
}

