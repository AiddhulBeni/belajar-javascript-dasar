function createAdder(value) {
    const owner = "Aiddhul"

    function add(param){
        console.log(owner)
        return value + param;
    }
    return add;
}

const addTwo = createAdder(2)

console.log(addTwo(4))
console.log(addTwo)