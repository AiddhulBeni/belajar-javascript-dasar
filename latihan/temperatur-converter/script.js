const submitButton = document.getElementById("submitButton");
const finalResult = document.getElementById("result");

submitButton.addEventListener("click", () => {
  const userInput = parseFloat(document.getElementById("userInput").value);
  const fromUnit = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit").value;
  let result;

  function fromCelcius(temp) {
    
    if (fromUnit === "C") {
      if (toUnit === "F") {
        result = (temp * 9) / 5 + 32;
      } else if (toUnit === "K") {
        result = temp + 273.15;
        
      } else {
        return result = temp;
      }
    }
    return result;
  }

  function fromFahrenheit(temp) {
    if(fromUnit === "F"){
      if(toUnit === "C"){
        result = (temp - 32) * 5/9; 
      }else if(toUnit === "K") {
        result = (temp - 32) * 5/9 + 273.15;
      }else{
        return result = temp;
      }
    }
    return result;
  }

  function fromKelvin(temp) {
    if(fromUnit === "K") {
      if(toUnit === "C"){
        result = temp - 273.15; 
      }else if(toUnit === "F"){
        result = (temp - 273.15) * 9/5 + 32; 
      }else{
        return result = temp;
      }
    }
    return result;
  }
  fromCelcius(userInput);
  fromFahrenheit(userInput);
  fromKelvin(userInput);

  if(isNaN(userInput) || userInput === undefined){
    finalResult.innerText = "Please enter a number";
  }else(
    finalResult.innerText = `${result}\u00B0${toUnit}`
  )
});
