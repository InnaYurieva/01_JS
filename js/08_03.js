/* Задание 8. Написати ф-ю capitalize яка буде приймати строку
 і буде вертати нову строку де кожне слово буде починатися з великої літери. */
//capitalize('the quick brown fox') // 'The Quick Brown Fox '


let capitalize = (word) => {
  let arr = word.split(' ')
  let newArr = []
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    const result = element[0].toUpperCase() + element.slice(1, element.length);
    newArr.push(result)
  } return newArr.join(' ')
  

}
console.log(capitalize('the quick brown fox'));
//=====================================================================
//08_03.js. Гуд. Есть пара придирок.
//1. result не перезаписывается так что const result, а не let result
//2. в slice можно не передавать второй аргумент, все будет работать так же