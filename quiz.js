const readlineSync = require("readline-sync");

// Function to ask a quiz question and returns a new user score that is incremented for correct answer
function askQuestion(questionObj, userScore) {
  // Ask the question & get user answer
  // let answer = readlineSync.question(questionObj.question);
  // Check user input checkAnswer(answer, questionObj.correctAnswer)
  // if checkAnswer(answer, questionObj.correctAnswer)
  // true userScore += 1
  // false userScore
  // Returns score
}

// Function to check the user's answer. Allow answer to ignore casing of correct answer. return a boolean
function checkAnswer(userAnswer, correctAnswer) {
  // if (userAnswer.toLowerCase() === correctAnswer.toLowerCase())
  // return true
  // return false
}

// Function to run the quiz
function runQuiz(quizQuestions) {
  let userScore = 0;

  // for/of or for loop to iterate question objects
  // Run askQuestion(quizQuestion, userScore)
  // store return in variable (newScore)

  // Display final score
  console.log(
    "Quiz complete! Your score: " +
      userScore +
      " out of " +
      quizQuestions.length
  );
}

module.exports = { askQuestion, checkAnswer, runQuiz };
