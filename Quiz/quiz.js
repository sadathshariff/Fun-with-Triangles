const quizForm = document.querySelector(".quiz-form");
const submitAnswerBtn = document.querySelector("#submit-answer-btn");

const outputDiv = document.querySelector(".output-div");

const correctAnswers = [
  "90°",
  "Right angled",
  "Equilateral",
  "a+b+c",
  "one right angle",
  "28",
  "180",
  "hypotenuse",
  "5",
  "Isosceles",
];

function calculateScore() {
  let score = 0;
  let index = 0;
  let formResults = new FormData(quizForm);

  for (let value of formResults.values()) {
    if (value === correctAnswers[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  outputDiv.innerText = `Your Score is ${score}`;
}

submitAnswerBtn.addEventListener("click", calculateScore);
