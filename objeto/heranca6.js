function Aula(nome, videoID) {
    this.nome = nome;
    this.videoID = videoID;
}

const aula1 = new Aula("Bem Vindo", 432);
const aula2 = new Aula("Até Breve!",988);
console.log(aula1, aula2);

// Simulanod o new
function novo(f, ...params) {
    const obj = {}; // obejeto novo
    obj.__proto__ = f.prototype; // associando o prototipo do obj ao prototype da função
    f.apply(obj, params);
    return obj; 
}

const aula3 = new Aula("Bem Vindo", 432);
const aula4 = new Aula("Até Breve!",988);
console.log(aula3, aula4);