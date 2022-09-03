const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const hypotenuseOutput = document.querySelector("#hypotenuse-output");

function calculateSquare(a, b) {
  let sum = a * a + b * b;
  return sum;
}
function calculateHypotenuse() {
  let a = calculateSquare(Number(sides[0].value), Number(sides[1].value));
  a = Math.sqrt(a);
  hypotenuseOutput.innerText = `Your hypotenus is ${a}`;
}
hypotenuseBtn.addEventListener("click", calculateHypotenuse);
