//anonymous function dalam variable

let say = function (name) {
  console.log(name);
};
say("Abdul");

//anonymous function dalam parameter

function giveName(callback)/*document.writeln(....)*/  {
  callback("Beni", "Justin");
}

giveName(function (name, other)/*"Beni, "Justin"*/ {
  document.writeln(`<p>Hello bang ${name} and ${other}</p>`);
});