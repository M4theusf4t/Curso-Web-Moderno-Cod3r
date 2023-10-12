console.log(soma(3, 4));

// Function declaration (interpretador carrega primeiro)
function soma(x, y) {
    return x + y;
}

// Arrow function
divisao = (x, y) => x / y;
console.log(divisao(3, 4));

// Function expression
const sub = function (x, y) {
    return x - y;
}
console.log(sub(3, 4));

// Named function expression (pouco usada)
const mult = function mult(x, y) {
    return x * y;
}
console.log(mult(3, 4));
