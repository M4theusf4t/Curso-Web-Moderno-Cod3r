/**
 * Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A 
 * primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda 
 * retornará o valor da aplicação sob o regime de juros compostos.
 * 
 */

function jurosSimples(capitalInicial, taxaDeJuros, tempoDeAplicacao) {
    const montante = capitalInicial + (capitalInicial * taxaDeJuros * tempoDeAplicacao);
    return console.log(`Valor total do Montante em JS: ${(montante).toFixed(2).replace(".", ",")}`);
}
jurosSimples(1200, 0.02, 14.5);

function jurosComposto(capitalInicialjc, taxaDeJurosjc, tempoDeAplicacaojc) {
    const montantejc = capitalInicialjc + (capitalInicialjc * Math.pow((1 - taxaDeJurosjc), tempoDeAplicacaojc));
    return console.log(`Valor total do Montante em JC: ${(montantejc).toFixed(2).replace(".", ",")}`);
}
jurosComposto(1200, 0.02, 14.5);
