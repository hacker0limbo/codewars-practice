// NOTE: for in, for of, forEach 区别
// http://es6.ruanyifeng.com/#docs/iterator#for---of-%E5%BE%AA%E7%8E%AF
/*
1. for of
    可以用来遍历数组, 其中结果是每个数组的元素值, 类似于 forEach 中对每个元素的操作
    可以使用 break, continue
    问题:
        1. 无法对对象遍历, 要使用 Iterator 接口
    场景:
        1. 字符串, 数组值(操作, 遍历, 也可以遍历索引), 对象(先使用 Ogject.keys, 再使用 for of)
        2.
2. for in
    一般只用来遍历对象, 来获取对象的属性
    如果用来遍历数组, 返回的是数组的索引
3. for each
    只能用来对每个数组里面的元素进行操作, 无法使用 break, 或者 continue
*/

// NOTE for of 语法

// 1. 遍历字符串
// 获取值
var s = 'abc'
for (let i of s) {
    console.log(i); // a, b, c
}
// 2. 获取每个字母的索引
// 该方法获取的是数字
var sArray = s.split('')
for (let i of sArray.keys()) {
    console.log(i);
}
// 或者仍旧使用 for循环

// 3.遍历数组
// 获取值
var arr = [4, 6, '3']
for (let i of arr) {
    console.log('i-value', i);
}

// 获取索引
for (let i of arr.keys()) {
    console.log('i-index', i);
}

// 4. 遍历对象
var o = {
    a: 1,
    b: 2,
    c: 3,
}

// 获取属性名, 可以用 in
for (let i in o) {
    console.log('o-keya', i);
}

// 或者用 Object.keys + for of
var keyArr = Object.keys(o)
for (let i of keyArr) {
    console.log('o-keyb', i);
    // 获取属性值
    console.log('o-value', o[i]);
}
