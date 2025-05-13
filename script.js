
const questions = [
    {
        question: "Which is the largest animal in the world?",
        answer: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false }
        ]
    },
    {
        question: "What is the capital of France?",
        answer: [
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false },
            { text: "Paris", correct: true },
            { text: "Lisbon", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answer: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Venus", correct: false }
        ]
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        answer: [
            { text: "Charles Dickens", correct: false },
            { text: "William Shakespeare", correct: true },
            { text: "Leo Tolstoy", correct: false },
            { text: "Mark Twain", correct: false }
        ]
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        answer: [
            { text: "Oxygen", correct: false },
            { text: "Hydrogen", correct: false },
            { text: "Carbon Dioxide", correct: true },
            { text: "Nitrogen", correct: false }
        ]
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        answer: [
            { text: "India", correct: false },
            { text: "Japan", correct: true },
            { text: "China", correct: false },
            { text: "Thailand", correct: false }
        ]
    },
    {
        question: "What is H2O commonly known as?",
        answer: [
            { text: "Hydrogen Peroxide", correct: false },
            { text: "Salt", correct: false },
            { text: "Water", correct: true },
            { text: "Oxygen", correct: false }
        ]
    },
    {
        question: "Which continent is the largest by area?",
        answer: [
            { text: "Africa", correct: false },
            { text: "Asia", correct: true },
            { text: "Europe", correct: false },
            { text: "North America", correct: false }
        ]
    },
    {
        question: "What is the boiling point of water at sea level?",
        answer: [
            { text: "90°C", correct: false },
            { text: "100°C", correct: true },
            { text: "80°C", correct: false },
            { text: "120°C", correct: false }
        ]
    },
    {
        question: "Who invented the light bulb?",
        answer: [
            { text: "Isaac Newton", correct: false },
            { text: "Albert Einstein", correct: false },
            { text: "Thomas Edison", correct: true },
            { text: "Nikola Tesla", correct: false }
        ]
    },
    {
        question: "Which is the tallest mountain in the world?",
        answer: [
            { text: "K2", correct: false },
            { text: "Mount Everest", correct: true },
            { text: "Kangchenjunga", correct: false },
            { text: "Lhotse", correct: false }
        ]
    },
    {
        question: "What is the largest ocean in the world?",
        answer: [
            { text: "Indian Ocean", correct: false },
            { text: "Atlantic Ocean", correct: false },
            { text: "Arctic Ocean", correct: false },
            { text: "Pacific Ocean", correct: true }
        ]
    },
    {
        question: "Which is the fastest land animal?",
        answer: [
            { text: "Lion", correct: false },
            { text: "Cheetah", correct: true },
            { text: "Horse", correct: false },
            { text: "Tiger", correct: false }
        ]
    },
    {
        question: "How many continents are there on Earth?",
        answer: [
            { text: "5", correct: false },
            { text: "6", correct: false },
            { text: "7", correct: true },
            { text: "8", correct: false }
        ]
    },
    {
        question: "What is the main source of energy for Earth?",
        answer: [
            { text: "The Moon", correct: false },
            { text: "Electricity", correct: false },
            { text: "The Sun", correct: true },
            { text: "Volcanoes", correct: false }
        ]
    },
    {
        question: "Which organ pumps blood through the body?",
        answer: [
            { text: "Liver", correct: false },
            { text: "Heart", correct: true },
            { text: "Brain", correct: false },
            { text: "Kidney", correct: false }
        ]
    },
    {
        question: "Which festival is known as the Festival of Lights?",
        answer: [
            { text: "Christmas", correct: false },
            { text: "Eid", correct: false },
            { text: "Diwali", correct: true },
            { text: "Holi", correct: false }
        ]
    },
    {
        question: "How many players are there in a football team on the field?",
        answer: [
            { text: "9", correct: false },
            { text: "10", correct: false },
            { text: "11", correct: true },
            { text: "12", correct: false }
        ]
    },
    {
        question: "Who is known as the Father of the Nation in India?",
        answer: [
            { text: "Subhash Chandra Bose", correct: false },
            { text: "Mahatma Gandhi", correct: true },
            { text: "Jawaharlal Nehru", correct: false },
            { text: "B. R. Ambedkar", correct: false }
        ]
    },
    {
        question: "Which instrument is used to measure temperature?",
        answer: [
            { text: "Thermometer", correct: true },
            { text: "Barometer", correct: false },
            { text: "Hygrometer", correct: false },
            { text: "Anemometer", correct: false }
        ]
    }
];


// selecting the elements from webpage 
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('btn-next');

// setting the variables 
let currentIndex = 0;
let score = 0;

// the function that starts the execution of program 
const showQuiz = ()=>{
    currentIndex = 0;
    score = 0;
    nextButton.textContent = "Next";
    showQuestion();
}

// questions to show the questions
const showQuestion = ()=>{
    resetState();

    let currentQuestion = questions[currentIndex];
    let questionNo = currentIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answer.forEach(element => {
        const button = document.createElement('button');
        button.innerHTML = element.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);

        if(element.correct){
            button.dataset.correct = element.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

// selecting the answer
const selectAnswer = (e)=>{
    let selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if(isCorrect){
        selectedBtn.classList.add('correct');
        score++;
    }else{
        selectedBtn.classList.add('incorrect');
    }
    Array.from(answerButtons.children).forEach((button)=>{
        if(button.dataset.correct === 'true'){
            button.classList.add('correct');
        };
        button.disabled = true;
    })
    nextButton.style.display = 'block';
}

    nextButton.addEventListener('click',()=>{
    if(currentIndex < questions.length){
        handleNextButton();
    }else{
        showQuiz();
    }
    })


const handleNextButton = ()=>{
    currentIndex++;
    if(currentIndex < questions.length){
        showQuestion()
    }else{
        showScore();
    }
}

const showScore = ()=>{
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Play again!";
    nextButton.style.display = 'block';
}

const resetState = ()=>{
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


showQuiz();