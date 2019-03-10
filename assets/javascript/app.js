//Game Variables

var correct = 0;
var incorrect = 0;
var answered = 0;
var questionCount = 0;
var timer = 30;
var running = false;
var userGuess = "";
var intervalID;
var pick;


// var question = ["What object must be caught in order to end a Quidditch match?", "Who delivers baby Harry to Dumbledore in Privet Drive?", "Who is Harry's Godfather?", "How did Harry and Ron get to Hogwarts their second year?", "Which Longdon train station do you stand between platform 9 and 100 to catch the train to Hogwarts?", "What magical plant does Harry use to breathe underwater?", "What color are Harry's eyes?", "Who was Harry's first kiss with?", "Who was Harry's first quidditch match against?", "What monster lives in the Chamber of Secrets?"];
// var answer = ["The Golden Snitch", "Hagrid", "Sirius", "Flying Car", "King's Cross", "Gillyweed", "Green", "Cho Chang", "Slytherin", "Basilisk"];

var questionsOnPage = [
    { question: "What object must be caught in order to end a Quidditch match?",
    wrongChoices: ["wrong 1", "wrong 2", "wrong 3", "The Golden Snitch"],
    answer: 0,
},
{ question: "Who delivers baby Harry to Dumbledore in Privet Drive?",
    wrongChoices: ["wrong 1", "wrong 2", "wrong 3", "Hagrid"],
    answer: 0,
},
    
]

//Game Functions
$("#startButton").on("click", function () {
    $("#startButton").hide();
    // displayQuestion();
    startTime();

})


function gameStart() {

}

function displayQuestion() {
index = Math.floor(Math.random() * questionsOnPage.length);
pick = questionsOnPage[index];

$("#Question").text(pick.question);
var userChoice = $("<div>");
userChoice.addClass("answerChoice");
userChoice.text(pick.wrongChoices[i]);
userChoice.attr(data-guess)
    
}


// function correctAnswer() {

// }

// function incorrectAnswer() {

// }

// function checkAnswer() {
//     if (question[i]:answer[i]) {

//     }
//     else {

//     }
// }

// function timeOut() {
//     if (timer === 0);
// }

// function gameEnd() {
//     if (questionCount === question.length) {

//     }
// }

//Timer Functions
function startTime() {
if (!running) {
    intervalID = setInterval(decrement, 1000);
    ruinning = true;
}
}


function decrement() {
    $("#timer").text(timer);
    timer --;
    console.log(timer);
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