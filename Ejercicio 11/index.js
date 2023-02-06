var frase = prompt("Por favor, introduce la frase que quieres valorar:");
var contar_mayusculas = 0;
var contar_minusculas = 0;
var minusculas = "abcdefghyjklmnñopqrstuvwxyz";
var mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
for (var i = 0; i < mayusculas.length; i++) {
for (var x = 0; x < frase.length; x++) {
if(frase[x]==mayusculas[i]){
contar_mayusculas+=1;
}
if(frase[x]==minusculas[i]){
contar_minusculas+=1;
}
}
}
if(contar_mayusculas===0) {
alert("Todas las letras son minúsculas");
};
if(contar_minusculas===0) {
alert("Todas las letras son mayúsculas")
}
if (contar_mayusculas>0 && contar_minusculas>0) {
alert("En la frase hay letras mayúsculas y minúsculas")
}