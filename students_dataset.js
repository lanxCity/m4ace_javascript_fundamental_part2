const data1 = ["Joy", "Sodiq", "Elija", "Oluwakemi", "Gaius"];

// -> map method
let datasetToUpper = data1.map((el) => el.toUpperCase());

console.log("Original:", data1);
console.log("Uppercase (map method):", datasetToUpper, "\n");

// -> filter method
// create array from 1 to 10 and '_' is used to ignore the first parameter which is the value of the
// element in the array (which are 'undefined' at first) and 'i' is used to get the index of the
// element in the array
let arr = Array.from({ length: 10 }, (_, i) => i + 1);

console.log("Original array:", arr);
console.log(
  "Even numbers (filter method):",
  arr.filter((el) => el % 2 == 0),
  "\n",
);

// -> reduce method
// let filterDataset = data1.filter();
console.log(
  "Sum of all numbers (reduce method):",
  arr.reduce((acc, el) => acc + el),
);

// -> sort method
console.log("\nSort method");

arr.sort((a, b) => b - a);
console.log(arr);

arr.sort((a, b) => a - b);

// -> some method (does not have to be all elements)
console.log("\nSome method");
console.log(arr.some((el) => el > 10));

// -> other array methods
// push
arr.push(11, 12, 13);
console.log("\npush method", arr);

// pop
arr.pop();
console.log("\npop method", arr);

// every (all element)
console.log("\n");
console.log(
  "Is all el <= 12:",
  arr.every((el) => el <= 12),
);

console.log(
  "Is all el <= 10:",
  arr.every((el) => el < 10),
);

console.log("\n");

// entries method
let arrIterator = data1.entries();
console.log(arrIterator.next());
console.log(arrIterator.next().value);
console.log(arrIterator.next()["value"]);
console.log("\n");

// shift method
console.log(arr);
arr.shift();
console.log("After shift method:", arr);
console.log("\n");

//
arr.fill(28, 6);
console.log(arr);
