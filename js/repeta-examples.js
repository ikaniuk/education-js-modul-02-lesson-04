/*
 * Напиши функцию calculateTotalPrice(items)
 * которая принимает массив цен (чисел) и возвращает их сумму
 */

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];

// function calculateTotalPrice(items) {
//     let totalPrice = 0;
//     for (const item of items) {
//         totalPrice += item;
//     }
//     return totalPrice;
// }
// console.log(calculateTotalPrice(cart));


/*
 * Напиши функцию logItems(items) для перебора и логирования массива
 */

// function logItems(items) {
//     for (const item of items) {
//         console.log(item);
//     }
// }

// logItems([1, 2, 3, 4, 5, 6]);
// logItems([5, 4, 3, 2, 1]);
// logItems(['клавиатура', 'наушники', 'часы']);


/*
 * Напиши функцию findLogin(allLogins, login) для поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 */

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];

// function findLogin(allLogins, loginToFind) {
   
//     return allLogins.includes(loginToFind)
//         ? `Пользователь ${loginToFind} найден.`
//         : `Пользователь ${loginToFind} не найден.`
// }

// console.log(findLogin(logins, 'dfghjk'));
// console.log(findLogin(logins, 'm4ngoDoge'));
// console.log(findLogin(logins, 'avocod3r'));
// console.log(findLogin(logins, 'k1widab3st'));
// console.log(findLogin(logins, 'jam4l'));
// console.log(findLogin(logins, 'poly1scute'));


/*
 * Напиши функцию findSmallesNumber(numbers) для поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */

// function findSmallesNumber(numbers) {
//     let smallesNumber = numbers[0];
//     for (const number of numbers) {
//         if (number < smallesNumber) {
//             smallesNumber = number;
//         }
//     }
//     return smallesNumber;
// }

// console.log(findSmallesNumber([3, 8, 12, -2, 15])); // -2
// console.log(findSmallesNumber([100, 54, 8, 12, 47])); // 8
// console.log(findSmallesNumber([7, 21, 84, 15, 4])); // 4


/*
 * Напиши функцию changeCase(string) которая заменяет регистр
 * каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */
// function changeCase(string) {
//     const letters = string.split('');
//     let changeString = '';
//     for (const letter of letters){
//         if (letter === letter.toUpperCase()) {
//            changeString += letter.toLowerCase();
//         } else {
//             changeString += letter.toUpperCase();
//         }
//     }
//     return changeString;


//     // for (const letter of letters) {
//     //     const isEqual = letter === letter.toLowerCase();
//     //     changeString += isEqual ? letter.toUpperCase() : letter.toLowerCase();
//     // }
//     // return changeString;

// }

// console.log(changeCase('qweRTY')); // QWErty
// console.log(changeCase('mAnGo')); // MaNgO
// console.log(changeCase('AjAx')); // aJaX


/*
 * Напиши функцию slugify(string) которая получает строку и возвращает URL-slug
 * Строка состоит только из букв и пробелов
 */
// function slugify(string) {
//     return string.toLowerCase().split(' ').join('-');
// }

// console.log(slugify('Top 10 benefits of React framework'));
// console.log(slugify('Azure Static Web Apps are Awesome'));
// console.log(slugify('Technical writing tips for non-native English speakers'));



// const fn = function (a, b, c, ...args) {
//   console.log(`${a} ${b} ${c}`);
//   console.log(args);
// };

// fn('hello', 1, 2, 3);
// fn('aloha', 1, 2, 3, 4, 5);
// fn('hi', 1, 2, 3, 4, 5, 6, 7);


/*
 * Напиши функцию add для сложения произвольного количества аргументов (чисел)
 * - Операция ... (rest)
 */

// function add(...args) {
//     let result = 0;
//     for (const arg of args) {
//         result += arg;
//     }
//     return result;
// }

// console.log(add(1, 2, 3));


/*
 * Напиши функцию filterNumbers(array [, number1, ...]) которая:
 * - первым аргументом принимает массив чисел
 * - после первого аргумента может быть произвольное количество других аргументов которые будут числами.
 * - Функция должна вернуть новый массив, в котором будут только те аргументы, начиная со второго,
 *   для которых есть аналог в оригинальном массиве.
 */

// function filterNumbers(array, ...args) {
//     const filterArray = [];
//     for (const element of args) {
//         if (array.includes(element)) {
//             filterArray.push(element)
//         }
//     }
//     return filterArray;
// }

// console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8)); // [2, 3]
// console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15)); // [30, 15]
// console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64)); // [200]