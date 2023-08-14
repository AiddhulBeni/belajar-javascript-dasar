const person = {
    name : "Abdul",
    sayHello : function(name) {
        console.log(person)
        console.log(`Helloo ${name}`)//name = "Beni" dari parameter
        console.log(this.name);//name = "abdul" dari atribut 
    }
}

person.sayHello("Beni")