function suma_pares(array) {
let suma = 0;
for (let i of array) {
if(i%2===0) {
suma+=i;
};
};
console.log("suma de números pares: "+ suma);
};

const numeros = [1, 2, 3, 4, 5];
suma_pares(numeros);
