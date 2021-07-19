function perimeterSquare(side) {
  return side * 4;
}

function areaSquare(side) {
  return side * side;
}

const getHeight = (side, base) =>
  Math.sqrt(Math.pow(side, 2) - Math.pow(base / 2, 2));

const areaTriangle = (side, base) => (base * getHeight(side, base)) / 2;
const perimeterTriangle = (side1, side2, base) => side1 + side2 + base;

const perimeterCircle = (radius) => {
  const diameter = radius * 2;
  return diameter * 3.1416;
};
const areaCircle = (radius) => 3.1416 * Math.pow(radius, 2);

const calculatePerimeterSquare = () => {
  const side = document.querySelector("#square-side-input").value;
  const perimeterPrinter = document.querySelector(
    "#result-text-square-perimeter"
  );
  perimeterPrinter.innerHTML = `Result Perimeter: ${perimeterSquare(side)}`;
};

const calculateAreaSquare = () => {
  const side = document.querySelector("#square-side-input").value;
  const areaPrinter = document.querySelector("#result-text-square-area");
  areaPrinter.innerHTML = `Result Perimeter: ${areaSquare(side)}`;
};

const getSelectorsTriangle = () => {
  const sideA = document.querySelector("#triangle-sideA-input").value;
  const sideB = document.querySelector("#triangle-sideB-input").value;
  const base = document.querySelector("#triangle-base-input").value;
  console.log(sideA, sideB, base);
  const printerArea = document.querySelector("#result-text-triangle-area");
  const printerPerimeter = document.querySelector(
    "#result-text-triangle-perimeter"
  );
  return {
    sideA,
    sideB,
    base,
    printerArea,
    printerPerimeter,
  };
};

const calculatePerimeterTriangle = () => {
  const { sideA, sideB, base, printerPerimeter } = getSelectorsTriangle();
  const hipo = Math.sqrt(Math.pow(sideB, 2) + Math.pow(base, 2));
  document.querySelector("#triangle-sideA-input").setAttribute("value", hipo);
  printerPerimeter.innerHTML = `Result perimeter: ${perimeterTriangle(
    sideA,
    sideB,
    base
  )}`;
};

const calculateAreaTriangle = () => {
  const { sideB, base, printerArea } = getSelectorsTriangle();
  const hipo = Math.sqrt(Math.pow(sideB, 2) + Math.pow(base, 2));
  document.querySelector("#triangle-sideA-input").setAttribute("value", hipo);
  printerArea.innerHTML = `Result area: ${areaTriangle(sideB, base)}`;
};

const calculateCircle = () => {
  const radius = document.querySelector("#radius-input").value;
  const area = areaCircle(radius);
  const perimeter = perimeterCircle(radius);
  document.querySelector(
    "#result-text-circle-perimeter"
  ).innerHTML = `Perimeter Result: ${perimeter}`;
  document.querySelector(
    "#result-text-circle-area"
  ).innerHTML = `Area result ${area}`;
};
