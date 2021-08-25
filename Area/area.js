// const base = document.querySelector(".base-side");
// const height = document.querySelector(".height-side");
const inputs = document.querySelectorAll(".inputs");
const submitAreaBtn = document.querySelector("#submit-area");
const outputDiv = document.querySelector("#output-div");

function calculateArea(base, height) {
  return (1 / 2) * base * height;
}
function areaOfTriangle() {
  const calcArea = calculateArea(
    Number(inputs[0].value),
    Number(inputs[1].value)
  );
  outputDiv.innerText = `The Area of Triangle is ${calcArea}cm²`;
}

submitAreaBtn.addEventListener("click", areaOfTriangle);
