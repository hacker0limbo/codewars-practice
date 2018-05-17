// 今天没有做题, 因为有复活节的兔子要来拜访我家

var say = function() {
    console.log(this.name);
}
var o1 = {
    name: 'a',
    say: say,
}
var o2 = {
    name: 'b',
    say: say,
}
console.log(o1.say.apply(o2));

function foo() {
    console.log(this.a);
}
var obj = {
    a: 2,
    foo: foo
};
var bar = obj.foo; // 函数别名！
var a = "oops, global"; // a 是全局对象的属性
bar(); // "oops, global"

// 这里的 foo 仅仅是作为一个函数体传给 bar, 但是 obj 这个对象并没有调用他,
// 所以在调用这个函数体的时候还是 window 对象调用
// 但是如果写成 obj.bar() 会报错, 因为地址有误
