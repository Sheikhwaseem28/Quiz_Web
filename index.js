/*const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter", "Mercury"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the largest mammal?",
        options: ["Elephant", "Whale", "Giraffe", "Hippopotamus"],
        correctAnswer: "Whale"
    }
];

let currentQuestion = 0;
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const feedbackElement = document.getElementById('feedback');
const submitButton = document.getElementById('submitBtn');

function loadQuestion() {
    const currentQ = questions[currentQuestion];
    questionElement.textContent = currentQ.question;
    
    optionsElement.innerHTML = '';
    currentQ.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(option));
        optionsElement.appendChild(button);
    });
}

function checkAnswer(answer) {
    const currentQ = questions[currentQuestion];
    if (answer === currentQ.correctAnswer) {
        feedbackElement.textContent = "Correct!";
    } else {
        feedbackElement.textContent = "Incorrect. The correct answer is: " + currentQ.correctAnswer;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        questionElement.textContent = '';
        optionsElement.innerHTML = '';
        submitButton.style.display = 'none';
    }
}

loadQuestion();*/

const quizData = [
    {
        question: 'Question 1?',
        answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correct: 0
    },
    {
        question: 'Question 2?',
        answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correct: 1
    },
    {
        question: 'Question 3?',
        answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correct: 2
    }
];

let currentQuestion = 0;
let score = 0;
const quizContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answers');
const resultElement = document.getElementById('result');
const nextButton = document.getElementById('next-btn');
const timerElement = document.getElementById('timer');
const timePerQuestion = 15; // in seconds

function startQuiz() {
    shuffleQuestions();
    showQuestion();
    startTimer();
}

function showQuestion() {
    const currentQuiz = quizData[currentQuestion];
    questionElement.innerText = currentQuiz.question;
    answerButtons.innerHTML = '';
    currentQuiz.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.classList.add('btn');
        button.addEventListener('click', () => {
            checkAnswer(index);
        });
        answerButtons.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const currentQuiz = quizData[currentQuestion];
    if (selectedIndex === currentQuiz.correct) {
        score++;
        resultElement.innerText = 'Correct!';
    } else {
        resultElement.innerText = 'Wrong!';
    }
    nextButton.disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        showQuestion();
        resultElement.innerText = '';
        nextButton.disabled = true;
    } else {
        endQuiz();
    }
}

function endQuiz() {
    clearInterval(timerInterval);
    quizContainer.innerHTML = <h2>Your Score: ${score}/${quizData.length}</h2>;
}

function shuffleQuestions() {
    for (let i = quizData.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [quizData[i], quizData[j]] = [quizData[j], quizData[i]];
    }
}

let timerInterval;
function startTimer() {
    let timeLeft = timePerQuestion;
    updateTimerDisplay(timeLeft);
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay(timeLeft);
        if (timeLeft === 0) {
            clearInterval(timerInterval);
            nextQuestion();
        }
    }, 1000);
}

function updateTimerDisplay(timeLeft) {
    timerElement.innerText = "time Left :",+timeLeft,"seconds";
}

startQuiz();
