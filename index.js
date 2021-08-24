const inputs = document.querySelectorAll(".input-angle");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputDiv = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3) {
  const sumOfAngles = angle1 + angle2 + angle3;
  return sumOfAngles;
}

function isTriangle() {
  const sumOfAngles = calculateSumOfAngles(
    Number(inputs[0].value),
    Number(inputs[1].value),
    Number(inputs[2].value)
  );
  if (sumOfAngles === 180) {
    outputDiv.innerText = "Yayy Angles formed a Triangle";
  } else {
    outputDiv.innerText = "Ohh Angles don't form a Triangle";
  }
}

isTriangleBtn.addEventListener("click", isTriangle);
