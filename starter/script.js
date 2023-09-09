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

const account5 = {
  owner: 'Sandra Jester',
  movements: [430, 1000, 700, 50, -90, 2000],
  interestRate: 1,
  pin: 5555,
};

const accounts = [account1, account2, account3, account4, account5];

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

const displayMovements = function (movements) {
  movements.forEach((value, i) => {
    const type = value > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${Math.abs(value)}$</div>
      </div>
      `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// COMPUTING THE GLOBAL BALANCE
const calcDisplayBalance = function (account) {
  account.balance = account.movements.reduce((acc, val) => acc + val, 0);
  labelBalance.textContent = `${account.balance}$`;
};

//COMPUTING THE TOTAL INCOME AND OUTCOME AND INTEREST.

const calDisplaySumary = function (account) {
  const income = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => (acc += mov));

  labelSumIn.textContent = `${income}$`;

  const out = account.movements
    .filter(mov => mov < 0)
    ?.reduce((acc, mov) => (acc += mov));

  labelSumOut.textContent = `${Math.abs(out)}$`;

  const interest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .reduce((acc, mov) => (acc += mov));

  labelSumInterest.textContent = `${interest}$`;
};

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

const updateUI = acc => {
  //calculate Balance
  calcDisplayBalance(acc);
  // calculate Summary
  calDisplaySumary(acc);
  // display Movements
  displayMovements(acc);
};

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    containerApp.style.opacity = 100;
    //display UI and welcome message!
    labelWelcome.textContent = `Good day ${
      currentAccount.owner.split(' ')[0]
    }!`;
    inputLoginUsername.value = inputLoginPin.value = '';

    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiver = accounts.find(acc => acc.username === inputTransferTo.value);
  inputTransferTo.value = inputTransferAmount.value = '';
  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    receiver &&
    receiver.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiver.movements.push(amount);

    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);

    updateUI(currentAccount);

    inputLoanAmount.value = '';
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  const closeUser = inputCloseUsername.value;
  const closeUserPin = Number(inputClosePin.value);

  const index = accounts.findIndex(acc => acc.username === closeUser);

  console.log(index);
  if (
    closeUser === currentAccount.username &&
    closeUserPin === currentAccount.pin
  ) {
    accounts.splice(index, 1);
  }

  containerApp.style.opacity = 0;
});

console.log(accounts);

let on = false;

const btn_do_it = document.querySelector('.do_it');
` `;
btn_do_it.addEventListener('click', e => {
  !on ? console.log('e don work') : console.log('e no work');
  on = !on;
});

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

// // FIND METHOD The Find method returns the element that matches conditions set.

// const withdrawal = movements.find(mov => mov < 0);

// console.log(withdrawal);

// // Finding an account in the accounts array.

// const account = accounts.find(act => act.username === 'js');

// console.log(account);

// // THE FIND INDEX METHOD. The find index method returns the index of the element that matches the condition set

// const indx = accounts.findIndex(acc => acc.username === 'ss');

// console.log(indx);

// //THE SOME METHOD
// console.log(movements);

// // EQUALITY
// console.log(movements.includes(-130));

// console.log(movements.some(mov => mov === -130));

// //CONDITION
// const anyDeposits = movements.some(mov => mov > 0);
// console.log(anyDeposits);

// // THE EVERY METHOD

// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));

//THE FLAT METHOD. This method is used to marge together nested arrays together into one big array.

// const arry = [[1, 2, 3], 4, 5, [6, 7, 8], 9, 0];

// console.log(arry);
// console.log(arry.flat());

// const arry2 = [[[1, 2], 3], 4, [5], [6, [7, 8]], [9], 0];

// console.log(arry2.flat(2));

// const total = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(total);

// // THE FLATMAP METHOD
// const total = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(total);

// OTHER WAYS OF CREATING ARRAYS PROGRAMATICALLY
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// ARRAY FILL
const x = new Array(7);
console.log(x);
//  This wont work to fill the empty array
// console.log(x.map(() => 5));

const xy = x.fill(3, 1, 6);
const yx = arr.fill(40, 3, 4);
/*The first arguement is the element to fill in, the second argument is the start index and the third arguement is the stop index.*/
console.log(xy);
console.log(yx);
