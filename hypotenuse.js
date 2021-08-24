const sideInputs = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputDiv = document.querySelector(".output-div");

function calculateSumOfSquares(a, b) {
  const sumOfSquares = a * a + b * b;
  return sumOfSquares;
}

function calculateHypotenuse() {
  const sumOfSquares = calculateSumOfSquares(
    Number(sideInputs[0].value),
    Number(sideInputs[1].value)
  );
  const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
  const roundedValue = lengthOfHypotenuse.toPrecision(4);
  outputDiv.innerText = `The length of Hypotenuse is ${roundedValue}`;
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse);
