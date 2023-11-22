// script.js

const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris"
    },    
  {
    question: "Which one of these is a JavaScript package manager?",
    answers: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "c"
  },
    // Add more questions as needed
];

const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result');

function buildQuiz() {
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.innerHTML = `<p class="question">${index + 1}. ${q.question}</p>`;

        const optionsList = document.createElement('ul');
        optionsList.className = 'options';

        q.options.forEach((option, i) => {
            const listItem = document.createElement('li');
            listItem.className = 'option';
            listItem.innerHTML = `<input type="radio" name="question${index}" value="${option}" id="q${index}o${i}">
                                  <label for="q${index}o${i}">${option}</label>`;
            optionsList.appendChild(listItem);
        });

        questionDiv.appendChild(optionsList);
        quizContainer.appendChild(questionDiv);
    });
}

function showResult() {
    let score = 0;
    questions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption) {
            const userAnswer = selectedOption.value;
            if (userAnswer === q.correctAnswer) {
                score++;
            }
        }
    });

    resultContainer.innerHTML = `Your score: ${score} out of ${questions.length}`;
}

buildQuiz();
