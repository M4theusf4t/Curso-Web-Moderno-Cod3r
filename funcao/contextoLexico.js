const valor = "Global";

function minhaFuncao() {
    console.log(valor);
}
// Função carrega com ela o local em que foi definida


function exec() {
    const valor = "Local";
    minhaFuncao();
}

exec();