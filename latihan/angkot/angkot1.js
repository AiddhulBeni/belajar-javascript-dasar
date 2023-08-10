let jmlAngkot = 10;
let angkotBeroperasi = 5;
let angkot = 1;
// while(angkot <= jmlAngkot) {
//     document.writeln(`<p>Angkot No.${angkot} beroperasi dengan baik.</p>`);
// angkot++;

// }

for (let i = angkot; i <= jmlAngkot; i++) {
  if (i <= angkotBeroperasi) {
    document.writeln(`<p>Angkot No.${i} beroperasi dengan baik.</p>`);
  } else if (i > angkotBeroperasi) {
    document.writeln(`<p>Angkot No.${i} sedang tidak beroperasi.</p>`);
  } else {
    document.writeln("Bukan angkot saya:)");
  }
}
