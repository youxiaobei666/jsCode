// /**
//  * forEach
//  */

// let arr = [1, 2, 3];

// // 定义一个总和
// let sum = 0;
// arr.forEach((item, index, arr) => {
//   sum = sum + item;
// });

// console.log(sum); // 6

// /**
//  * unshift
//  */
// arr.unshift(-1, 0);

// console.log(arr);

/**
 * concat
 */

// let arr1 = ["你好"];
// let arr2 = ["明天"];

// let arr3 = arr1.concat(arr2);
// let arr4 = arr3.concat(arr2, arr1);

// console.log(arr3); //[ '你好', '明天' ]
// console.log(arr4); //[ '你好', '明天', '明天', '你好' ]

/**
 * some/every
 */

// let arr = ["是", "不是"];

// let res = arr.some((item) => {
//   return item === "是";
// });

// let res1 = arr.every((item) => {
//   return item === "是";
// });

// console.log(res); // true
// console.log(res1); // false

/**
 * find/findIndex
 */

// let arr = [{ name: "youxiaobei" }, { name: "jacketYou" }];

// let res = arr.find((item) => {
//   return (item.name = "youxiaobei");
// });

// let resIndex = arr.findIndex((item) => {
//   return (item.name = "youxiaobei");
// });

// console.log(res); //{ name: 'youxiaobei' }
// console.log(resIndex); // 0

/**
 * join/toString
 */

// let arr = [1, 2, 3, 4];

// let res = arr.join("@");

// console.log(res); //1@2@3@4

// let res1 = arr.toString("传了也没用");

// console.log(res1); // 1,2,3,4

/**
 * indexOf/lastIndexOf
 */

let arr = [9, 7, 3, 5, 9];

let res = arr.indexOf(3);
let res1 = arr.indexOf(4);

let res3 = arr.lastIndexOf(9);

console.log(res); // 2
console.log(res1); // -1

console.log(res3); // 4
