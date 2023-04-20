// 闭包 1

var foo = function() {
    var age = 18;
    var boo = function() {
        console.log(age);
    }
    return boo
}

var bar = foo() // 全局变量 bar 引用了  age

bar() // 执行完不清空执行上下文 , age 不会被清除 // 18
// bar() // 又因为上次 age 被 + 1，这次输出 19

// // 闭包 2
// function aoo() {
//     var a = 18;
//     return function() {
//         return ++a
//     }
// }

// console.log(aoo()()); // 此时并没有在全局接受，执行完清空上下文 //19
// console.log(aoo()()); // 第二次执行之前已经清空了执行上下文 //19
// console.log(aoo()()); // 19

// 闭包 3
function coo() {
    var b = 18;
    return function() {
        return --b; // 此时 -1
    }
}

var bqq = coo();

console.log(bqq()); // 17
console.log(bqq()); // 16
console.log(bqq()); // 15


// foo() // 在执行栈执行，但是保存的是一个地址 0x001
        
// function foo() { // 编译到函数就会去内存为函数开辟一个空间 0x001，在执行栈创建执行上下文,并且创建 AO 对象里面放置函数体，最后才可以执行
//    var age = 18;
//    console.log("BE RUN");
//    function wll() { // 第一次 foo 被声明只会给个地址开辟一个空间 0x002
//     console.log(gender); // undefied, AO 对象中还都是 undefied,会执行打印和赋值，但是不能打印还没来得及赋值的属性
//     var gender = "girl";
//    }
//    return wll
// }
// // console.log(age); // undefined
// var bar = foo(); // bar is global object
// bar()

// var gpp = foo
// console.log(gpp);


