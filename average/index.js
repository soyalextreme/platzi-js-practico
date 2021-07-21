function average(arr) {
  let acum = arr.reduce((acum = 0, newValue) => (acum += newValue));
  return acum / arr.length;
}

function mediana(arr) {
  let mid = Math.floor(arr.length / 2);
  let mediana = 0;
  arr = arr.sort();

  if (arr % 2 === 0) {
    mediana = arr[mid];
  } else {
    // par
    mediana = (arr[mid] + arr[mid - 1]) / 2;
  }
  return mediana;
}

const testArray = [1, 2, 3, 4, 4, 1, 1, 1, 10];

function moda(arr) {
  let listCounter = {};

  arr.map((item) => {
    if (listCounter[item]) {
      listCounter[item] += 1;
    } else {
      listCounter[item] = 1;
    }
  });

  let arrCounterSort = Object.entries(listCounter).sort((a, b) => a[1] - b[1]);

  console.log(arrCounterSort[arrCounterSort.length - 1]);
}

moda(testArray);