//operasi string dengan number

const a = "2";
const b = 2;
const hasil = a + b;

document.writeln(`<p> ${hasil}</p>`)

//konversi bilangan bulat (parseInt)

const value1 = parseInt("1");
const value2 = 2;
const result = value1 + value2;

document.writeln(`<p> ${result}</p>`)


//konversi bilangan pecahan (parseFloat)

document.writeln(`<p> ${parseFloat("1.6")}</p>`)


//konversi bilangan pecahan & bulat (Number) namun harus number jika tidak maka akan keluar NaN(Not a Number)

document.writeln(`<p> ${Number("1.6")}</p>`)

//Nan
document.writeln(`<p> ${Number("ben1.6")}</p>`)

//operasi NaN

const first = Number("kata");
const total = first + 100;
document.writeln(`<p> ${total}</p>`)//hasilnya NaN

// isNaN() Function to check if a number is

document.writeln(`<p> ${isNaN(first)}</p>`)
document.writeln(`<p> ${isNaN(100)}</p>`)