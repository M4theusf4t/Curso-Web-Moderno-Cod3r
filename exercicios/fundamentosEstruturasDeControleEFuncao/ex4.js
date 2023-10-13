/**
 * Crie uma função que irá receber dois valores, o dividendo e o divisor. 
 * A função deverá imprimir o resultado e o resto da divisão destes dois valores.
 */

function divisao(x, y) {
    console.log(`Resultado da Divisão: ${(x / y).toFixed(2)}`);
    console.log(`Resto da Divisão: ${x % y}`);
}
divisao(10, 3);
divisao(8, 2);