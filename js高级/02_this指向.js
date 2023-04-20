// console.log(this); // window

// function foo() {
//     console.log(this);
// }

// foo() //独立函数调用、自执行会绑定为 window

// // 立即执行函数

// (function foo() {
//     console.log(this); // window
// })()

// var obj = {
//     age: 18,
//     gender: "nan",
//     foo : function() {
//         console.log(this);
//     }
// }

// obj.foo() // 默认绑定，谁调用谁就是 this

// var obj1 = {
//     age: 18,
//     gender: "nan",
//     foo : function() {
//         console.log(this);
//     }
// }

// var obj2 = {
//     name: "obj2"
// }
// var newfoo = obj1.foo.bind(obj2);
// newfoo(); // obj2
// // 使用 call\apply\bind,传入参数就是this,
// // bind 绑定但是并不执行，会返回一个新的函数
// foo.call(123) // 123
// foo.apply("abc") // abc

// // 互相调用
// function foo1() {
//     foo2();
//     console.log(this); // window
// }

// function foo2() {
//     foo3();
//     console.log(this); // window
// }

// function foo3() {
//     console.log(this); //window，本质上都是独立执行
// }

// foo1() // 开启调用

// // 函数作为参数 1
// function foo(funArg) {
//     funArg();
// }

// function bar() {
//     console.log(this); // window
// }

// foo(bar)

// // 函数作为参数 2
// var obj = {
//     message: '',
//     pee: function() {
//         console.log(this); //window
//     }
// }

// foo(obj.pee) // 虽然可见 obj.pee 可是只是为了传递参数，并没隐式绑定 obj

// // 对象互相绑定
// var bar = function() {
//     console.log(this);
// }

// var obj1 = {
//     name: "obj1",
//     foo: bar
// }

// var obj2 = {
//     obj1: obj1,
//     name:"obj2"
// }

// obj2.obj1.foo() // obj1

// // 隐式丢失
// var bar = function() {
//     console.log(this); // window ,此时还是独立调用
// }

// var obj = {
//     name: "obj",
//     bar: bar
// }

// var foo = obj.bar

// foo() // window , 丢失了隐式绑定的 obj

// // call 和 apply 的区别，apply 传入数组，call 传入参数列表
// foo.call()
// foo.apply()

// // 显示绑定高于隐形绑定
// var foo = function() {
//     console.log(this); // "abc"
// }

// var obj = {
//     foo: foo
// }

// obj.foo.apply("abc")

// // new 绑定
// function Person(name) {
//     this.name = name;
//     console.log(this); // Person { name : "张三"}
// }

// var person = new Person("张三")
// console.log(person); // Person { name : "张三"}
// console.log(typeof(person)); // object

// // new 绑定的优先级
// function foo() {
//     console.log(this); // foo {}
//     console.log(typeof(foo)); // function
// }

// var obj = {
//     foo: foo
// }

// var bar = new obj.foo()
// console.log(typeof(bar)); // object

// // 忽略显示绑定：在绑定的时候传入 null 或者 undefined 会忽略显示绑定, 使用默认的绑定
// var foo = function() {
//     console.log(this);
// }

// function koo() {
//     console.log(this);
// }

// var obj = {
//     name: '张三',
//     bar: foo
// }
// obj.bar.call(obj) // obj
// obj.bar.apply(null) // window,并不会隐式，而是 window
// obj.bar.apply(undefined) // window
// foo.apply(obj) // obj
// koo.apply(obj) // obj
// console.log(typeof(obj)); // object

// var point = () => {
//     console.log(this); // window

// }

// point.call("abc")

// // 计时器不绑定上层作用域解决方案
// var obj = {
//   message: "你好",
//   bar: function () {
//     var that = this;
//     setInterval( () => { // 换成箭头函数，回去上级作用域找
//       console.log(that); // obj
//       console.log(that.message); // "你好"
//     }, 1000);
//   },
// };

// obj.bar();

function foo() {
    name = "ss"
    console.log(this.name);
}

foo()
