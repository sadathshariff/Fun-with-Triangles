// const base = document.querySelector(".base-side");
// const height = document.querySelector(".height-side");
const inputs = document.querySelectorAll(".inputs");
const submitAreaBtn = document.querySelector("#submit-area");
const outputDiv = document.querySelector("#output-div");

let flag = 0;

function validate(base, height) {
  if (base == "" || base < 1) {
    outputDiv.innerText = "Please Fill all the Fields";
    flag = 1;
  } else if (height == "" || height < 1) {
    outputDiv.innerText = "Please Fill all the Fields";
    flag = 1;
  } else {
    flag = 0;
  }
}

function calculateArea(base, height) {
  return (1 / 2) * base * height;
}
function areaOfTriangle() {
  const calcArea = calculateArea(
    Number(inputs[0].value),
    Number(inputs[1].value)
  );
  validate(inputs[0].value, inputs[1].value);

  if (flag === 0) {
    outputDiv.innerText = `The Area of Triangle is ${calcArea}cm²`;
  }
}

submitAreaBtn.addEventListener("click", areaOfTriangle);
