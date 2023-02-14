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

// let randomValue = Math.floor(Math.random() * 101);
//       let attempt = 0;
//       alert("я загадал случайное значение от 0 до 100");

//       while (true) {
//         attempt++; // увеличили количество попыток
//         let currentValue = prompt("Попробуйте угадать. Введите значение");

//         if (currentValue == "стоп") {
//           break;
//         }

//         if (currentValue > randomValue) {
//           alert(`Я загадал значение меньше чем ${currentValue}`);
//         } else if (currentValue < randomValue) {
//           alert(`Я загадал значение больше чем ${currentValue}`);
//         }
//         if (currentValue == randomValue) {
//           alert(`Правильно! Загаданное значение ${randomValue}. Вы угадали с ${attempt}й попытки.`
            
//           );
//           break;
//         }
//       }

