const convertButton = document.getElementById("submitButton");
const resultElement = document.getElementById("result");

convertButton.addEventListener("click", () => {
  const inputSuhu = parseFloat(document.getElementById("userInput").value);
  const fromUnit = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit").value;

  let result;

  if (fromUnit === "C") {
    if (toUnit === "F") {
      result = (inputSuhu * 9/5) + 32;
    } else if (toUnit === "K") {
      result = inputSuhu + 273.15;
    } else {
      result = inputSuhu;
    }
  } else if (fromUnit === "F") {
    if (toUnit === "C") {
      result = (inputSuhu - 32) * 5/9;
    } else if (toUnit === "K") {
      result = (inputSuhu - 32) * 5/9 + 273.15;
    } else {
      result = inputSuhu;
    }
  } else if (fromUnit === "K") {
    if (toUnit === "C") {
      result = inputSuhu - 273.15;
    } else if (toUnit === "F") {
      result = (inputSuhu - 273.15) * 9/5 + 32;
    } else {
      result = inputSuhu;
    }
  }

  console.log(fromUnit)
  console.log(toUnit)

  resultElement.innerText = `${result.toFixed(2)} ${toUnit}`;
});
