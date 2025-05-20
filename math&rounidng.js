'use strict';

console.log(Math.sqrt(25)); // 5
console.log(25 ** (1 / 2)); // 5
console.log(8 ** (1 / 3)); // 2

console.log(Math.max(23, 1, 22, 14, 12, 9));
console.log(Math.max('23', 1, 22, 14, 12, 9));
console.log(Math.max('23px', 1, 22, 14, 12, 9));

console.log(Math.min(23, 1, 22, 14, 12, 9));

console.log(Math.PI * Number.parseFloat('10px') ** 2);

// Random Dice Roll (1 to 6)
const dice = Math.floor(Math.random() * 6) + 1;
console.log(`You rolled: ${dice}`);

// Random number generator
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
// 0...1 -> 0...(max-min) -> min...max
console.log(randomInt(10, 20));

// Rounding integers
console.log(Math.round(23.3));
console.log(Math.round(23.9));
console.log('next');

console.log(Math.ceil(24.3));
console.log(Math.ceil(24.9));
console.log('next');

console.log(Math.floor(25.3));
console.log(Math.floor(25.9));
console.log('next');

console.log(Math.trunc(26.3));
console.log('next');

console.log(Math.floor(-27.9));
console.log(Math.trunc(-27.9));

// Rounding decimals
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.723).toFixed(2));
console.log(+(2.723).toFixed(2));
