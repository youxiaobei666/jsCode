// var obj = {
//     name: "刘德华",
//     age: 16,
//     run: function() {
//         console.log("i am running")
//     }
// }
// delete obj.name; // 删除对象某个属性
// console.log(obj); // {age:16, run: ƒ}

// obj.gender = "男" // 添加某个属性
// console.log(obj) // {}

// // 创建对象的方法，1.字面量，2. 先new Object()再依次赋值，比如：
// var obj = new Object();
// obj.name = "王德发";
// obj.age = 23;
// obj.walk = function() {
//     console.log(this.name + " is walking");
// }
// obj.walk(); // "王德发 is walking"



// // 基础，对对象属性操作
// delete obj.name; // 删除对象某个属性
// console.log(obj); // {age: 23, walk: ƒ}
// obj.gender = "男"; // 添加新的属性
// console.log(obj); // {age: 23, gender: '男', walk: ƒ}

// // 属性操作 Object.definePropoty() 方法
// Object.defineProperty(obj,"address",{
//     value: "南昌市",          //（基本属性）属性初始值
//     writable: true,          //（基本属性）值是否可修改
//     configurable: false,     // (数据属性）不可 delete 删除,不可修改特性，不可修改切换为存储属性
//     enumerable: true,        //（数据属性）可for-in枚举遍历，可Object.keys()返回
// })

// var obj = {
//     name: "刘德华",
//     age: 16,
//     _address: "天津市", 
//     run: function() {
//         console.log("i am running")
//     }
// }
// console.log(obj);
// Object.defineProperty(obj,"address",{
//     configurable: true, //默认为true
//     enumerable: false, // 默认为true
//     get: function() { // 取
//         return this._address
//     },
//     set: function(value) { // 存
//         this._address = value;
//     }
// })
// console.log(obj.address) // 天津市
// obj.address = "茂名市";
// console.log(obj.address); // 茂名市
// console.log(Object.keys(obj)); // ['name', 'age', '_address', 'run'] 无法遍历出 address

// // 测试可修改 writable
// obj.address = "九江市"
// console.log(obj.address); // 九江市
// // 测试不可配置-删除
// delete obj.address
// console.log(obj.address); // 九江市
// // 不可配置-修改为存取属性
// // Object.defineProperty(obj,"address",{ // 报错：Uncaught TypeError:Cannot redefine property: address
// //     get(){}, // 取
// //     set(){}, // 存
// // })
// // 测试可枚举
// for(var key in obj) {
//     console.log(key); 
//     // age
//     // walk
//     // gender
//     // address
// }

// ----------------------------------------


// // 函数原型，是一个对象 Object
// foo.prototype.name = "张三"

// function foo() {
//     console.log(this.name); // "张三"
// }

// console.log(foo.prototype); // Object，函数原型为 Object 对象

// var bar = new foo() // 

// console.log(bar.name); // 张三



// // 对象原型
// var obj1 = {
//     age: 18,
// }
// obj1.__proto__.name = "李四" // 给原型添加一个属性，通过此原型构造的对象都会有此值

// console.log(obj1.name); // 李四
// console.log(obj1); // { age:18 } 


// var obj2 = new Object // 通过 new Object 方法构造新的对象，此对象的原型已经被添加了属性
// console.log(obj2); // {} 
// console.log(obj2.name); // "李四"

// Object.defineProperty(obj1,"gender",{
//     value: "男"
// })

// console.log(obj1.gender); // 男

// // Object.defineProperties
// var obj3 = {

// }
// Object.defineProperties(obj3, {
//     name: {
//         value: "刘德华"
//     },
//     sing: {
//         value: function() {
//             console.log("i am singing");
//         }
//     }
// })

// obj3.sing() // "i am singing"

// // 构造函数构造对象
// var Person = function(name,age) {
//     this.name = name;
//     this.age = age;
//     this.sing = function() {
//         console.log("i am sing");
//     }
// }

// var person1 = new Person("王大猫",19);
// console.log(person1.name); // "王大猫"
// person1.sing() // "i am sing"

// // 再次建一个新的 person2
// var person2 = new Person("王大王",20);
// console.log(person2.name);
// console.log(person2);
// console.log(person1.sing === person2.sing); // false，两次构造出了不同的 sing 函数

// // 解决方案,通过构造函数原型赋方法
// Person.prototype.run = function() {
//     console.log("i am running");
// }

// var person3 = new Person("猫大王",21);
// var person4 = new Person("大猫王",22);
// console.log(person3.run === person4.run); // true，构造函数原型上有一个 run 方法，两个对象共同使用，是同一个函数


// // 构造函数本身也有原型，被其构造出来的对象使用 obj.__proto__ 得到的原型与之相同（与其 构造函数.prototype）

// // getOwnPropertyDescriptors // 获取变量描述符
// var res = Object.getOwnPropertyDescriptors(Person.prototype) // 获取描述符，发现可读写、可配置，不可遍历
// console.log(res);
// // console.log(Person.prototype.constructor.prototype);

// // 修改原型，赋值为对象，constructor: Person
// Person.prototype = { // or person3.prototype
//     constructor: Person,
//     name: "狗砸",
//     age: 24,
//     laugh: function() {
//         console.log("i am laughing");
//     }
// }

// var person5 = new Person()
// console.log(person5.name); //undefined 无法遍历就无法取值
// console.log(person5.__proto__); // 狗砸
// Object.defineProperty(Person.prototype,"constructor",{
//         value: Person,
//         writable: true,
//         enumerable: false,
//         configurable: true
    
// })

// console.log(person5); 


// // -------------
// var person1 = {
//     name: "obj1",
//     age: 18,
// }
// var person2 ={// 字母量创建一个对象
//     gender: "girl"
// } 
// person1.__proto__.perosnif = "是人类" // 给原型添加属性
// console.log(person2.perosnif); // 是人类
// console.log(person2.name); // undefined
// console.log(person2.gender); // girl

// person1.__proto__.sing = function() {
//     console.log("singing");
// }

// console.log(person1.sing === person2.sing); // true

// // Person 构造函数
// function Person(name,age) {
// 	this.name = name;
// 	this.age = age;
// 	this.sing = function() {
// 		console.log("singing")
// 	}
// }

// var person1 = new Person("张三",18)
// var person2 = new Person("李四",19)

// console.log(person1.sing === person2.sing); // false

// Person 构造函数
function Person(name,age) {
	this.name = name;
	this.age = age;
}

Person.prototype.sing = function() {
    console.log(this.name + " is singing");
}

var person1 = new Person("张三",18)
var person2 = new Person("李四",19)

console.log(person1.sing === person2.sing); // true
person1.sing() // 张三 is singing

