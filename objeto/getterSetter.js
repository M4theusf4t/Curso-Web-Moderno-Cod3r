const sequecia = {
    _valor: 1, //conveção
    get valor() { return this._valor++},
    set valor(valor) {
        if(valor > this._valor) {
            this._valor = valor;
        }
    }
}

console.log(sequecia.valor, sequecia.valor);
sequecia.valor = 1000;
console.log(sequecia.valor, sequecia.valor);
sequecia.valor = 900;
console.log(sequecia.valor, sequecia.valor);