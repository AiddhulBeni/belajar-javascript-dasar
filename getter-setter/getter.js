const person = {
    firstName : "Beni",
    lastName : "Putra",
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(person.fullName);