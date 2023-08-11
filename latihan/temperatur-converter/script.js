const userInput = Number(document.getElementById("userInput").value);
const submitButton = document.getElementById("submitButton");
const resultField = document.getElementById("result");



function fromUnit() {
  if(document.getElementById('celciusButton').clicked) {
   const celciusTemp = (userInput * 9/5) + 32;
  }
} 

submitButton.addEventListener("click", () => {
  console.log(fromUnit());
}); 



// function convertTemperature(){
//   const userInput = Number(document.getElementById("userInput").value);
//   let hasil = toCelcius(userInput).toFixed(2);

//   function toCelcius(temp) {
//     fahrenheitToCelcius = ((temp - 32) * 5) / 9;
//     return fahrenheitToCelcius;
//   }

//   function toFahrenheit(temp) {
//     celciusToFahrenheit = (temp * 9) / 5 + 32;
//     return celciusToFahrenheit;
//   }

//   if (isNaN(userInput)) {
//     document.getElementById("result").innerText = "Please enter a number";
//   } else {
//     document.getElementById("result").innerText = hasil;
//   }

//   console.log(toFahrenheit(userInput).toFixed(2));
//   console.log(toCelcius(userInput).toFixed(2)); }
