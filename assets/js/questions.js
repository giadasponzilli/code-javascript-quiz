// Set of questions --> array of objects
// Each question needs the following:
  // Question text
  // Set of answers
  // Which answer is correct

let questions = [
    {
        question: "Commonly used data types DO NOT include:",
        answer: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        correctAnswer: 2,
    },
    {
        question: "The condition in an if / else statement is enclosed within ____ .",
        answer: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
        correctAnswer: 2,
    },
    {
        question: "Arrays in JavaScript can be used to store ____ .",
        answer: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        correctAnswer: 3,
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables",
        answer: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
        correctAnswer: 2,
    },
    {
        question: "A very useful tool used during development and the bugging for printing content to the bugger is:",
        answer: ["1. JavaScript", "2. terminal / bash", "3. for loops", "4. console log"],
        correctAnswer: 3,
    },
]

// Landing page:
  // Explanation of the quiz
  // Start button

let timeLeftDisplay = document.querySelector("#time");
let landingPage = document.querySelector("#start-screen");
let startButton = document.querySelector("#start");
let questionsSection = document.querySelector("#questions");
let questionTitle = document.querySelector("#question-title");
let choicesSection = document.querySelector("#choices");


// Click the start button:
  // Landing page goes away
  // Timer starts
  // The first question appears (with its answers)

let timeLeft = 60;
let timer;

startButton.addEventListener("click", startQuiz)

function startQuiz () {
    
    landingPage.style.display = "none"
    questionsSection.style.display = "block"
    
    timer = setInterval(function() {
        timeLeft--;
        timeDisplay.textContent = timeLeft;
        if (timeLeft <= 0) {
            endQuiz();
        }
    }, 1000);
    
    questionsStart();
}

// For each question:
  // User clicks an answer
  // Their choice is compared to the correct answer as stored in the question's object
  // If correct, tell them
  // If incorrect, tell them AND subtract time from the timer
  // Optional: play a sound for correct or incorrect
  // Either way, the question disappears after a few seconds and the next question appears

function questionsStart() {

    const questionEl = questions[questionEl.Index];
    questionTitle.textContent = questionEl.question; 

    choicesSection.innerHTML = "";

    questionEl.answer.forEach(function (answer, index) {
        let answersButton = document.createElement("button");
        answersButton.textContent = answer;
        
        answersButton.addEventListener("click", function() {
            if (index = questionEl.correctAnswer) {
                feedbackMessage("Correct!");
            } else {
                feedbackMessage("Wrong!");
                timeLeft - 10;
            }

        
        }
        )
    });

}


function feedbackMessage(text){
    let feedbackText = document.querySelector("#feedback");
    feedbackText.textContent = text
    feedbackText.style.display = "block"
}




// After the last question:
  // Timer stops
  // Question disappears
  // Form appears for user to enter their initials
  // Display their score

// User submits form
  // Initials and score get stored in local storage
  // User is taken to the high scores page
  // High scores are listed, sorted highest to lowest
  // User has option to take the quiz again