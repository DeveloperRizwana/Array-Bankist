'use strict';

const movements = [200, 450, -400, 3000, -650, -120, 70, 1300];
console.log(movements);
// EQUALITY
console.log(movements.includes(-120));

// SOME: CONDITION
const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

// EVERY: CONDITION
const everyDeposits = movements.every(mov => mov > 0);
console.log(everyDeposits);

// SEPARATE CALLBACK
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
