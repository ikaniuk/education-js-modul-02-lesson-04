// Модуль 2. Заняття 4. Функції
// Example 1 - Індекс маси тіла
// Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс маси тіла людини.
// Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини в метрах.

// Вага та висота будуть спеціально передані як рядки.
// Не цілі числа можуть бути задані у вигляді 24.7 або 24, 7,
// тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

// function calcBMI(weightParametr, heightParametr) {
//     const weight = Number.parseFloat(weightParametr.replaceAll(',', '.'));
//     const height = Number.parseFloat(heightParametr.replaceAll(',', '.'));
//     const BMI = weight / Math.pow(height, 2);
//     return Number(BMI.toFixed(1))

// }

// const BMI = calcBMI('88,3', '1.75');
// console.log(BMI)


// Example 2 - Найменше з чисел
// Напиши функцію min(a,b), яка повертає найменше з чисел a та b.
// function min(a, b) {
//     return a < b ? a : b;
// }

// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1


// Example 3 - Площа прямокутника
// Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами,
// значення яких будуть передані до параметра dimensions у вигляді рядка.
// Значення гарантовано розділені пробілом.

// function getRectArea(dimensions) {
//     const array = dimensions.split(' ');
//     const area = array[0] * array[1]
//     return area;
// }

// console.log(getRectArea('8 11'));


// Example 4 - Логування елементів
// Напиши функцію logItems(items), яка отримує масив та використовує цикл for,
// який для кожного елемента масиву буде виводити в консоль повідомлення у
// форматі < номер елемента > - <значення елемента>.
// Нумерація елементів повинна починатися з 1.

// Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з
// індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.

// function logItems(items) {
//     for (let i = 0; i < items.length; i += 1){
//         console.log (`${i+1} - ${items[i]}`);
//     }
// }

// logItems(['Mango', 'Poly', 'Ajax']);


// Example 5 - Логування контактів
// Напиши функцію printContactsInfo(names, phones) яка виводить у консоль ім'я
// та телефонний номер користувача.У параметри names та phones будуть передані рядки імен
// та телефонних номерів, розділені комами.Порядковий номер імен та телефонів у рядках
// вказують на відповідність.Кількість імен та телефонів гарантовано однакова.

// function printContactsInfo(names, phones) {

//     const arrayOfNames = names.split(',');
//     const arrayOfPhones = phones.split(',');
    
//     for (let i = 0; i < arrayOfNames.length; i += 1){
//         console.log(`${arrayOfNames[i]} - ${arrayOfPhones[i]}`);
//     }
// }

// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300',
// );


// Example 6 - Пошук найбільшого елемента
// Напиши функцію findLargestNumber(numbers)яка шукає найбільше число в масиві.
// function findLargestNumber(numbers) {
//     let largestNumber = numbers[0];
//     for (const number of numbers) {
//         if (number > largestNumber) {
//             largestNumber = number;
//         }
//     }

//     return largestNumber;
// }

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83