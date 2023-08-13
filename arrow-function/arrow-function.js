const sayHello = (name) => {
    console.log(`Hallo bang ${name}`);
}

sayHello("Beni");  

//arrow function sebagai parameter
function giveMeName(callback) {
    callback("Beni");
}

giveMeName((name) => {
    console.log(`Hallo bang ${name}`);
});