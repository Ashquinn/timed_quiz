const startDiv = document.getElementById("start-holder");
const startBtn = document.getElementById("start-quiz-btn")
const quizHolder = document.getElementById("quiz-holder")
const questionText = document.getElementById("question-text")
const questionChoicesDiv = document.getElementById("choices-holder")
const timerEl = document.getElementById(id="timer") 





const questions = [
    {
        question: 'Arrays in Javascript can be used to store______',
        choices: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        answer: "4. all of the above"
    },
    {
        question: 'The condition in an if/else statement is enclosed within ______ ',
        choices: ["1. quotes", "2. urly brackets", "3. parentheses", "4. square brackets"],
        answer: '3. parentheses'
    },
    {
        question: 'Commonly used data types DO NOT include:',
        choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        answer: '3. alerts'
    },
    {
        question: 'String values must be enclosed within _____ when being assigned to variables',
        choices: ["1. commas", "2. curly brackets", "3. quotes", ".4 parentheses"], 
        answer: '3. quotes'
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        choices: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"],
        answer: '4. console.log'
    },
]

startBtn.addEventListener("click", function(start) {
    start.preventDefault();
    quizHolder.setAttribute("style", "display:block")
    startDiv.setAttribute("style", "display:none")

});

function MyTimer(callback, val) {
    val = val || 90; 
    let timer=setInterval(function() { 
        callback(val);
        if(val-- <= 0) { 
            clearInterval(timer); 
        } 
    }, 1000);
}
new MyTimer(function(val) {
    let timerMsg = "00:" + (val >= 10 ? val : "0" + val);
    document.getElementById("timer").textContent = timerMsg; 
});

// //Create function to get the question objects from array
function getQuestion(idx){
    let currentQuestion = questions[idx].question;

    let questionChoices = questions[idx].choices;

    questionText.textContent = currentQuestion;

    questionChoices.forEach(function(el) {

        const choicesLine = document.createElement("button");
        
        choicesLine.textContent = el;

        questionChoicesDiv.appendChild(choicesLine)
    

    })
}

getQuestion(0)


//If (users click value === answer) then {assign points && move to next question}
//Else {{move to next question  && subtract time}}

//Function to decrement timer for incorrect answers

//Save high score and users initials