'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// //SLICE Does not mutate the origina data
// // console.log(arr.slice(2));
// // console.log(arr.slice(2, 4));
// // console.log(arr.slice(-2));
// // console.log(arr.slice(-1));
// // console.log(arr.slice(1, -2));
// // console.log(arr.slice());
// // console.log([...arr]);

// // SPLICE It actually mutates the original data
// // arr.splice(1, 2); /*Under splice, the second parameter is the delete count*/
// // console.log(arr);

// // REVERSE Method. IT mutates the original data
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// // console.log(arr2);

// // CONCAT Method
// const alphabets = arr.concat(arr2);
// console.log(alphabets);
// console.log([...arr, ...arr2]);

// // JOIN Method
// console.log(alphabets.join('-'));

// // PUSH
// // INDEXOF
// // INCLUDE
// // PULL

// // The new array method AT.
// const array = [23, 46, 92];
// console.log(array.at(2));

// //Getting the last element of an unknown array.
// console.log(array[array.length - 1]);
// console.log(array.slice(-1).at(0));
// console.log(array.slice(-1).join(' ')); /* Converts to string */
// console.log(array.slice(-1)[0]);

// console.log(arr.indexOf(arr.at(arr.length - 2)));
// console.log(arr.indexOf(arr.at(-1)));
// console.log(arr);

/* ------ THE FOREACH LOOP ------*/

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// /* ------ USING THE FOR OF LOOP FIRST ------*/

// for (const [i, amnt] of movements.entries()) {
//   if (amnt > 0)
//     console.log(`Movement ${i + 1}: You deposited $${amnt} to your account`);
//   else
//     console.log(
//       `Movement ${i + 1}: You deposited $${Math.abs(amnt)} to your account`
//     );
// }

// console.log(`---THE FOREACH LOOP---`);

// /* ------ USING THE FOREACH LOOP ------*/

// movements.forEach((amnt, i, arr) => {
//   if (amnt > 0)
//     console.log(`Movement ${i + 1}: You deposited $${amnt} to your account`);
//   else
//     console.log(
//       `Movement ${i + 1}: You deposited $${Math.abs(amnt)} to your account`
//     );
// });

// const depositWithdrawal = arr => {
//   let sum = 0;
//   arr.forEach((amnt, i) => {
//     if (amnt > 0)
//       console.log(
//         `Movement ${
//           i + 1
//         }: You deposited $${amnt} to your account, your balance is: $${(sum +=
//           amnt)}`
//       );
//     else
//       console.log(
//         `Movement ${i + 1}: You withdrawed $${Math.abs(
//           amnt
//         )} from your account, your balance is: $${(sum += amnt)}`
//       );
//   });
// };

// console.log(`---THE FOREACH LOOP Advanced---`);
// depositWithdrawal(movements);
// console.log('---New Trans---');
// depositWithdrawal([2000, 7000, -8900]);
