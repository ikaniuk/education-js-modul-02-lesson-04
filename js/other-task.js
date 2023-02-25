// ------------------------------Task-01---------------------------------------

// // Задание:
// // Создайте функцию min(a, b), которая возвращает меньшее из чисел а и b

// function minNumber(a, b) {
//     return  a < b ? a : b;
// }

// console.log(minNumber(1999, 1000));


// ------------------------Task-02--------------------------------------------------

// //  Задание:
// // Создайте функцию avg(a, b, c), которая возвращает среднее арифметическое для чисел a, b, c
// // Если параметр отсутствует - не используйте значение для расчета среднего арифметического
// // значения.

// function avg(...avg) {
//     let sum = 0;
//     let count = 0;
//     for (const value of avg) {
//         if (!isNaN(value)) {
//             sum += value;
//             count += 1;
//         }
//     }
//     return sum / count;
// }

// console.log(avg(1, 2, 3))
// console.log(avg(4, 5, 'fg'))
// console.log(avg('asd', 'a', 1, 1));



// ------------------------Task-05------------------------
// // Задание:
// // Создайте функцию, которая принимает массив значений и возвращает массив с
// // дублирующимися значениями или null если повторяющихся значений в массиве нет.

// function serchDuplicateNumbers(numbers) {
//     const duplicateNumbers = [];
//     for (let i = 0; i < numbers.length; i += 1){
//         for (let j = i + 1; j < numbers.length; j += 1){
//             if (numbers[i] === numbers[j]) {
//                 duplicateNumbers.push(numbers[i]);
//             }
//         }
//     }
//     if (duplicateNumbers.length > 0) {
//         return duplicateNumbers;
//     } else {
//         return null;
//     }
    
// }

// console.log(serchDuplicateNumbers([1, 2, 4, 1, 2]));
// console.log(serchDuplicateNumbers([1000, 20, 433, 1, 20]));
// console.log(serchDuplicateNumbers([1000, 20, 433, 1, 200]));
