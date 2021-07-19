// codigo cuadrado
console.group("Cuadrado");
const sideSquare = 5;
console.log("Los lados del cuadrado mide: ", sideSquare + "cm");

const perimeterSquare = sideSquare * 4;
console.log("Perimeter: ", perimeterSquare, "cm");

const areaSquare = sideSquare * sideSquare;
console.log("Area: ", areaSquare, "cm2");
console.groupEnd();

// codigo cuadrado
const ladoTrianguloA = 6;
const ladoTriaguloB = 6;
const baseTriangulo = 4;

console.group("Triangulo");
console.log(
  `Lado A: ${ladoTrianguloA}cm\nLado B: ${ladoTriaguloB}cm\nBase: ${baseTriangulo}cm`
);

const alturaTriangulo = 5.5;
console.log("Altura: ", alturaTriangulo, "cm");
const perimetroTriangulo = ladoTrianguloA + ladoTriaguloB + baseTriangulo;
console.log(`Perimetro: ${perimeterSquare} cm`);
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log(`Area: ${areaTriangulo} cm`);

console.groupEnd();

// codigo circulo
console.group("Cicle");
const radio = 4;
const diametro = 4 * 2;
const PI = Math.PI;
const perimeterCircle = diametro * PI;
const areaCircle = PI * (radio * radio);
console.log(`
    Radio: ${radio} cm
    Diameter: ${diametro}cm
    PI: ${PI}
    Perimetro: ${perimeterCircle} cm
    Area: ${areaCircle} cm2
`);

console.groupEnd();
