'use strict';

const movements = [200, 450, -400, 3000, -650, -120, 70, 1300];

// it mutates original array
// Stirngs
const owners = ['Rizwana', 'Rabia', 'Razia', 'Noorjahan'];
console.log(owners.sort());
console.log(owners);

// Numbers
console.log(movements);
// console.log(movements.sort());

// return < 0, A,B(Keep order)
// return > 0, B,A (Switch Order)

// Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1; // swap
//   if (a < b) return -1; // no swap
// });
movements.sort((a, b) => a - b);
console.log(movements);

// descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements);

// Notes----->>>>
// | Return Kya Karta Hai | Matlab
// | -------------------- | --------------------------------- |
// | `return -1`          | Don’t swap (a is already smaller) |
// | `return 1`           | Swap positions                    |
// | `return 0`           | No change needed (equal values)   |
