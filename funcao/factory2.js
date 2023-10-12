// Desafio, criar uma factory para criar produtos com diferentes nomes ou preços

// Minha versão do codigo kk
function criarProduto(nome, preco) {
    return {
        nome: nome,
        preco: preco,
        desconto: 20
    }
}

console.log(criarProduto("Carro", 40000));

// Resolução do exercicio
function criarProduto1(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto1("Notebook", 2199.90));
console.log(criarProduto1("Ipad", 1199.90));

/* Como já tinha colocado como atributo
não precisava repetilo novamente dentro
do return da fun */