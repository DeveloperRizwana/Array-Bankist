'use strict';

console.log(23 === 23.0);

// Base 10 -> 0 to 9.. 1/10 = 0.1.. 3/10 = 3.33333   -->	Regular number system (0–9 digits)
// Bianry Base 2 -> 0 1  ---> Binary system (0 and 1 only)

console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

// Conversion
console.log(Number('23'));
console.log(+'23');

// Parsing
console.log(Number.parseInt('30px', 10));
console.log(Number.parseInt('e23', 10));

console.log(Number.parseFloat('2.5'));
// console.log(parseFloat('2.5'));  is used in older JavaScript, but nowadays we usually use Number.parseInt('2.5') instead.
console.log(Number.parseInt('2.5'));

// Check if value is NaN
console.log(Number.isNaN(10));
console.log(Number.isNaN('10'));
console.log(Number.isNaN(+'10X'));
console.log(Number.isNaN(23 / 0));

// Checking if value is number
console.log(Number.isFinite(10));
console.log(Number.isFinite('10'));
console.log(Number.isFinite(+'10X'));
console.log(Number.isFinite(23 / 0));

console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));
