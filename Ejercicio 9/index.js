function grados_celsius_a_fahrenheit (temperatura) {
let resultado = temperatura*9/5+32;
alert("Resultado: " + resultado + " F");
}

const temp = prompt("Por favor, introduce la temperatura en grados Celsius:");
grados_celsius_a_fahrenheit(temp);
