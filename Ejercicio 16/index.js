class Cuadrado {
   constructor (lado) {
   this.lado=lado
   }
   get area() {
    return this.calcArea()
   }
   calcArea(){
    return this.lado * this.lado
   }
   get perimetro(){
    return this.calcPerim()
   }
   calcPerim(){
    return this.lado * 4
   }
};

const cuadrado_peq = new Cuadrado(2);
const cuadrado_med = new Cuadrado(5);
const cuadrado_gr = new Cuadrado(10);

console.log("El área del cuadrado pequeño es: " + cuadrado_peq.area);
console.log("El perímetro del cuadrado pequeño es: " + cuadrado_peq.perimetro);
console.log("El área del cuadrado mediano es: " + cuadrado_med.area);
console.log("El perímetro del cuadrado mediano es: " + cuadrado_med.perimetro);
console.log("El área del cuadrado grande es: " + cuadrado_gr.area);
console.log("El perímetro del cuadrado grande es: " + cuadrado_gr.perimetro);
