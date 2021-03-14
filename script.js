const startDiv = document.getElementById("start-holder");
const startBtn = document.getElementById("start-quiz-btn")
const quizHolder = document.getElementById("quiz-holder")
const questionText = documnet.getElementById("quiestion-text")
const questionChoices = document.getElementById("choices-holder")
const timerEl = document.getElementById(id="timer") 





const questions = [
    {
        question: 'Arrays in Javascript can be used to store______',
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        question: 'The condition in an if/else statement is enclosed within ______ ',
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: 'parentheses'
    },
    {
        question: 'Commonly used data types DO NOT include:',
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: 'alerts'
    },
    {
        question: 'String values must be enclosed within _____ when being assigned to variables',
        choices: ["commas", "curly brackets", "quotes", "parentheses"], 
        answer: 'quotes'
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        answer: 'console.log'
    },
]


//Function to start game, include timer functionalilty
function startGame(){

}

function MyTimer(callback, val) {
    val = val || 60; 
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


//Create function to get the question objects from array
function getQuestion(){

}


//Function to decrement timer for incorrect answers



//Save high score and users initials