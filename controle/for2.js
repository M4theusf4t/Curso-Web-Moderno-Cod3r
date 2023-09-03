// Percorrendo os indices de um array
const notas = [6.7, 7.4, 9.8, 8.1, 7.8];

for (let i in notas) {
    console.log(i, notas[i]);
}

// Percorrendo um objeto
const pessoa = {
    nome: "Ana",
    sobrenome: "Silva",
    idade: 29,
    preso: 64
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`);
}

