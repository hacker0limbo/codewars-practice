// 给定一个字符串将字符串翻转过来
function reverseString(str) {
    var strArray = str.split('')
    strArray.reverse()
    return str;
}
reverseString("hello");


// 给定一个字符串, 如果有数字就将数字加1, 否则直接加上1, 000加上1位001
var incrementString = function(str) {
    var result = ''
    var numbers = '0123456789'
    var lastElem = str[str.length - 1]
    if (!numbers.includes(lastElem)) {
        result += str + '1'
    }
    else {
        for (var i = 0; i < str.length; i++) {
            var letter = str[i]
            if (numbers.includes(letter)) {
                break
            }
        }
        var fixedStr = str.slice(0, i)
        var toChangeStr = str.slice(i)
        // 使用 padStart() 方法在左边填充字符串
        toChangeStr = String((Number(toChangeStr) + 1)).padStart(toChangeStr.length, '0')
        result = fixedStr + toChangeStr
    }
    return result
}

// 闭包
function A() {
    function B(){
       console.log("Hello Closure!");
    }
    return B;
}
var C = A();
console.log(C);
// 执行 A 以后将 A 的返回值赋值给变量, 实际上 A 的返回值即为 B 这个函数体
// 即此时 C 里面装的是 A 的函数体, 执行 C 就是执行 A
C();//Hello Closure!


function A() {
    var count = 0;
    function B(){
       count ++;
       console.log(count);
    }
    return B;
}

var C = A();
C() // 1
C() // 2


function makeAdder(x) {
    return function(y) {
        return x + y;
    };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12

var x = function() {
    console.log(1);
}



// 闭包应用: 写一个函数, 不断的调用可以连续获得和
var add = function(n) {
    var fn = function(x) {
        return add(n + x)
    }

    fn.valueOf = function() {
        return n
    }
    return fn
}
console.log(add(1)(2));
