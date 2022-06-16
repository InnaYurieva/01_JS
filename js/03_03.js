/* Задание 3
Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.
const findLongestWord = function(string) {
  
}; */


//скорректировала
/*  const findLongestWord = function(string) {
    const arr = string.split(' ');
    arr.sort((a, b) => b.length - a.length);
    return arr[0]
  }  */

//это решение подсмотрела в интернете - ничего не меняла, оставила на будущее
/*   const findLongestWord = function(string) {
    let arr = string.split(' ');
    let longestWord = arr.reduce((total, longest) => {
        if (longest.length > total.length) {
            return longest
        } else {
            return total
        }
    }, "")
    return longestWord
  }
 */

//=================================================================================================================
  
  /* 03_03.js. Решение есть, оно работает и это хорошо. Но надо бы поправить.
Первое: let sort = arr.sort((a, b) => b.length - a.length); - тут создается переменная sort,
которая нигде потом не используется, то есть она не нужна, можно просто arr.sort((a, b) => b.length - a.length);
Второе(придирка) - переменную arr ты нигде не перезаписываешь, соответсвенно не let arr а const arr
Третье - Сортировка очень трудоемкая операция, которая жрет много производительности и ее желательно использавать
только в том случае когда нам реально надо получить отсортированные данные.
Решение из инета хорошее, попробуй реализовать его, только через цикл for и переменную результата.
 */

const findLongestWord = function(string) {
    let arr = string.split(' ');
    let wordLength = 0
    for (let index = 0; index < arr.length; index++) {
        wordLength = arr[1].length;
          if (wordLength < arr[index].length) {
            return arr[index]
        }
    } 
  }


console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'
console.log(findLongestWord("Google do a roll")); // 'Google'
console.log(findLongestWord("May the force be with you")); // 'force'

