// --------------------Задачи Репеты-------------------------

// // 1)Напиши функцию calculateTotalPrice(items)
// // которая принимает массив цен (чисел) и возвращает их сумму

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// const numbers = [4, 4, 5, 6, 1, 22];

// function calculateTotalPrice(items) {
//     let total = 0;
//     for (const item of items) {
//         total += item;
//     }
//     return total;
// }

// console.log(calculateTotalPrice(cart));
// console.log(calculateTotalPrice(numbers));
// console.log(calculateTotalPrice([4, 2]));



// -------------------------------------------------------------
// 2) Напиши функцию logItems(items) для перебора и
// логирования массива

// const names = ['Arthur', 'Ihor', 'Katerina'];
// const fruits = ['apple', 'strawberry', 'cocnut'];

// function logItems(items) {
//     for (const item of items) {
//         console.log(item);
//     }
// }

// logItems([2, 4, 5,]);
// console.log('----------------');
// logItems(fruits);
// console.log('----------------');
// logItems(names);



// ---------------------------------------------------
// 3) Напиши функцию findLogin(allLogins, login) для поиска логина
// Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
// Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];

// function findLogin(allLogins, loginToFind) {
//
//     if (allLogins.includes(loginToFind)) {
//         return `Пользователь ${loginToFind} найден.`;
//     }
//     return `Пользователь ${loginToFind} не найден.`;
// }

// console.log(findLogin(logins, 'k1widab3st'))

// ------------------------------------------------------------------

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];

// function findLogin(allLogins, loginToFind) {
//     for (const login of allLogins) {
//         if (login === loginToFind) {
//             return `Пользователь ${loginToFind} найден.`;
//         }
//     }
//     return `Пользователь ${loginToFind} не найден.`;
// }

// console.log(findLogin(logins, 'm4ngoDogea'));
// console.log(findLogin(logins, 'poly1scute'));

// --------------------------------------------------------------------------

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];

// function findLogin(allLogins, loginToFind) {
//     return allLogins.includes(loginToFind)
//         ? `Пользователь ${loginToFind} найден.`
//         : `Пользователь ${loginToFind} не найден.`;
// }

// console.log(findLogin(logins, 'poly1scute'));



// ----------------------------------
// 4) Напиши функцию findSmallesNumber(numbers) для поиска самого маленького числа в массиве,
// при условии что числа уникальные (не повторяются).

// function findSmallesNumber(numbers) {
//     let smallesNumber = numbers[0];
//     for (const number of numbers) {
//         if (number < smallesNumber) {
//             smallesNumber = number;
//         }
//     }
//     return smallesNumber;
// }

// console.log(findSmallesNumber([4, 76, 100, 2, 5, 0, 1, -1]));
// console.log(findSmallesNumber([1, 2, 0]));


// 5) Напиши функцию changeCase(string) которая заменяет регистр
// каждого символа в строке на противоположный.
// Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».

// --------------мое решение------------------------------
// =============================================================================

// const string = 'JavaScript';

// function changeCase(string) {

//     const letters = string.split('');
//     const reversLetters = [];

//     for (const letter of letters) {
//         if (letter === letter.toUpperCase()) {
//             reversLetters.push(letter.toLowerCase());
//         } else {
//             reversLetters.push(letter.toUpperCase());
//         }
//     }
//     const reversString = reversLetters.join('');

//     return reversString;
// }

// console.log(changeCase(string));
// console.log(changeCase('BIG small'))
// ------------------------------------------------------------------------

// ==========================тернарный оператор==============================

// const string = 'JavaScript';

// function changeCase(string) {
//     let invertedString = '';
//     for (const letter of string) {
//         const isEqual = letter === letter.toLowerCase();
//         invertedString += isEqual ? letter.toUpperCase() : letter.toLowerCase();
//     }

//     return invertedString;
// }

// console.log(changeCase(string));


/* 6)
 * Напиши функцию slugify(string) которая получает строку и возвращает URL-slug
 * Строка состоит только из букв и пробелов
 */

// function slugify(string) {
    
//     return string.toLowerCase().split(' ').join('-');

// }

// console.log(slugify('Top 10 benefits of React framework'));
// console.log(slugify('Azure Static Web Apps are Awesome'));
// console.log(slugify('Technical writing tips for non-native English speakers'));


/* 7)
 * Напиши функцию add для сложения произвольного количества аргументов (чисел)
 * - Операция ... (rest)
 */


// function add(...args) {
//     // console.log(args);
//     let total = 0;
//     for (const arg of args) {
//         // console.log(arg);
//         total += arg;
//     }
//     return total;
// }

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 4, 5, 6));
// console.log(add(1, 2, 3,));



/*8) 
 * Напиши функцию filterNumbers(array [, number1, ...]) которая:
 * - первым аргументом принимает массив чисел
 * - после первого аргумента может быть произвольное количество других аргументов которые будут числами.
 * - Функция должна вернуть новый массив, в котором будут только те аргументы, начиная со второго,
 *   для которых есть аналог в оригинальном массиве.
 */


// --------------------Мое решение--------------------------

// function filterNumbers(numbers, ...args){
//     const repeatingNumbers = [];

//     for(const value of args){
//         if(numbers.includes(value)){
//         repeatingNumbers.push(value)
//         }
//     }
//     return repeatingNumbers;
// }



// --------------Решение Chat GPT-----------------------------

// function filterNumbers(numbers, ...args) {
//   return args.filter(arg => numbers.includes(arg));
// }


// console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8)); // [2, 3]
// console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15)); // [30, 15]
// console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64)); // [200]



