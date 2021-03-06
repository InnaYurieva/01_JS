/* Задание 15
Написати ф-ю median яка приймає масив і знаходить його медіану Медіана – це числове значення, яке ділить відсортований масив чисел на більшу і меншу половини. У
відсортованому масиві з непарним числом елементів медіана – це число в середині масиву. Для масиву з парним числом елементів, де нема ні одного елемента точно посередині, медіана – це середнє значення двох чисел, які знаходяться в середині масиву. В цій задачі заданий непустий масив натуральних чисел. Вам потрібно знайти медіану даного масиву. */

/* const median = (arr) => {
    let a = Math.floor(arr.length / 2)
    
    let b = arr[arr.length / 2]
    let c = arr[arr.length / 2 - 1]
    if(arr.length % 2) {
      return arr[a] 
    }  return (b + c) / 2
  }
  
  console.log(median([1, 2, 3, 4, 5]));  // 3
  console.log(median([3, 6, 10, 15, 20, 99])); // 12.5 */

//=========================================
/* Гуд, но надо бы подправить.
1. Не надо let, если переменную не перезаписываешь, используй const
2.
if (arr.length % 2) {
    return arr[a];
} написано после обьявления переменных b и c, то есть если этот кейс сработает, эти переменные были созданы напрасно,
лучше прописать этот кейс сразу после обьявления переменной a. */

/* const median = (arr) => {
  let a = Math.floor(arr.length / 2)
  if(arr.length % 2) {
    return arr[a] 
  }  return ((arr[arr.length / 2]) + (arr[arr.length / 2 - 1])) / 2
} */

//РЕШЕНИЕ 2
const median = (arr) => {
  const a = Math.floor(arr.length / 2)
  if(arr.length % 2) {
    return arr[a] 
  } 
  const b = arr[arr.length / 2]
  const c = arr[arr.length / 2 - 1]
  return (b + c) / 2
}
  
console.log(median([1, 2, 3, 4, 5]));  // 3
console.log(median([3, 6, 10, 15, 20, 99])); // 12.5