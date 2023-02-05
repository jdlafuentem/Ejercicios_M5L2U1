let DNI = prompt("Por favor, introduce tu DNI:");
let letra_DNI = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"]
if (DNI<0 || DNI>99999999) {
alert("el número proporcionado no es válido");
}
else {
alert("tu letra del DNi es: "+ letra_DNI[DNI%23]);
}