function* generateName() {
    yield "Aiddhul";
    yield "Beni";
    yield "Putra";
}

const names = generateName();
for(let name of names) {
    console.log(name);
}

//kompleks function generator(membuat generator angka ganjil)
function* buatGanjil(value) {
    for(let i = 1; i <= value; i++) {
        if(i % 2 === 1){
            yield i;
        }
    }
}

const ganjil = buatGanjil(100);
for(angkaGanjil of ganjil){
    console.log(angkaGanjil);
}


