const readlineSync = require("readline-sync");

// Function to ask a quiz question and returns a new user score that is incremented for correct answer
function askQuestion(questionObj, userScore) {
  // Ask the question & get user answer
  let answer = readlineSync.question(questionObj.question);
  // Check user input checkAnswer(answer, questionObj.correctAnswer)
  let userAnswer = checkAnswer(answer, questionObj.correctAnswer);
  // if checkAnswer(answer, questionObj.correctAnswer)
  // Returns score
  if (userAnswer) {
    // true userScore += 1
    return (userScore += 1);
  } else {
    // false userScore
    return userScore;
  }
}

// Function to check the user's answer. Allow answer to ignore casing of correct answer. return a boolean
function checkAnswer(userAnswer, correctAnswer) {
  if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
    // return true
    return true;
  } else {
    // return false
    return false;
  }

  // Ternary
  return userAnswer.toLowerCase() === correctAnswer.toLowerCase()
    ? true
    : false;
}

// Function to run the quiz
function runQuiz(quizQuestions) {
  let userScore = 0;

  // for/of or for loop to iterate question objects
  for (const question of quizQuestions) {
    // Run askQuestion(quizQuestion, userScore)
    // store return in variable (newScore)
    userScore = askQuestion(question, userScore);
  }

  // Display final score
  console.log(
    "Quiz complete! Your score: " +
      userScore +
      " out of " +
      quizQuestions.length
  );
}

module.exports = { askQuestion, checkAnswer, runQuiz };
