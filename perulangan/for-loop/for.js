let counter = 1;

for (; counter <= 5; ) {
  document.writeln(`<p>${counter}. Beni</p>`);
  counter++;
}

document.writeln("<br>");
document.writeln("For :");
document.writeln("<br>");

for (let counter = 1; counter <= 2; counter++) {

}

/*for(let counter = 1(inisialisasi);counter <= 10(kondisi);counter++(pernyataan){
    document.writeln(`<p>${counter}. Beni</p>`);
};*/

// for (let i = 1; i <= 5; i++) {
//   document.writeln(`<p>Perulangan ke-${i}</p>`);
// }

const clasmateNames = ["Abdul", "Beni", "Putra", "Jaran", "Kembang"];
for (let a = 0; a < clasmateNames.length; a++) {
  document.writeln(`<p>${clasmateNames[a]}</p>`);
}
