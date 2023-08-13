const userInput = Number(document.getElementById("userInput").value);
const fromUnit = document.getElementById("fromUnit").value;
const toUnit = document.getElementById("toUnit").value;
const submitButton = document.getElementById("submitButton");
const result = document.getElementById("result");
//const userInput = 10

function fromCelcius(temp) {
  if (fromUnit === "C") {
    if (toUnit === "F") {
      celcius = (temp * 9) / 5 + 32;
    } else if (toUnit === "K") {
      celcius = temp + 273.15;
    } else {
      return temp;
    }
  }
  return celcius;
}

console.log(fromCelcius(userInput));
console.log(fromUnit)
console.log(toUnit)

submitButton.addEventListener("click", function () {
  console.log(fromCelcius(userInput));
  result.innerText = userInput;
  
});
