const phi = Math.PI;

document.getElementById("btnFunction").onclick = function () {
  calculateResult();
};

document
  .getElementById("diameter")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      calculateResult();
    }
  });

function calculateResult() {
  let radius = Number(document.getElementById("diameter").value);
  const result = 2 * radius * phi;

  if (isNaN(radius)) {
    document.getElementById(
      "result"
    ).innerHTML = `<p style="color: red;">Please input valid numbers</p>`;
  } else {
    document.getElementById("result").innerHTML = Math.round(result);
  }
}
