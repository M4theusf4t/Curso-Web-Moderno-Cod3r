const peso = 2.0;
const peso1 = Number('2.0');

console.log(peso, peso1);
console.log(Number.isInteger(peso));
console.log(Number.isInteger(peso1));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso + avaliacao2 * peso1;
const media = total / (peso + peso1);

console.log(media.toFixed(2)); // toFixed - quantidade de casas decimais, seram exibidas
console.log(media.toString(2)); // toString 2 - transformar em binário
console.log(typeof media); // mostrar o tipo da variável


console.log(7 / 0); // tipo Infinity
console.log("10" / 2); // 10,2 já não ocorreria a divisão
console.log("Show!" * 2);
console.log(0.1 + 0.7);