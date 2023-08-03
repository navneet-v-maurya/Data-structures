//recursive function to print all numbers between given number and 0;

const table = (num) => {
  if (num <= 0) return;
  console.log(num);
  table(num - 1);
};

table(5);

//recursive function to sum all numbers between given number and 0;

const sum = (num) => {
  if (num === 1) return 1;
  return num + sum(num - 1);
};

console.log("second question");
console.log(sum(3));

const factorial = (num) => {
  if (num === 1) return 1;
  return num * factorial(num - 1);
};

console.log("third question");
console.log(factorial(4));
