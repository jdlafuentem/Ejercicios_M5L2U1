const months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto",
"septiembre", "octubre", "noviembre","diciembre"];

const modif_months = months
.filter(month => month.length > 7)
.map(month => month.toUpperCase());

const num_months = modif_months.length

console.log(modif_months);
console.log("Número de meses con más de siete letras: " + num_months);
