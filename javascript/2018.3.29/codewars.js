var a = 'global'
var obj = {
    a: 'inner',
}
var f = function() {
    return this.a
}
console.log(f());
console.log(f.call(obj));

// 回调函数的this

var a = "global"

function foo() {
    console.log(this.a);
}
function doFoo(fn) {
    var a = 'doFoo'
    fn()// 这里时 fn() 函数的调用位置, 在这里没有任何对象引用他
}
var obj = {
    a: 2,
    foo: foo
};
doFoo(obj.foo); // "global"

var o = {
    a: {
        
    }
}
