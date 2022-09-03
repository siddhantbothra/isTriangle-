let angles = document.querySelectorAll(".angle-input");
let btn = document.querySelector("#checkbtn");
let result = document.querySelector("#result");

function calculateSumOfAngles() {
  const sumOfAngles =
    Number(angles[0].value) + Number(angles[1].value) + Number(angles[2].value);

  return sumOfAngles;
}

function isTriangle() {
  if (calculateSumOfAngles() === 180) {
    result.innerHTML = `<h1>Angles form a triangle</h1>`;
  } else {
    result.innerHTML = `<h1>OOPs!, the angles do not form a triangle</h1>`;
  }
}
btn.addEventListener("click", isTriangle);
