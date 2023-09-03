function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let numberRandom = 0;

do {
    numberRandom = getInteiroAleatorioEntre(-1, 10);
    console.log(`Número escolhido foi ${numberRandom}.`);
    //console.log("Número escolhido foi " + numberRandom + ".");
} while (numberRandom != -1) 

console.log("Até a proxima!")