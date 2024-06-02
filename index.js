const capitalizeStrings = (arr) =>
  arr.map((el) => `${el.at(0).toUpperCase()}${el.slice(1).toLowerCase()}`);

const words = ["apple", "banaNA", "kiWi", "ORANGE"];
console.log(capitalizeStrings(words)); // ["Apple", "Banana", "Kiwi", "Orange"]
/////////////////////////////////////////////////////////////////////////////
const findCommonElements = (arr1, arr2) => {
  const uniqueVal = (arr) => arr.filter((el, id) => arr.indexOf(el) === id);
  const generalElement = (arr) =>
    arr.filter((el, id) => arr.indexOf(el) !== id);
 
  return generalElement(uniqueVal(arr1).concat(uniqueVal(arr2)));

};

const array1 = [1, 2, 3, 4, 5, 5, 3, 3, 5];
const array2 = [3, 4, 5, 6, 5, 3, 3, 3];
console.log(findCommonElements(array1, array2)); // [3, 4, 5]
///////////////////////////////////////////////////////

const analyzeArray = (arr) => {
  return (newObject = {
    sum: arr.reduce((acc, cur) => acc + cur, 0),
    average: arr.reduce((acc, cur) => acc + cur, 0) / arr.length,
    min: Math.min(...arr), 
    max: Math.max(...arr), 
  });
};

const numbers = [1, 2, 3, 4, 5];

console.log(analyzeArray(numbers)); // { sum: 15, average: 3, min: 1, max: 5 }

//1. Напишіть функцію capitalizeStrings, яка приймає на вхід масив рядків і повертає новий масив, у якому кожен рядок має першу літеру у верхньому регістрі, а решту літер - у нижньому регістрі.
//2. Напишіть функцію findCommonElements, яка приймає на вхід два масиви і повертає новий масив, що містить елементи, які є в обох вихідних масивах.
//3. Напишіть функцію analyzeArray, яка приймає на вхід масив чисел і повертає об'єкт з такими властивостями:
/*sum - сума всіх елементів масиву
average - середнє значення елементів масиву
min - мінімальне значення в масиві
max - максимальне значення в масиві*/
