// var go = "我是全局变量 global object"

// function foo() {
//     var vo = "我是局部变量 variable object"
//     var age = 18;
// }

// var name = "张三"; // 全局属性
// var age = 18;
// var gender = "男";
// var person = { // 全局执行上下文的一个对象，保存的是一个地址
//     name: "李四", // 在内存中开辟空间去存放
//     age: 20
// }
// // 全局方法
// var foo = function() {
//     var hobby = "篮球"; // 函数局部属性
//     console.log("你好");
//     console.log(name); // 张三，沿着作用域链往上找到全局中的 name，而不是 person 对象中的
//     console.log("你好");
//     console.log(person.name); // 李四
// }
// foo()
// console.log(hobby); // undefined
// console.log(name); // "张三"， 只能访问全局的变量

// // bar 会被销毁
// var foo = function() {
//     var bar = function() {
//         var role = "玄武";
//         console.log(role); // "玄武"
//     };
//     return bar;
// };
// foo()
// console.log(bar); // undefined, foo 执行完被销毁
// // console.log(foo);

// // bar 不会被销毁
// var foo = function() {
//     var bar = function() {
//         var role = "玄武";
//         console.log(role); // "玄武"
//     };
//     return bar;
// };
// var bar = foo();
// bar(); // "玄武"
// console.log(bar); // bar 在全局不会被销毁

// // 全局方法
// var foo = function() {
//     var role = "玄武";
//     var bar = function() {
//         console.log(role); // "玄武"
//     };
//     return bar;
// };
// var bar = foo();
// bar(); // 玄武， 虽然 bar 里没有，但是 foo 里面有定义，可以向上查找取到

// function koo() {
//     function foo() {
//         bar() // bar 被引用
//     }

//     function bar() {
//         foo() // foo 又被引用
//     }
//     foo() // Maximum call stack size exceeded 栈溢出
// }

// koo()

// function foo() {
//     var object1 = {
//         name: "object1",
//         obj: object2,
//     };
//     var object2 = {
//         name: "object2",
//         obj: object1,
//     };
//     console.log(object1); // {name: 'object1', obj: undefined}
//     console.log(object2); // {name: 'object2', obj: {name:object1,obj:undefined}}
// }
// foo()

// function foo() {
//     name = "张三";
//     console.log(name); // "张三"
// }
// foo()

// console.log(name); // "张三"
// console.log(window);

// function bar() {
//     var name = "张三";
//     console.log(name); // "张三"
// }
// bar()

// console.log(name); // ""
// console.log(window); // ""

// 定时器内存泄露

// function foo() {
//     var age = 18; // 被引用，计时器不结束就不销毁
//     setInterval(()=>{
//         console.log(age);
//     },1000)
// }

// foo()
