let nama = ["Beni", "Jordan", "Munir", "Joko"];
for (let personName of nama) {
  document.writeln(`<p>${personName}. </p>`);
}

function startProgram(){
  let name = "Beni";
  let age = 18;

  happyBirthday(name, age);
}  

function happyBirthday(a, b) {
  console.log("Happy birthday to you");
  console.log("Happy birthday to you");
  console.log("Happy birthday", a);
  console.log("Happy birthday to you");
  console.log("You are", b, "years old.");
}

startProgram();
