const nums = [1, 2, 3, 4, 6, 7, 8, 9, 10];

for (let x in nums) {
    if (x == 5) { 
        break; // vai sair no indice 5
    }
    console.log(`${x} = ${nums[x]}`);
}


for (let y in nums) {
    if (y == 5) {
        continue; // vai pular o indice 5
    }
    console.log(`${y} = ${nums[y]}`);
}


// não usar, apenas para exemplo
externo: for (let a in nums) {
    for (let b in nums) {
        if (a == 2 && b == 3) break externo;
        console.log(`Par = ${a}, ${b}`);
    }
}