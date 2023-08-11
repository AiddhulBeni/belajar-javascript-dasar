    function factorial(value) {
        let result = 1;
        for(let i = 1; i <= value; i++) {
            result*= i;
        }
        return result;
    }

const value = prompt("Input a number")
console.log(factorial(Number(value)));

//recursive function

function factorialRecursive(value) {
    if(value === 1){
        return 1;
    } else {
        return value * factorialRecursive(value - 1);
    }
}

console.log(factorialRecursive(Number(value)));
