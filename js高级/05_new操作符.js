// /**
//  * Person 构造函数
//  * prop1: string
//  * prop2: number
//  */
// const Person = function (prop1, prop2) {
//   var name, age;
//   this.name = prop1;
//   this.age = prop2;
//   if (prop1 && prop2) {
//     return null;
//   } else {
//     return { name, age };
//   }
// };

// const person = new Person("刘德华", 50);

// console.log(person); // Person { name: '刘德华', age: 50 }
// console.log(typeof person); //object

// /**
//  * 简单实现 new 运算符
//  */
// const myNew = function (constructorFn, ...args) {
//   // 1. 创建一个空对象，并将其原型指向构造函数的原型对象
//   var obj = Object.create(constructorFn.prototype);

//   // 2. 将构造函数作为普通函数调用，并把空对象作为 this 传递进去
//   var result = constructorFn.apply(obj, args);

//   // 3. 如果构造函数返回了一个非空对象，则返回该对象；否则，返回创建的空对象
//   return result !== null && typeof result === "object" ? result : obj;
// };

// // 非空
// const star = myNew(Person, "王力宏", 40);
// console.log(star); // Person { name: '王力宏', age: 40 }
// console.log(typeof star); //object

// // 空,没有参数

// const nullStar = myNew(Person);

// console.log(nullStar); //Person { name: undefined, age: undefined }

/**
 *
 * @param {string} constructorFn
 * @param  {...ang} args
 *
 * 自定义构造函数
 */
const myNew = function (constructorFn, ...args) {
  // 创建一个空对象
  const obj = {};

  // 绑定 obj 的原型为构造函数的原型
  //   obj.__proto__ = constructorFn.prototype;
  // 或者使用 Object.setPrototypeOf()
  Object.setPrototypeOf(obj, constructorFn.prototype);

  // 绑定 this，并返回一个结果，有可能是一个对象或者其他
  // 在这里分两种情况，如果为对象，应返回这个对象
  // 如果是一个值或者是没返回值，就返回我们定义好的新对象
  const result = constructorFn.apply(obj, args);

  // 按照 构造函数的返回类型返回值
  return typeof result === "object" ? result : obj;
};

/**
 *
 * @param {string} name
 * @param {number} age
 */
const Person = function (name, age) {
  this.name = name;
  this.age = age;
};

// 在构造函数原型上添加一个方法
Person.prototype.sing = () => {
  console.log("person is singing");
};

// 使用自定义的 myNew 构造一个对象，并且传入对应的参数
const person = myNew(Person, "joker", 50);

// 打印新生成的对象
console.log(person); // Person { name: 'joker', age: 50 }

// 新对象可以获取到原型的方法
person.sing(); // person is singing
    