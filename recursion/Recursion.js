//recursive function to print all numbers between given number and 0;

const table = (num) => {
  if (num <= 0) return;
  console.log(num);
  table(num - 1);
};

table(5);
