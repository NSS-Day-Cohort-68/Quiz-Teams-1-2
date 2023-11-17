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

// Write a function to handle the randomize
const randomQuestions = (quizQuestions) => {
  // Create a new array to store the randomized question objects
  const randomArray = [];

  // create a loop to to get each random object
  while (randomArray.length < 5) {
    // Math.floor(random) * quizQuestions.length
    const randomIndex = Math.floor(Math.random() * quizQuestions.length);
    // Check for duplicates
    if (!randomArray.includes(quizQuestions[randomIndex])) {
      // Push objects into array
      randomArray.push(quizQuestions[randomIndex]);
    }

    // AnotherWay
    // const randomQuestion = quizQuestions[randomIndex]
    // randomArray.push(randomQuestion)
  }
  // return newArray
  return randomArray;
};

// Function to run the quiz
function runQuiz(quizQuestions) {
  let userScore = 0;

  // Pass newArray as argument instead of original array
  const newQuizQuestions = randomQuestions(quizQuestions);

  // for/of or for loop to iterate question objects
  for (const question of newQuizQuestions) {
    // Run askQuestion(quizQuestion, userScore)
    // store return in variable (newScore)
    userScore = askQuestion(question, userScore);
  }

  // Display final score
  console.log(
    "Quiz complete! Your score: " +
      userScore +
      " out of " +
      newQuizQuestions.length
  );
}

module.exports = { askQuestion, checkAnswer, runQuiz };
