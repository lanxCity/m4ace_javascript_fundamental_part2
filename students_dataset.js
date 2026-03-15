const data1 = ["Joy", "Sodiq", "Elija", "Oluwakemi", "Gaius"];

// map method
let datasetToUpper = data1.map((el) => el.toUpperCase());

console.log("Original:", data1);
console.log("Uppercase:", datasetToUpper, "\n");

// filter method
// create array from 1 to 10 and '_' is used to ignore the first parameter which is the value of the
// element in the array (which are 'undefined' at first) and 'i' is used to get the index of the
// element in the array
let arr = Array.from({ length: 10 }, (_, i) => i + 1);

console.log("Original array:", arr);
console.log(
  "Even numbers:",
  arr.filter((el) => el % 2 == 0),
  "\n",
);

// reduce method
// let filterDataset = data1.filter();
console.log(
  "Sum of all numbers:",
  arr.reduce((acc, el) => acc + el),
);
