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