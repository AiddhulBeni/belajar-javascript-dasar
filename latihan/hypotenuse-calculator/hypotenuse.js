document.getElementById("btnFunction").onclick = function () {
    let A = Number(document.getElementById("inputSideA").value);
    let B = Number(document.getElementById("inputSideB").value);

    let C = Math.sqrt(Math.pow(A, 2) + Math.pow(B, 2));

    if (isNaN(A) || isNaN(B)) {
      document.getElementById("resultC").innerHTML =`<p style="color: red;">Please input valid numbers</p>`;
    } else {
      document.getElementById("resultC").innerHTML = `Side C = ${Math.round(C)}`;
    }
  };