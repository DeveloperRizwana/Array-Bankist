'use strict';

// Data
const account1 = {
  owner: 'Rizwana Perween',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type: 'Premium',
};

const account2 = {
  owner: 'Noorjahan Khatoon',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: 'standard',
};

const account3 = {
  owner: 'Md Islam',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: 'Premium',
};

const account4 = {
  owner: 'Aatif Alam',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: 'Basic',
};

const accounts = [account1, account2, account3, account4];

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

const groupedMovements = Object.groupBy(movements, movement =>
  movement > 0 ? 'Deposits' : 'Movements'
);
console.log(groupedMovements);

const groupdByActivity = Object.groupBy(accounts, account => {
  const MovementCount = account.movements.length;
  if (MovementCount >= 8) return 'very active';
  if (MovementCount >= 4) return 'active';
  if (MovementCount >= 1) return 'moderate';
  return 'inActive';
});

console.log(groupdByActivity);

// const groupdAccounts = Object.groupBy(accounts, account => account.type);
const groupdAccounts = Object.groupBy(accounts, ({ type }) => type);
console.log(groupdAccounts);
