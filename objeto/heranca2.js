// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = "0" // não faça isso em casa!

// 1° Exemplo
const avo = { attr1: "A"};
const pai = {__proto__: avo, attr2: "B", attr3: "3"}; // relação de prototipo entre dois objetos
const filho = {__proto__: pai, attr3: "C"}; // relação de prototipo entre dois objetos
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3);

// 2° Exemplo
const carro = {
    velAtual: 0,
    vleMax: 200,
    acelerarMaris(delta) {
        if (this.velAtual + delta <= this.vleMax) {
            this.velAtual += delta;
        } else {
            this.velAtual = this.vleMax;
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.vleMax}Km/h`;
    }
};

const ferrari = {
    modelo: "F40",
    vleMax: 324 //shadowing
};

const volvo = {
    modelo: "V40",
    status() {
        return `${this.modelo}: ${super.status()}`;
    }
};

Object.setPrototypeOf(ferrari, carro); // relação de prototipo entre dois objetos
Object.setPrototypeOf(volvo, carro);

console.log(ferrari);
console.log(volvo);

volvo.acelerarMaris(100);
console.log(volvo.status());

ferrari.acelerarMaris(300);
console.log(ferrari.status());