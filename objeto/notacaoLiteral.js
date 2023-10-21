const a = 1;
const b = 2;
const c = 3;

const obj1 = { a: a, b: b, c: c};
const obj2 = {a, b, c};
console.log(obj1, obj2);


const nomeAtributo = "Nota";
const valorAtributo = 7.89;

const obj3 = {};
obj3[nomeAtributo] = valorAtributo;
console.log(obj3);

const obj4 = {[nomeAtributo]: valorAtributo};
console.log(obj4);

const obj5 = {
    funcao1: function () {
        //... forma antiga
    },
    funcao2() {
        //... forma nova
    }
}
console.log(obj5);

