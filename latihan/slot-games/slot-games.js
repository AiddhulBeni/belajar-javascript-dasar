const deposit = () => {
  const depositAmount = Number(document.getElementById("deposit").value);
  const balance = document.getElementById("balance");
  const submitButton = document.getElementById("submitButton");

  submitButton.addEventListener("click", () => {
    if (isNaN(depositAmount) || depositAmount < 0) {
      balance.innerText = "Please enter a positive number";
    } else {
      balance.innerText = depositAmount;
    }
  });
};

deposit();

console.log(deposit());

// const depositButton = document.getElementById("submitButton");
// const saldo = document.getElementById("balance");

// depositButton.addEventListener("click", () => {
//   const depositAmount = Number(document.getElementById("deposit").value);

//   if (isNaN(depositAmount) || depositAmount < 0) {
//     saldo.innerText = "Please enter a positive number";
//   } else {
//     saldo.innerText = depositAmount;
//   }

//   console.log(depositAmount); 
// });


