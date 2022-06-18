/* Задание 14
Написати ф-ю яка приймає масив і видаляє звідти всі унікальні елементи */

//const nonUniqueElements = (arr) => {
//console.log(arr.indexOf(10));
//console.log(arr.lastIndexOf(10));
//let a = [...new Set(arr)]
/*  let a = arr.filter((item, index) => {
    return index !== arr.indexOf(item) 
  })
  return a */

//РЕШЕНИЕ
/*   const nonUniqueElements = (arr) => {
    //console.log(arr.indexOf(10));
    //console.log(arr.lastIndexOf(10));
  let a = arr.filter((elem, index, array) => {
    return index !== array.indexOf(elem) || index !== array.lastIndexOf(elem)
  })
  return a
} */

/* const nonUniqueElements = (arr) => {
  let uniq = new Set();
  let uniqSum = 0;
  let numSum = 0;
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (!uniq.has(element)) {
      uniq.add(element);
      uniqSum += element;
    }
    numSum += element;
  }
  return uniqSum * 2 - numSum;
}; */

//===========================================================

/* 14_03.js. Если решение твое, апплодирую стоя! Супер!
1. Придирка - можно коротко и без переменной a
const nonUniqueElements = (arr) =>
  arr.filter(
    (elem, index, array) =>
      index !== array.indexOf(elem) || index !== array.lastIndexOf(elem)
  );
2. Задача не решена, так как просят удалять элементы из переданного в функцию массива, а не возвращать новый.
Я имею ввиду что должно быть так:
const numbers = [1, 2, 3, 1, 3];
nonUniqueElements(numbers);
console.log(numbers); // у тебя тут будет [1, 2, 3, 1, 3], то есть он не изменился, а должно быть [1, 3, 1, 3]
Но особо не парься по этому поводу. На занятии обсудим мутабельность и иммутабельность. */

const nonUniqueElements = (numbers) => {
  let arr = []
  for (let index = 0; index < numbers.length; index++) {
    let element = numbers[index];
    //console.log(arr[element]);
    if(arr[element] == undefined) {
      arr[element] = 0
    }
    arr[element]++
    //console.log(arr[element]);
  } 
  let uniqArr = []
  for (let index = 0; index < numbers.length; index++) {
    let element = numbers[index];
    //console.log(uniqArr[element]);
    //onsole.log(arr[element]);
    if(arr[element] > 1) {
      uniqArr.push(element)
    }
  } return uniqArr
  
} 


console.log(nonUniqueElements([1, 2, 3, 1, 3])); // [1, 3, 1, 3]
console.log(nonUniqueElements([1, 2, 3, 4, 5])); // []
console.log(nonUniqueElements([5, 5, 5, 5, 5])); // [5, 5, 5, 5, 5]
console.log(nonUniqueElements([10, 9, 10, 10, 9, 8])); // [10, 9, 10, 10,9]
console.log(nonUniqueElements([1, 2, 3, 1, 3, 66, 66, 66]))


