// Set of questions --> array of objects
// Each question needs the following:
  // Question text
  // Set of answers
  // Which answer is correct

let questions = [
    {
        question1: "Commonly used data types DO NOT include:",
        answers1: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        correctAnswer1: 2,
    },
    {
        question2: "The condition in an if / else statement is enclosed within ____ .",
        answers2: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
        correctAnswer2: 2,
    },
    {
        question3: "Arrays in JavaScript can be used to store ____ .",
        answers3: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        correctAnswer3: 3,
    },
    {
        question4: "String values must be enclosed within ____ when being assigned to variables",
        answers4: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
        correctAnswer4: 2,
    },
    {
        question5: "A very useful tool used during development and the bugging for printing content to the bugger is:",
        answers5: ["1. JavaScript", "2. terminal / bash", "3. for loops", "4. console log"],
        correctAnswer5: 3,
    },
]

// Landing page:
  // Explanation of the quiz
  // Start button

// Click the start button:
  // Landing page goes away
  // Timer starts
  // The first question appears (with its answers)

// For each question:
  // User clicks an answer
  // Their choice is compared to the correct answer as stored in the question's object
  // If correct, tell them
  // If incorrect, tell them AND subtract time from the timer
  // Optional: play a sound for correct or incorrect
  // Either way, the question disappears after a few seconds and the next question appears

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