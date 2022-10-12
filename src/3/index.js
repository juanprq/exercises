class Rectangulo {
  constructor(ancho, largo) {
    this.ancho = ancho;
    this.largo = largo;
  }

  calcularArea() {
    // llenar el codigo de este metodo para retornar el area del rectangulo
  }

  calcularPerimetro() {
    // llenar el codigo de este metodo para retornar el perimetro del rectangulo
  }
}


const rectangulo1 = new Rectangulo(10, 3);
const rectangulo2 = new Rectangulo(4, 2);

console.log(rectangulo1.calcularArea()); // deberia imprimir 30
console.log(rectangulo1.calcularPerimetro()); // deberia imprimir 26

console.log(rectangulo2.calcularArea()); // deberia imprimir 8
console.log(rectangulo2.calcularPerimetro()); // deberia imprimir 12
