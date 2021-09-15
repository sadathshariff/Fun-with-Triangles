const inputs = document.querySelectorAll(".input-angle");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputDiv = document.querySelector("#output");
let flag = 0;

function showMessage(msg) {
  outputDiv.innerText = msg;
}
function validate(angle1, angle2, angle3) {
  if (angle1 == 0 || angle1 < 0) {
    console.log(angle1);
    showMessage("Please Fill All the Fields");
    flag = 1;
  } else if (angle2 == 0 || angle2 < 0) {
    showMessage("please fill all the fields");
    flag = 1;
  } else if (angle3 == 0 || angle3 < 0) {
    showMessage("please Fill all the fields");
    flag = 1;
  } else {
    flag = 0;
  }
}

function calculateSumOfAngles(angle1, angle2, angle3) {
  const sumOfAngles = angle1 + angle2 + angle3;
  validate(angle1, angle2, angle3);
  return sumOfAngles;
}

function isTriangle() {
  const sumOfAngles = calculateSumOfAngles(
    Number(inputs[0].value),
    Number(inputs[1].value),
    Number(inputs[2].value)
  );

  if (flag == 0) {
    if (sumOfAngles === 180) {
      showMessage("Yayy Angles formed a Triangle");
    } else {
      showMessage("Ohh, These Angles don't form a Triangle");
    }
  }
}

isTriangleBtn.addEventListener("click", isTriangle);
