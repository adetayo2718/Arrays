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

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//COMPUTING THE DOM
containerMovements.innerHTML = ' ';

(function (movements) {
  movements.forEach((value, i) => {
    const type = value > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${value}</div>
      </div>
      `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
})(account1.movements);

// COMPUTING THE GLOBAL BALANCE
const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, val) => acc + val, 0);
  labelBalance.textContent = `${balance} EUR`;
};
calcDisplayBalance(account1.movements);

//COMPUTING THE USERNAME

(acts => {
  acts.forEach(act => {
    act.username = act.owner
      .toLocaleLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
})(accounts);
console.log(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// LECTURES

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

// /* ------ THE FOREACH LOOP FOR SET AND MAP ------*/

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach((value, key, map) => {
//   console.log(`${key}: ${value} `);
// });

// /* ------ THE FOREACH LOOP FOR SET ------*/

// const currenciesUnique = new Set(['USD', 'GBP', 'NGR', 'RND', 'GBP']);

// currenciesUnique.forEach((value, key, set) => {
//   console.log(`${key}: ${value}`);
// });

// // THE MAP LOOP METHOD

// const newArray = [];

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const euroToUsd = 1.1;

// const movementsUsd = movements.map(function (mov) {
//   return mov * euroToUsd;
// });

// const movementUsd = movements.map(mov => mov * euroToUsd);

// console.log(movementsUsd);
// console.log(movementUsd);

// //USING THE MAP METHOD TO ASSESS THE KEY AND VALUE

// const amount = movements.map((amnt, i) => {
//   let sum = 0;

//   console.log(
//     `Movement ${i + 1}: You ${amnt > 0 ? 'deposited' : 'withdraw'} $${Math.abs(
//       amnt
//     )} ${amnt > 0 ? 'to' : 'from'} your account`
//   );
// });

// console.log('--For Of Loop --');

// const movementUsd2 = mov => {
//   for (const x of mov) console.log(x * euroToUsd);
// };

// movementUsd2(movements);

// console.log('--ForEach Loop --');

// const movementUsd3 = mov => {
//   mov.forEach(x => console.log(x * euroToUsd));
// };

// movementUsd3(movements);

// console.log('--For Loop --');

// const movementUsd4 = mov => {
//   for (let i = 0; i < mov.length; i++) console.log(mov[i] * euroToUsd);
// };

// movementUsd4(movements);

// //FILTER

// const deposit = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log(deposit);

// console.log('---With the For of loop---');

// const pushDepo = [];

// for (const mov of movements) {
//   if (mov > 0) {
//     pushDepo.push(mov);
//   }
// }
// console.log(pushDepo);

// const withdrawals = movements.filter(amt => amt < 0);
// console.log(withdrawals);

// console.log('---With the ForEach loop---');

// const withdraw = function (movements) {
//   const emtyArr = [];
//   movements.forEach(mov => {
//     if (mov < 0) emtyArr.push(mov);
//   });
//   return emtyArr;
// };

// console.log(withdraw(movements));

// // REDUCE METHOD

// console.log(movements);

// const globalBalance = movements.reduce(function (acc, val, i, arry) {
//   return acc + val;
// }, 0);
// console.log(globalBalance);

// //DOING THE RETURN METHOD MANUALLY.
// let sum = 0;
// for (const mov of movements) {
//   sum += mov;
// }
// console.log(sum);

// // Other ways to use REDUCE
// const max = movements.reduce(
//   (acc, mov) => (acc > mov ? acc : mov),
//   0
// ); /*find the maximum value*/

// console.log(max);
