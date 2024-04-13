const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"];
pilotos.pop(); // Retira o ultimo elemento
console.log(pilotos);

pilotos.push("Verstappen"); // Adiciona um elemento no final do array
console.log(pilotos);

pilotos.shift(); // Remove o primeiro elemento [0]
console.log(pilotos);

pilotos.unshift("Hamilton"); // Adiciona um elemento no inicio [0]
console.log(pilotos);

// splice pode adicionar e remover elementos
// adicionando
pilotos.splice(2, 0, "Bottas", "Massa"); // adicionando apartir do indice 2 os elemento ...
console.log(pilotos);

// removendo
pilotos.splice(3, 1); // retirando apartir do indice 3, um elemento
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2); // novo array apartir do indice 2
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4); // novo array com restrição até o indice 4
console.log(algunsPilotos2);
