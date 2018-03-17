// 给定一个字符串, 返回中间的字符
var getMiddle = function(str) {
    var result = ''
    var l = str.length
    if (l % 2 == 1) {
        result += str[Math.floor(l/2)]
    }
    else {
        result += str[l/2 - 1] + str[l/2]
    }
    return result
}

// getMiddle("test") should return "es"
// getMiddle("testing") should return "t"

// 计算多边形的角度
var angle = function(n) {
    return 180 * (n - 2)
}

// 返回字符串中包含元音的个数
var getCount = function(str) {
    var vowelsCount = 0;
    var vowels = 'aeiou'
    for (var i = 0; i < str.length; i++) {
        var letter = str[i]
        if (vowels.includes(letter)) {
            vowelsCount++
        }
    }
    return vowelsCount
}

// 给定一个 DNA 字符串(包含 A, T, G, C), 其中 A-T G-C, 返回他的配对字符串
// 法一: 使用 forEach() 函数
var DNAStrand = function(dna) {
    var result = ''
    var table = {
        A: 'T',
        T: 'A',
        C: 'G',
        G: 'C',
    }
    var keys = Object.keys(table)
    for (var i = 0; i < dna.length; i++) {
        var letter = dna[i]
        keys.forEach(function(n){
            if (n.includes(letter)) {
                var keyValue = table[n]
                result += keyValue
            }
        })
    }
    return result
}

// 法二, 直接使用函数forEach() 操作数组里面的每一个元素, 不用再使用 for 循环了
var DNAStrand = function(dna) {
    var result = ''
    var table = {
        A: 'T',
        T: 'A',
        C: 'G',
        G: 'C',
    }
    var dnaArray = dna.split('')
    dnaArray.forEach(function(n) {
        result += table[n]
    })
    return result
}

// console.log(DNAStrand('TTGG'));

// 给定一个字符串, 将字符串里面的所有首字母大写
// REVIEW: 构建一个方法的时候, 注意原型是 this
// 这里注意, 给的是一个方法, 因此要将该方法应用于原始对象上, 原始对象为 this
// 注意这个 this 是一个对象
String.prototype.toJadenCase = function() {
    var strArray = this.split(' ')
    // console.log(strArray);
    var resultArray = strArray.map(function(n) {
        var upper = n[0].toUpperCase()
        n = n.replace(n[0], upper)
        // 这里注意用变量接一下, 因为.replace() 是没有返回值的
        return n
    })
    return resultArray.join(' ')
}
// var str = "How can mirrors be real if our eyes aren't real";
// console.log(str.toJadenCase());

// NOTE: 将一个字符串的首字母大写几种方法:
/*
1, 使用 s[0] + s.slice(1) 将首字母隔离以后再拼接
2, 使用 s = s.replace(s[0], s[0].toUpperCase()) 直接替换
3, 正则表达式
 */


// 将数字从大到小重新排序, 返回的是一个数字

var descendingOrder = function(n) {
    var n = String(n)
    var arr = n.split('')
    arr.sort(function(a, b){
        return b - a
    })
    return Number(arr.join(''))
}

// 判断字符串里面是否有相同的数量的 'x', 'o'(大小写不区分)
// 法一: 用变量记录一共有几个
var XO = function(str) {
    var str = str.toLowerCase()
    var numberX = 0
    var numberO = 0
    var strArray = str.split('')
    strArray.forEach(function(l){
        if (l == 'x') {
            numberX++
        }
        else if (l == 'o') {
            numberO++
        }
    })
    return numberX === numberO
}

// REVIEW: 判断长度
// 法二: 还有一种很优雅的方法, 直接使用 split() 判断长度
var XO = function(str) {
    var l1 = str.toLowerCase().split('x').length
    var l2 = str.toLowerCase().split('o').length;
    return l1 === l2
}

// XO(xxOo) // true


// 给定一个字符串, 返回长度最小的那个字符串的长度, 返回值为数字
var findShort = function(str) {
    var strArray = str.split(' ')
    var result = strArray[0].length
    strArray.forEach(function(s){
        if (s.length < result) {
            result = s.length
        }
    })
    return result
}

// 给定一串数字, 将数字里面的每一个数字平方然后以字符串的形式相加, 返回还是数字
// 法一, 对每个数相加, 然后返回一个值
var squareDigits = function(num) {
    var result = ''
    var numberArray = String(num).split('')
    numberArray.forEach(function(n){
        var square = Math.pow(Number(n), 2)
        result += String(square)
    })
    return Number(result)
}

// NOTE: 对字符串操作时, 可先用 split 转换为数组, 再用 join 合并成字符串
// 法二, 直接对数组里面的每一个元素平方, 最后使用 join('')
var squareDigits = function(num) {
    var result = ''
    var numberArray = String(num).split('')
    var arr = numberArray.map(function(n){
        return Math.pow(Number(n), 2)
    })
    return Number(arr.join(''))
}


// 给定两个数字, 返回这两个数字之间(包括这两个数字)的所有和, 如果两个数字相同, 则返回其中一个数字
// 注意其中 a, b 大小是随机的
var GetSum = function(a, b) {
    var result = a + b
    if (a === b) {
        result = a
    }
    else if (a < b) {
        for (var i = a + 1; i < b; i++) {
            result += i
        }
    }
    else {
        for (var i = b + 1; i < a; i++) {
            result += i
        }
    }
    return result
}
// console.log(GetSum(1, 4));

// NOTE: replace() 函数没有返回值
// NOTE: 删除一个字符串里面的一个字母可以这样
/*
var s = 'ssst'.replace('t', 'b')
一定要用变量接住, 原来的字符串是不受影响的
*/


// 移除一个字符串里面的所有元音, 返回这个字符串
var disemvowel = function(str) {
    var vowels = 'aeiouAEIOU'
    var result = ''
    for (var i = 0; i < str.length; i++) {
        var letter = str[i]
        if (!vowels.includes(letter)) {
            result += letter
        }
    }
    return result
}
