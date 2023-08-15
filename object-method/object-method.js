//object methods
const person = {
  name: "Beni",
  sayHello: function (name) {
    console.log(`Hallo ${name}`);
  },
};

person.sayHello(person.name);

//menambah function didalam method

const sayName = {
  name: "Abdul",
};

sayName.sayHello = function () {
  console.log(`Hello ${sayName.name}`);
};

console.table(sayName);
console.log(sayName)

sayName.sayHello();
