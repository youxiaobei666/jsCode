// 浅拷贝，注意引用对象地址的问题

let obj1 = { name: "Lucy", age: 18, info: { hobby: "唱跳 rap" } };
let obj2 = Object.assign({}, obj1);
console.log(obj2); // 输出 { name: 'Lucy', age: 18, info: { hobby: '唱跳 rap' } }

obj2.age = 20;
console.log(obj1.age); // 输出 18

obj2.info.hobby = "睡觉";
console.log(obj1); //{ name: 'Lucy', age: 18, info: { hobby: '睡觉' } }

// 深拷贝

let obj1 = { name: "Lucy", age: 18, hobbies: ["reading", "swimming"] };
let obj2 = JSON.parse(JSON.stringify(obj1));
console.log(obj2); // 输出 { name: 'Lucy', age: 18, hobbies: [ 'reading', 'swimming' ] }

obj2.hobbies.push("running");
console.log(obj1.hobbies); // 输出 [ 'reading', 'swimming' ]
