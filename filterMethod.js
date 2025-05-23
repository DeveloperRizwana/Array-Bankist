'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });

const deposits = movements.filter(mov => mov > 0);
console.log(movements);
console.log(deposits);

// with for of loop
const dp = [];
for (const mov of movements) if (mov > 0) dp.push(mov);
console.log(dp);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);
