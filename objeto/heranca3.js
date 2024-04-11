// Object. create
const pai = {nome: "Pedro", corCabelo: "Preto"};

const filha1 = Object.create(pai); // E passado o prototipo do obj que está sendo criado
filha1.nome = "Ana";
console.log(filha1.corCabelo);

const filha2 = Object.create(pai, {//Além disso pode definir atributos também
    nome: {value: "Bia", writable: false, enumerable: true}
})
console.log(filha2.nome);

filha2.nome = "Carla";
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);

console.log(Object.keys(filha1));
console.log(Object.keys(filha2));

for (let key in filha2) {        // For in para verificar se uma propriedade pertence ou não
    filha2.hasOwnProperty(key) ? // ao obj que você está percorrendo no momento
    console.log(key) : console.log(`Por `)
}