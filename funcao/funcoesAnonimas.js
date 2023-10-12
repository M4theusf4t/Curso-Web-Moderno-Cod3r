const soma = function (x, y) {
    return x + y;
}

const imprimirRultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b));
}

imprimirRultado(3, 4);
imprimirRultado(3, 4, soma);
imprimirRultado(3, 4, function (x, y){
    return x - y;
})
imprimirRultado(3, 4, (x, y) => x * y);

const pessoa = {
    falar: function () {
        console.log("Opa");
    }
}

pessoa.falar();
