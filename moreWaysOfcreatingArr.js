'use strict';

const labelBalance = document.querySelector('.balance__label');

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);

// Empty Array + fill method
const x = new Array(7);
console.log(x);
console.log(x.map(() => 5)); // It doesn't work
// x.fill(1);
// console.log(x);

x.fill(1, 3, 6);
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

// Non-destructive alternatives : toReversed, toSorted, toSplice, with

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
const reversedMov = movements.toReversed();
console.log(reversedMov);

// movements[1] = 2000;
const newMov = movements.with(1, 2000);
console.log(newMov);
console.log(movements);
