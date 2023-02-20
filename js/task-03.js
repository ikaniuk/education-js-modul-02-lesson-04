// Напиши фукцнию findLongestWord(string), которая принимает параметром 
// произвольную строку(в строке будут только слова и пробелы) и возвращает самое длинное 
// слово в этой строке.

// const findLongestWord = function(string) {
//   // твой код
//     string = string.split(' ');
//     let longestWord = string[0];
    
//     for (const word of string) {
//         if (word.length > longestWord.length) {
//             longestWord = word
//         }
//     }

//     return longestWord
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

// console.log(findLongestWord('Google do a roll')); // 'Google'

// console.log(findLongestWord('May the force be with you')); // 'force'

// --------------------Chat GPT-----------------------
const findLongestWord = function(string) {
    let longestWord = '';

    for (const word of string.split(' ')) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
};