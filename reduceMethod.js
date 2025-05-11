'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

// Accumulator -> SNOWBALL
// const balance = movements.reduce(function (accu, curr, i, arr) {
//   console.log(`Iteration ${i}: ${accu}`);
//   return accu + curr;
// }, 0); // 0 = initial value of accumulator

const balance = movements.reduce((accu, curr, i) => {
  console.log(`Iteration ${i}: ${accu}`);
  return accu + curr;
}, 0);

console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// Maximum Value
// const max = movements.reduce(function (accu, cur) {
//   if (accu > cur) {
//     return accu;
//   } else {
//     return cur;
//   }
// }, movements[0]);

const max = movements.reduce((accu, cur) => {
  if (accu > cur) return accu;
  else return cur;
  
}, movements[0]);

console.log(max);
