/* Задание 5
Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку. Функция проверяет ее на содержание слов spam и sale. Если нашли запрещенное слово то функция возвращает true, если запрещенных слов нет функция возвращает false. Слова в строке могут быть в произвольном регистре. */

/* const checkForSpam = function(message) {
  let messageWiew = message.toLowerCase();
  console.log(messageWiew);
  if (messageWiew.includes('spam') || messageWiew.includes('sale')) {
    return true
  }
  return false
}; 
 */



//=============================================================================
/* Норм, но есть момент. Возвращать булевые значения явно не нужно, ведь includes тебе и так возвращает буль.
Все намного проще - return messageWiew.includes("spam") || messageWiew.includes("sale"); */
const checkForSpam = function(message) {
  let messageWiew = message.toLowerCase();
  return messageWiew.includes('spam') || messageWiew.includes('sale')
}; 

console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
