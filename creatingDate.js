'use strict';

const now = new Date();
console.log(now);

console.log(new Date('Aug 06 2020 19:02:04'));
console.log(new Date('feb 02 2021 19:02:04'));

console.log(new Date(2035, 10, 12, 15, 13, 12));
console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

console.log('<-----Next---->');

const future = new Date(2035, 10, 12, 15, 13);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(2078473380000));
console.log(Date.now());

future.setFullYear(2040);
console.log(future);
