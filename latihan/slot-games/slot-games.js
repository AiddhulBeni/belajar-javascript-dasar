const deposit = () => {
  const balance = document.getElementById("balance");
  const submitButton = document.getElementById("submitButton");

  submitButton.addEventListener("click", () => {
    const depositAmount = Number(document.getElementById("deposit").value);

    if (isNaN(depositAmount) || depositAmount < 0) {
      balance.innerText = "Please enter a valid number";
    } else {
      balance.innerText = depositAmount;
    }
    return depositAmount;
  });

};

deposit();
console.log(deposit());

const numberOfLines = () => {
  const numberOfLines = document.getElementById()
}
