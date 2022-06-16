/* Задание 1
Напиши функцию logItems(array), которая получает массив и использует цикл for, который для каждого элемента массива будет выводить в консоль сообщение в формате [номер элемента] - [значение элемента].
Нумерация должна начинаться с 1. К примеру для первого элемента массива ['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'.
const logItems = function(array) {
  твой код
}; */


/* const logItems = function(array) {
    for (let index = 0; index < array.length; index++) {
        let element = array[index];
        console.log((index+1) + ' ' + element);

    }
  };
 */

  

//======================================================================
//Гуд. Можно еще выводить в консоль через шаблонную строку
//Добавила ещё 1 решение - посмотри, пожалуйста
const logItems = (array) => {
  let arrReduce = array.reduce((acc, item, index) => {
    console.log(`${index+1} ${item}`)
  }, 0)
  return arrReduce
}

//скорректировала
/* const logItems = function(array) {
    for (let index = 0; index < array.length; index++) {
        let element = array[index];
        console.log(`${index+1} ${element}`);

    }
  }; */


logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']); ;
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]); 