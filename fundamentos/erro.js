function tratarErroELancar(erro){
    //throw new Error ("Ocorreu um Erro!");
    throw { // lançar
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try { // possiveis codigos que venham a dar erro
        console.log(obj.name.toUpperCase() + "!!!");
    } catch (e) { // trata o erro
        tratarErroELancar(e);
    } finally { // executa com erro ou sem erro
        console.log("Final");
    }
}

const obj = { nome: "Roberto" }
imprimirNomeGritado(obj);

