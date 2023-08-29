// Novo recurso do ES2015

const pessoa = {
    nome: "Ana",
    idade: 10,
    endereco: {
        logradouro: "Rua BH06",
        numero: 17
    }
}

const {nome, idade} = pessoa;
console.log(nome, idade);

let {nome: n, idade: i} = pessoa; // Alem de acessar também e possivel alterar
console.log(n, i);               // o nome da variável

const {sobrenome, bemHumorada = null} = pessoa;
console.log(sobrenome, bemHumorada);

const {endereco: {logradouro, numero, cep}} = pessoa;
console.log(logradouro, numero, cep);

// let {conta: {ag, num}} = pessoa;   // O ultimo caminho deve está setado
// console.log(ag, num);              // caso contrario dará erro!


