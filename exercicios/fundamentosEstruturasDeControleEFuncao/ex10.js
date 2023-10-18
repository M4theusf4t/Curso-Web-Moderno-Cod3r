/**
 *  Crie uma função que verifica se um número inteiro passado como 
 * parêmetro é divisível por 3 e retorne true ou false.
 * 
 */
function numInteiro (x) {
    if (x % 3 === 0) {
        console.log("True");
    } else {
        console.log("False");
    }
}
numInteiro(18);
numInteiro(134);