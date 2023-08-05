//function sebagai value, function bisa dibungkus dengan sebuah variable sehingga sebuah function dapat dipanggil dengan nama variable yang membungkusnya 
function sayHello(name) {
    document.writeln(`<p>Hello ${name}</p>`)
}

sayHello("Beni");

const say = sayHello;

say("Aiddhul")

//function di dalam Parameter

let userName = prompt("Enter your name");

function giveName(name) {
    name(userName);
}

//giveName(sayHello);
giveName(say);
