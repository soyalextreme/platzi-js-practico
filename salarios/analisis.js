// Utils
function isPair(num) {
  return num % 2 === 0;
}

const salaryCol = colombia.map((person) => {
  return person.salary;
});

// Sorting the salary
const salaryColSorted = salaryCol.sort((a, b) => a - b);

// median function
function medianSalary(list) {
  const middle = parseInt(list.length / 2);
  let median = 0;

  if (isPair(list.length)) {
    console.log("pasando");
    median = (list[middle] + list[middle - 1]) / 2;
  } else {
    median = list[middle];
  }
  return median;
}

// median top 10%

function getTop10(arr) {
  const spliceStart = (arr.length * 90) / 1000;
  const spliceAmount = arr.length - spliceStart;
  const salaryTop10 = arr.splice(spliceAmount, spliceAmount);
  return salaryTop10;
}

// average function
function arithmeticAverage(list) {
  return list.reduce((acum, current) => (acum += current)) / list.length;
}

const medianGeneralCol = medianSalary(salaryColSorted);
const medianTopCol = medianSalary(getTop10(salaryColSorted));

console.log({
  medianGeneralCol,
  medianTopCol,
});
