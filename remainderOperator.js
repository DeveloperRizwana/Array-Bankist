'use strict';

console.log(5 % 2);
console.log(5 / 2); //5 = 2 * 2 + 1

console.log(8 % 2);
console.log(8 / 2); //8 = 2*3 + 2

console.log(6 % 2); // even number
console.log(6 / 2);

console.log(7 % 2);
console.log(7 / 2);

const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(7));
console.log(isEven(1332));

// Numeric seperator
// 287,460,000,000
const diameter = 287_460_000_000;
console.log(diameter);

const price = 345_99;
console.log(price);

const transferFee1 = 15_00;
const transferFee2 = 1_500;

const PI = 3.1415;
console.log(PI);

// ----->> we can't do this <-------
// const PI = 3._1415;
// const PI = 3.1__415;
// const PI = 3.1415_;
// const PI = _3.1415;
console.log(parseInt('23_000'));
console.log(Number('23_000'));
