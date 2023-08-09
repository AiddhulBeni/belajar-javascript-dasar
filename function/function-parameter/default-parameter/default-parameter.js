function defaultParameter(names, ages = "Unknown") {
    console.log("Nama : ", names);
    console.log("Umur : ", ages)
}

let userName = window.prompt("Enter your name ")
let userAge = window.prompt("Enter your age ")


defaultParameter(userName, userAge);