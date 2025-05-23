'use strict';

// setTimeOut
const ingredients = ['babycorn', 'cheese', 'spinach'];
const pizzaTimer = setTimeout(
  (ing1, ing2, ing3) =>
    console.log(`Here is your Pizza🍕 with ${ing1} and ${ing2} and ${ing3}
`),
  3000,
  ...ingredients
);
console.log('waiting.....');

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

// setInterval
setInterval(function () {
  const now = new Date();
  console.log(now);
});
