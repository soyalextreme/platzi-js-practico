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
