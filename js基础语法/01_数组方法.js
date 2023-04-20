/**
 * splice 切割
 */

let arr1 = ["游小北", "youxiaobei", "JaketYou"];

// 增删改

let res1 = arr1.splice(0, 1, "增加一个元素", "再添加一个元素", 4);

// console.log(res1); // [ '游小北' ]

// console.log(arr1); // [ '增加一个元素', '再添加一个元素', 4, 'youxiaobei', 'JaketYou' ]

/**
 * slice
 */

let arr2 = ["游小北", "youxiaobei", "JaketYou"];

let res2 = arr2.slice(1, 3);

// console.log(res2); //[ 'youxiaobei', 'JaketYou' ]

// console.log(arr2); //[ '游小北', 'youxiaobei', 'JaketYou' ]

/**
 * pop
 */

let arr3 = ["游小北", "youxiaobei", "JaketYou"];

let res3 = arr3.pop();

// console.log(res3); //JaketYou
// console.log(arr3); //[ '游小北', 'youxiaobei' ]

/**
 * shift
 */

let arr4 = ["游小北", "youxiaobei", "JaketYou"];

let res4 = arr4.shift();

// console.log(res4); //游小北
// console.log(arr4); //[ 'youxiaobei', 'JaketYou' ]

/**
 * reduce
 */
let arr5 = [1, 2, 3];

// 第一种情况，加默认值，会多一次循环
const res = arr5.reduce((pre, item, index, arr5) => {
  console.log(pre);
  // 10;
  // 11;
  // 13;
  return pre + item;
}, 10);

console.log(res); //16

// 第二种不加默认值，少一次循环

const res5 = arr5.reduce((pre, item, index, arr) => {
  console.log(pre);
  // 1
  // 3
  return pre + item;
});

console.log(res5); // 6
