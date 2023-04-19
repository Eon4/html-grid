const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4

const sumWithInitial = array1.reduce((acc, curr) => acc + curr, 0);

console.log("", sumWithInitial);
// Expected output: 10

const persons = [
  { name: "Anne", age: 21 },
  { name: "Jens", age: 32 },
  { name: "Hans", age: 75 },
  { name: "Heinz", age: 98 },
];

// 0 + 1 + 2 + 3 + 4

const combinedAge = persons.reduce((acc, curr) => acc + curr.age, 0);

const numPersons = persons.length;

console.log("number of persons", numPersons);

console.log("combined ", combinedAge / numPersons);
// Expected output: 10
