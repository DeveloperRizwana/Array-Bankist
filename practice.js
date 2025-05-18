'use strict';

// Data
const account1 = {
  owner: 'Rizwana Perween',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Noorjahan Khatoon',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Md Islam',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Aatif Alam',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];
// Excercise - 1
const bankDepositSum = accounts
  .flatMap(cur => cur.movements)
  .filter(cur => cur > 0)
  .reduce((acc, cur) => acc + cur, 0);
console.log(`All Deposits sum is: ` + bankDepositSum);

// Excercise - 2
const allDeposits = accounts.flatMap(cur => cur.movements);
console.log(allDeposits);

// const numDeposits100 = accounts
//   .flatMap(cur => cur.movements)
//   .filter(cur => cur >= 1000).length;

console.log(accounts.flatMap(cur => cur.movements).filter(cur => cur >= 1000));

//counter
const numDeposits100 = accounts
  .flatMap(cur => cur.movements)
  //   .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
console.log(numDeposits100);

// Prefixed ++ operator
let a = 10;
console.log(++a);

const nm = ['R', 'i', 'z', 'w', 'a', 'n', 'a'];
console.log(nm.reduce((acc,cur) => acc+cur));
