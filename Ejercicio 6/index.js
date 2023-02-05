const notas = [6, 7, 2, 9, 3, 4, 5, 8, 2];
let total = 0;
for (let i = 0; i <= 8; i++) {
total+=notas[i];
};
console.log("usando bucle for: "+ total);

const numeros = [6, 7, 2, 9, 3, 4, 5, 8, 2];
let suma = 0;
for (let i of numeros) {
suma+=i;
};
console.log("usando bucle for of: "+ suma);