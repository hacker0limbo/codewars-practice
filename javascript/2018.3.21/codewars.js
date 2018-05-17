// 给定一个数组, 查找里面缺少的字母, 按照字母表的顺序
// 对打的查找, 看小的里面有没有包含大的
var findMissingLetter = function(arr) {
    var lowLetters = 'abcdefghijklmnopqrstuvwxyz'
    var upperLetters = lowLetters.toUpperCase()
    var letters = lowLetters + upperLetters

    var firstIndex = letters.indexOf(arr[0])
    var lastIndex = firstIndex + arr.length - 1

    var newLetters = letters.slice(firstIndex, lastIndex + 1)
    var newLettersArray = newLetters.split('')

    var result = newLettersArray.find(function(elem){
        return !(arr.includes(elem))
    })
    return result
}

// 也可以使用 charCodeAt() 对每个元素进行匹配, 用索引 i 来判断是否对应 ASCII 码表
var findMissingLetter = function(arr) {
    var first = arr[0].charCodeAt()
    for (var i = 0; i < arr.length; i++) {
        var letter = arr[i]
        if (first + i != letter.charCodeAt()) {
            return String.fromCharCode(first + i)
        }
    }
}


// 给定一个字符串, 将字符串里面每个单词的偶数索引的字母大写, 奇数索引的字母小写
var toWeirdCase = function(str) {
    var wordsArray = str.split(' ')
    var result = []
    for (let word of wordsArray) {
        var newWord = ''
        for (var i = 0; i < word.length; i++) {
            var letter = word[i]
            if (i % 2 == 0) {
                newWord += letter.toUpperCase()
            }
            else {
                newWord += letter.toLowerCase()
            }
        }
        result.push(newWord)
    }
    return result.join(' ')
}
console.log(toWeirdCase('This is a test'));



// 给定两个数组返回数组1在数组2里面包含的元素, 按照字母表顺序
var inArray = function(arr1, arr2) {
    var result = []
    arr1.sort()
    for (let word1 of arr1) {
        for (let word2 of arr2) {
            if (word2.includes(word1)) {
                result.push(word1)
                break
            }
        }
    }
    return result
}

// 或者使用 filter() 函数
var inArray = function(arr1, arr2) {
    arr1.sort()
    var result = arr1.filter(function(elem){
        for (let word of arr2) {
            if (word.includes(elem)) {
                return elem
            }
        }
    });
    return result
}

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// a1 = ["live", "strong", "arp"]
// console.log(inArray(a1, a2));


// 给定一个数字, 判断是否是 narcissistic 数字
var narcissistic = function(num) {
    var numString = String(num)
    var l = numString.length
    var result = 0
    for (let letter of numString) {
        result += Math.pow(Number(letter), l)
    }
    return result == num
}
// console.log(narcissistic(7));


// 给定一个两个数组, 判断数组2里面的每个元素是不是数组1里面每个元素的平方根
var comp = function(arr1, arr2) {
    var result = true
    arr1.sort(function(a, b) {
        return a - b
    })
    arr2.sort(function(a, b) {
        return a - b
    })
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] != Math.sqrt(arr2[i])) {
            result = false
            break
        }
    }
    return result
}
// a1 = [121, 144, 19, 161, 19, 144, 19, 11];
// a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
// console.log(comp(a1, a2));


// 给定一个数组, 每个元素是一个对象, 返回对象的值, 最后两个值用&连接, 其余用逗号
// [
//     {name: 'Bart'},
//     {name: 'Lisa'},
//     {name: 'Maggie'}
// ]
function list(names){
    return names.reduce(function(prev, current, index, array){
        if (index === 0){
            return current.name;
        }
        else if (index === array.length - 1){
            return prev + ' & ' + current.name;
        }
        else {
            return prev + ', ' + current.name;
        }
    }, '');
}


// 给定一个包含括号的字符串, 如果每个括号可以匹配到返回 true, 否则返回 false
// 只包含 (), 同时注意, 只有()才算 valid, )( 是不合格的
var validParentheses = function(str) {
    var left = '('
    var right = ')'
    var count = 0
    for (var i = 0; i < str.length; i++) {
        var letter = str[i]
        if (count < 0) {
            return false
        }
        if (letter.includes(left)) {
            count++
        }
        if (letter.includes(right)) {
            count--
        }
    }
    return count === 0
}

// console.log(validParentheses(")(()))"));
