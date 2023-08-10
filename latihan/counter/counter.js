let count = 0;
let intervalId;
let isButtonPressed = false;

document
  .getElementById("kurang")
  .addEventListener("mousedown", function () {
    isButtonPressed = true;
    intervalId = setInterval(function () {
      if (isButtonPressed && count > 0) {
        count--;
        document.getElementById("number").innerHTML = count;
      }
    }, 100);
  });

document.getElementById("kurang").addEventListener("mouseup", function () {
  clearInterval(intervalId);
});

document
  .getElementById("kurang")
  .addEventListener("mouseleave", function () {
    clearInterval(intervalId);
  });

document.getElementById("reset").onclick = function () {
  count = 0;
  document.getElementById("number").innerHTML = count;
};

document.getElementById("tambah").onclick = function () {
  count++;
  document.getElementById("number").innerHTML = count;
};



// let count = 0;

//     document.getElementById("kurang").onclick = function () {
//       if (count > 0) {
//         count--;
//         document.getElementById("number").innerHTML = count;
//       }
//     };
//     document.getElementById("reset").onclick = function () {
//       count = 0;
//       document.getElementById("number").innerHTML = count;
//     };
//     document.getElementById("tambah").onclick = function () {
//       count++;
//       document.getElementById("number").innerHTML = count;
//     };
