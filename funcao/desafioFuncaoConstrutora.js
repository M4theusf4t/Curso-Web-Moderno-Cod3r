class Pessoa {
    constructor(nome){
        this.nome = nome;
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`);
    }
}
const p1 = new Pessoa("João");
p1.falar();

// INICIO DO MEU CODIGO, TRANSFORMAR ESSE EXEMPLO EM UMA FUNCAO CONSTRUTORA

function Pessoa1(nome) {
    this.nome = nome;

    this.falar = () => console.log(`Meu nome é ${this.nome}`);
}

const p2 = new Pessoa("João");
p2.falar();

          