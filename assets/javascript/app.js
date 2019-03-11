//Game Variables

var correct = 0;
var incorrect = 0;
var unanswered = 0;
var questionCount = 0;
var timer = 15;
var running = false;
var userGuess = "";
var intervalID;
var pick;
var holder = [];


// var question = ["What object must be caught in order to end a Quidditch match?", "Who delivers baby Harry to Dumbledore in Privet Drive?", "Who is Harry's Godfather?", "How did Harry and Ron get to Hogwarts their second year?", "Which Longdon train station do you stand between platform 9 and 100 to catch the train to Hogwarts?", "What magical plant does Harry use to breathe underwater?", "What color are Harry's eyes?", "Who was Harry's first kiss with?", "Who was Harry's first quidditch match against?", "What monster lives in the Chamber of Secrets?"];
// var answer = ["The Golden Snitch", "Hagrid", "Sirius", "Flying Car", "King's Cross", "Gillyweed", "Green", "Cho Chang", "Slytherin", "Basilisk"];

var questionsOnPage = [
    {
        question: "What object must be caught in order to end a Quidditch match?",
        choices: ["wrong 1", "wrong 2", "wrong 3", "The Golden Snitch"],
        answer: 3,
    },
    {
        question: "Who delivers baby Harry to Dumbledore in Privet Drive?",
        choices: ["wrong 1", "Hagrid", "wrong 3", "wrong 4"],
        answer: 1,
    },

]

//Game Functions
$("#startButton").on("click", function () {
    $("#startButton").hide();
    startTime();
    displayQuestion();
    for (var i = 0; i < questionsOnPage.length; i++) {
        holder.push(questionsOnPage[i]);
    }

});


function displayQuestion() {
    randomQuestion = Math.floor(Math.random() * questionsOnPage.length);
    pick = questionsOnPage[randomQuestion];

    $("#question").html("<h2>" + pick.question + "</h2>");
    for (var i = 0; i < pick.choices.length; i++) {
    var userChoice = $("<div>");
    userChoice.addClass("answerChoice");
    userChoice.html(pick.choices[i]);
    userChoice.attr("data-guess", i);
    $("#answer").append(userChoice);
    }

$(".answerChoice").on("click", function(){
    userGuess = parseInt($(this).attr("data-guess"));
//correct guess
    if (userGuess === pick.answer) {
        stopTime();
        correct++;
        userGuess = "";
        $("#answer").html("<p>CORRECT! You're helping Harry!</p>")
    } else{
        stop();
        incorrect++;
        userGuess = "";
        $("#answer").html("<p>WRONG! Stop helping Voldemort! Correct Answer is" + pick.choices[pick.answer] + "</p>");
    }

})



};


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
    clearInterval(intervalID);
    if (!running) {
        intervalID = setInterval(decrement, 1000);
        running = true;
    }
}


function stopTime() {
    running = false;
    clearInterval(intervalID);
}

function decrement() {
    $("#timer").text(timer);
    timer--;
    if (timer === -1) {
        stopTime();
    }
}



//Results

function showResults() {

}

function resetResults() {

}