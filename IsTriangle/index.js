const inputs = document.querySelectorAll(".input-angle");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputDiv = document.querySelector("#output");

function showMessage(msg) {
  outputDiv.innerText = msg;
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

  if (sumOfAngles === 180) {
    showMessage("Yayy Angles formed a Triangle");
  } else {
    showMessage("Ohh, These Angles don't form a Triangle");
  }
}

function validate(angle1, angle2, angle3) {
  if (angle1 == "") {
    alert("Please Fill All the Fields");
  } else if (angle2 == "") {
    alert("please fill all the fields");
  } else if (angle3 == "") {
    alert("please Fill all the fields");
  }
}

isTriangleBtn.addEventListener("click", isTriangle);
