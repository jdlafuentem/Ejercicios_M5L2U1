function eliminando_consonantes(array) {
var vocales = ["a","e","i","o","u","á","é","í","ó","ú"];
var b = [];
var aux = "";
for(var i = 0; i < array.length; i++) {
aux = "";
for(var k = 0; k < array[i].length; k++) {
for(var j = 0; j < vocales.length; j++) {
if(array[i][k] == vocales[j]) 
{
aux += array[i][k];
}
}
}
b.push(aux);
}
console.log("Frase sin consonantes:");
console.log(b);
}

const frase = ["Hola mundo"];
eliminando_consonantes(frase);