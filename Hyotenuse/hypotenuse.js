const sideInputs = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputDiv = document.querySelector(".output-div");
let flag = 0;

function calculateSumOfSquares(a, b) {
  const sumOfSquares = a * a + b * b;

  return sumOfSquares;
}

function showMsg(msg) {
  outputDiv.innerText = msg;
}

function validate(a, b) {
  if (a == "" || b == "" || a < 1 || b < 1) {
    showMsg("Enter both fields to calulate");
    flag = 1;
  } else {
    flag = 0;
  }
  if (Math.sign(a) === -1 || Math.sign(b) === -1) {
    showMsg("Negative Inputs!!");
    flag = 1;
  }
}

function calculateHypotenuse() {
  const sumOfSquares = calculateSumOfSquares(
    Number(sideInputs[0].value),
    Number(sideInputs[1].value)
  );
  validate(sideInputs[0].value, sideInputs[1].value);

  const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
  const roundedValue = lengthOfHypotenuse.toPrecision(4);
  if (flag === 0) {
    showMsg(`The length of Hypotenuse is ${roundedValue}`);
  }
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse);
