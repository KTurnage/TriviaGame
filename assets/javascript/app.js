//Game Variables

var correct = 0;
var incorrect = 0;
var answered = 0;
var questionCount = 0;
var timer = 0;

var question = ["What object must be caught in order to end a Quidditch match?", "Who delivers baby Harry to Dumbledore in Privet Drive?", "Who is Harry's Godfather?", "How did Harry and Ron get to Hogwarts their second year?", "Which Longdon train station do you stand between platform 9 and 100 to catch the train to Hogwarts?", "What magical plant does Harry use to breathe underwater?", "What color are Harry's eyes?", "Who was Harry's first kiss with?", "Who was Harry's first quidditch match against?", "What monster lives in the Chamber of Secrets?"];
var answer = ["The Golden Snitch", "Hagrid", "Sirius", "Flying Car", "King's Cross", "Gillyweed", "Green", "Cho Chang", "Slytherin", "Basilisk"];

var keyValue = [{question[i]: answer[i]}];

var choice1 = [];
var choice2 = [];
var choice3 = [];
var choice4 = [];

//Game Functions
$(document).ready(function() {
    $("#click").on("clic", function() {
        alert("I've been clicked!");
    })
});

function gameStart() {

}

function displayQuestion() {

}

function correctAnswer() {

}

function incorrectAnswer() {

}

function checkAnswer() {
    if (question[i]:answer[i]) {

    }
    else {

    }
}

function timeOut() {
    if (timer === 0);
}

function gameEnd() {
    if (questionCount === question.length) {

    }
}

//Timer Functions

function showTimer() {

}

function startTime() {

}

function stopTime() {

}

function resetTime() {

}

//Results

function showResults() {

}

function resetResults() {

}