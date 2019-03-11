//Game Variables

var correct = 0;
var incorrect = 0;
var unanswered = 0;
var timer = 15;
var running = false;
var userGuess = "";
var intervalID;
var pick;
var holder = [];
var newArray = [];


// var question = ["What object must be caught in order to end a Quidditch match?", "Who delivers baby Harry to Dumbledore in Privet Drive?", "Who is Harry's Godfather?", "How did Harry and Ron get to Hogwarts their second year?", "Which Longdon train station do you stand between platform 9 and 100 to catch the train to Hogwarts?", "What magical plant does Harry use to breathe underwater?", "What color are Harry's eyes?", "Who was Harry's first kiss with?", "Who was Harry's first quidditch match against?", "What monster lives in the Chamber of Secrets?"];
// var answer = ["The Golden Snitch", "Hagrid", "Sirius", "Flying Car", "King's Cross", "Gillyweed", "Green", "Cho Chang", "Slytherin", "Basilisk"];

var questionsOnPage = [
    {
        question: "What object must be caught in order to end a Quidditch match?",
        choices: ["The Ball", "Harry", "Ron", "The Golden Snitch"],
        answer: 3,
    },
    {
        question: "Who delivers baby Harry to Dumbledore in Privet Drive?",
        choices: ["His Parents", "Hagrid", "Professor Snape", "Ron"],
        answer: 1,
    },
    {
        question: "Who is Harry's Godfather?",
        choices: ["Sirius", "Dumbledore", "Mr. Weasley", "Professor Snape"],
        answer: 0,
    },
    {
        question: "How did Harry and Ron get to Hogwarts their second year?",
        choices: ["Train", "Broomstick", "Teleport", "Flying Car"],
        answer: 3,
    },
    {
        question: "Which Longdon train station do you stand between platform 9 and 10 to catch the train to Hogwarts?",
        choices: ["Grand Central", "King's Cross", "London Euston", "Paddington Station"],
        answer: 1,
    },
    {
        question: "What magical plant does Harry use to breathe underwater?",
        choices: ["Gillyweed", "Mandrake", "Polyjuice Potion", "Snargaluff"],
        answer: 0,
    },
    {
        question: "What color are Harry's eyes?",
        choices: ["Green", "Brown", "Blue", "Red"],
        answer: 0,
    },
    {
        question: "Who was Harry's first kiss with?",
        choices: ["Hermione", "Ginny", "Luna", "Cho Chang"],
        answer: 3,
    },
    {
        question: "Who was Harry's first quidditch match against?",
        choices: ["Slytherin", "Gryffindor", "Hufflepuff", "Ravenclaw"],
        answer: 0,
    },
    {
        question: "What monster lives in the Chamber of Secrets?",
        choices: ["Dementor", "Basilisk", "Goblin", "Pixie"],
        answer: 1,
    },
    
]
var questionCount = questionsOnPage.length;

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

    $(".answerChoice").on("click", function () {
        userGuess = parseInt($(this).attr("data-guess"));
        //correct guess
        stopTime();
        if (userGuess === pick.answer) {
            correct++;
            userGuess = "";
            $("#answer").html("<p> CORRECT! You're helping Harry!</p>")
            page();
        } else {
            // stopTime();
            incorrect++;
            userGuess = "";
            $("#answer").html("<p> WRONG! Stop helping Voldemort! Correct Answer is " + pick.choices[pick.answer] + "</p>");
            page();
        }
        startTime();
    })
};


//to get next question to populate on the page or results page

function page() {
console.log("nextPage function running")
newArray.push(pick);

setTimeout(function () {
    $("#answer").empty();
    timer = 15;
    displayQuestion();

    if ((incorrect + correct + unanswered) === questionCount) {
        console.log("checking page function if else")
        $("#question").empty();
        $("#question").html("<h3> Game Over! </h3>");
        $("#answer").append("<h4> Correct: " + correct + "</h4>");
        $("#answer").append("<h4> Inccorect: " + incorrect + "</h4>");
        $("#answers").append("<h4> Unanswered: " + unanswered + "</h4>");
        $("#reset").show();
        $("#timer").hide();
        correct = 0;
        console.log(correct);
        incorrect = 0;
        console.log(incorrect);
        unanswered = 0;
        console.log(answered);
        runTimer();

    } else {
        runTimer();
        
        
    }
}, 3000);
};

// function noResponse () {
// if 
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