# this 关键字
this 的绑定与指向

## 重点

1. 只有一个**对象**调用了包含`this`函数时，`this`才被赋值，并且所赋的值只依赖于调用了包含`this`函数的对象
2. 当`this`在一个函数内出现的时候，`this`指向**调用**这个函数的对象
<!-- ~~3. 每个函数的`this`都是在调用时被绑定的, 完全取决于函数(对象)的*调用位置*, 即函数(对象)的调用方法~~ -->

## 调用栈和调用位置

调用栈: 为了达到当前执行位置所调用的所有函数
调用位置: 这里位置指当前正在执行的函数的前面一个调用(函数)

```js
function baz() {
    // 当前调用栈: baz
    // 因此当前调用位置: window
    bar() // <-- bar 的调用位置
}
function bar() {
    // 当前调用栈: baz -> bar
    // 因此当前调用位置: baz
    foo() // <- foo()的调用位置
}
function foo() {
    // 当前调用栈: baz -> bar -> foo
    // 因此, 当前调用位置在 bar 中
}
baz() // <- baz 的调用位置
```
调用顺序: window -> baz() -> bar() -> foo()

## 默认绑定(全局绑定)

函数调用类型: 独立函数调用

**例1**
```js
function foo() {
    console.log(this.a);
}
var a = 2
foo() // 2
```
由于函数也是对象, 因此这里的 this 指向的是 window 这个对象,
`this.a = window.a`

**例2**
```js
var name = 'global'
function a() {
    var name = 'inner'
    console.log(this); // window
    console.log(this.name); // global
}
a()
```
这里`a()`是在全局里面被调用, 所以这里的 this 指向 window 对象, name = window.name = this.name

## 隐式绑定

调用位置是否含有上下文对象, 或者说是否被某个对象拥有或者包含

```js
function foo() {
    console.log(this.a);
}
var obj = {
    a: 2,
    foo: foo,
}

obj.foo() //2
```

1. `foo()` 首先是在外部声明的, 然后再被当做引用属性添加到 `obj`
2. 无论是在 obj 中定义还是先定义再引用, 该函数都不书序 obj 对象
3. 在最后调用 foo 函数的时候回使用 obj 作为 foo 的上下文来引用, 可以认为 obj 对象 '拥有', 或者包含这个函数
4. 绑定规则: 这里会把函数调用里面的`this`绑定到这个上下文中, 这里的 `this.a = obj.a`

### 对象属性的引用链

对象属性的引用链中只有**最后一层**会影响调用位置, eg.
```js
function foo() {
    console.log(this.a);
}
var o2 = {
    a: 42,
    foo: foo,
}
var o1 = {
    a: 2,
    o2: o2,
}
o1.o2.foo() // 42
```
o1调用了o2, 但是o2调用了`foo()`, 所以实际上 this 还是指向 o2

### 隐式丢失
通常发生在将 含有`this`的函数体赋值给另一个变量的时候, 即*参数传递*, 这种情况下, this 会丢失
```js
function foo() {
    console.log(this.a);
}
var obj = {
    a: 'inner a',
    foo: foo,
}
// 这里的赋值只是将 foo 这个函数体赋值给了 bar, 实际并没有调用
// var bar = obj.foo() 这个才是调用, 同时obj 也只是在引用 foo 的函数体
var bar = obj.foo
var a = 'global a'
bar() // golbal a
```
这个例子的最后调用`bar()`=`foo()` 所以调用位置为全局

回调函数里面的this的丢失:
例子1:
```js
function foo() {
    console.log(this.a);
}
function doFoo(fn) {
    // fn 其实引用的是 foo
    fn()
}
var obj = {
    a: 'inner',
    foo: foo,
}
var a = 'global'

// 最后调用的时候实际上还是调用的 foo, obj 根本没有调用, 只是引用了
doFoo(obj.foo) // 'global'
```
例子2, DOM 内置函数
```js
var o = new Object();
o.f = function() {
    console.log(this === o);
}
// jQuery 的写法
$('#button').on('click', o.f);
```
这里的 this 是指向按钮的 DOM 对象, 而不是指向的 o

## 显式绑定
目的: 将调用函数的时候强制决定 this 的指向对象

### call
call 可以指定 this 的绑定的对象, 即函数调用位置
```js
var n = 'global'
var o = {
    n: 'inner',
}
function f() {
    console.log(this.n);
}

f.call(o) // 'inner'
f.call() // 'global'
```
#### 1. 硬绑定

由于将函数赋值给一个变量以后传给一个回调函数会发生绑定丢失, 如下:
```js
function foo() {
    console.log(this.a);
}
var o = {
    a: 'inner',
    foo: foo,
}
var a = 'global'
setTimeout(o.foo, 100) // 'global'

该setTimeout类似如下
function setTimeout() {
    // 等待delay 毫秒
    fn() // 调用位置
}
```
