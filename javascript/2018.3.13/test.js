/*
1. Arguments to Binary addition
*/
// 给定一个array, 将 array 里面所有可以相加的数字加起来, 返回这个结果的二进制结果
// 结果为字符串
function arr2bin(array) {
    var result = 0
    for (var i = 0; i < array.length; i++) {
        var a = array[i]
        if (typeof(a) == 'number') {
            result += a
        }
    }
    result = result.toString(2)
    return result
}
// arr2bin([1,2]) == '11'
// arr2bin([1,2,'a']) == '11'
// arr2bin([]) == '0'
// arr2bin([1,10,100,1000] == '10001010111'
// [true,true,false,15] == '1111'

/*
2. UEFA EURO 2016
 */
// 输出格式如下
function uefaEuro2016(teams, scores){
    if (scores[0] == scores[1]) {
        return `At match ${commands[0]} - ${commands[1]}, teams played draw.`;
    }
    if (scores[0] < scores[1]) {
        return `At match ${commands[0]} - ${commands[1]}, ${commands[1]} won!`;
    }
    else {
        return `At match ${commands[0]} - ${commands[1]}, ${commands[0]} won!`;
    }
}

// uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
// uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
// uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."

var binaryArrayToNumber = function(array) {
    var binary = String(array[0])
    for (var i = 1; i < array.length; i++) {
        binary += String(array[i])
    }
    return parseInt(binary, 2)
}

var binaryArrayToNumber = function(array) {
    var binary = array.join('')
    return parseInt(binary, 2)
}
console.log(binaryArrayToNumber([0,1,1,0]));

//
var repeatStr = function(n, s) {
    var beAdded = s
    for (var i = 1; i < n; i++) {
        s += beAdded
    }
    return s
}
var repeatStr = function(n, s) {
    return s.repeat(n)
}
console.log(repeatStr(5, "Hello"));


var uniqueInOrder = function(iterable) {
    // 这里要判断是否是是空数组
    if (iterable.length == 0) {
        return []
    }
    else {
        var result = [iterable[0]]
        for (var i = 1; i < iterable.length; i++) {
            var eBefore = iterable[i-1]
            var e = iterable[i]
            if (e != eBefore) {
                result.push(e)
            }
        }
        return result
    }
}

var uniqueInOrder = function(iterable) {
    var result = []
    var previous
    for (var i = 0; i < iterable.length; i++) {
        var current = iterable[i]
        if (current != previous) {
            // previous 就存储了之前的值
            previous = current
            result.push(current)
        }
    }
    return result
}
// uniqueInOrder('ABBCcAD') == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3]) == [1,2,3]


var digPow = function(n, p) {
    var sum = 0
    var stringN = String(n)
    for (var i = 0; i < stringN.length; i++) {
        var singleNumber = Number(stringN[i])
        sum += Math.pow(singleNumber, p)
        p++
    }
    var reminder = sum % n
    var quotient = sum / n
    if (reminder == 0) {
        return quotient
    }
    return -1
}
// digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
// digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
// digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
// digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 5

var invert = function(array) {
    var result = []
    for (var i = 0; i < array.length; i++) {
        var n = array[i]
        // 要先判断是不是0 , 因为存在 -0这种情况
        if (n != 0) {
            n = -n
        }
        result.push(n)
    }
    return result
}

// 使用 map() 方法, 可以对数组里面每个元素进行相同的运算
var toInvert = function(number) {
    if (number !== 0) {
        number = -number
    }
    return number
}
var invert = function(array) {
    var result = array.map(function(elm) {
        return toInvert(elm)
    })
    return result
}
// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []

var doubleChar = function(str) {
    var result = ''
    for (var i = 0; i < str.length; i++) {
        result += str[i].repeat(2)
    }
    return result
}

var sumDigPow = function(a, b) {
    var result = []
    for (var i = a; i <= b; i++) {
        if (digPow(i)) {
            result.push(i)
        }
    }
    return result
}

var digPow = function(n) {
    var isDigPow = false
    var stringN = String(n)
    var result = 0
    // var l = n.length
    for (var i = 0; i < stringN.length; i++) {
        var numberN = Number(stringN[i])
        result += Math.pow(numberN, i+1)
    }
    if (result == n) {
        isDigPow = true
    }
    return isDigPow
}
// sumDigPow(1, 10) == [1, 2, 3, 4, 5, 6, 7, 8, 9]
// sumDigPow(1, 100) == [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]

var summation = function(num) {
    var result = 0
    for (var i = 1; i <= num; i++) {
        result += i
    }
    return result
}

// 移除一组数组里面最小的元素, 同时如果有相同的最小元素, 只要移除索引最小的那个即可

var findSmallest = function(array) {
    var smallest = array[0]
    for (var i = 1; i < array.length; i++) {
        var n = array[i]
        if (n < smallest) {
            smallest = n
        }
    }
    return smallest
}

var removeSmallest = function(array) {
    var result = array.slice(0)
    if (array.length != 0) {
        var smallest = findSmallest(result)
        var smallestFirstIndex = result.indexOf(smallest)
        result.splice(smallestFirstIndex, 1)
    }
    return result
}

// removeSmallest([1,2,3,4,5]) = [2,3,4,5]
// removeSmallest([5,3,2,1,4]) = [5,3,2,4]
// removeSmallest([2,2,1,2,1]) = [2,2,2,1]

// 输入一个字符串, 将里面的最大值和最小值显示出来, 用空格隔开
var getMax = function(array) {
    var result = array[0]
    for (var i = 1; i < array.length; i++) {
        var n = array[i]
        if (n > result) {
            result = n
        }
    }
    return result
}

var getMin = function(array) {
    var result = array[0]
    for (var i = 1; i < array.length; i++) {
        var n = array[i]
        if (n < result) {
            result = n
        }
    }
    return result
}

var highAndLow = function(numbers) {
    var result = []
    var numberArray = numbers.split(' ')
    // 这里一定要用 Number() 来数字一下, 因为默认数组里面的每个元素都是字符串
    numberArray = numberArray.map(function(n) {
        return Number(n)
    })
    var max = getMax(numberArray)
    var min = getMin(numberArray)
    result.push(max, min)
    return result.join(' ')
}

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));

// 要求
// 给定一个 初始数组 和长度 n, 根据初始数组的长度 l 从新的一个元素开始每个元素都为前面 l 个元素的和
// 最后返回数组, 一共是 n 个元素, 包括初始数组里面的元素

// 先写一个辅助函数来算出所给的 array 里面的后 n 个元素的和
var previousSum = function(arr, n) {
    var l = arr.length
    var array = arr.slice(l-n, l)
    var result = 0
    for (var i = 0; i < array.length; i++) {
        result += array[i]
    }
    return result
}

var tribonacci = function(initial, n) {
    var resultArray = initial.slice(0)
    // 这里要用一个变量接住一开始的数组的长度
    var initialLength = initial.length
    if (n < initialLength) {
        resultArray = initial.slice(0, n)
    }
    else {
        for (var i = 0; i < (n - initialLength); i++) {
            var thisResult = previousSum(resultArray, initialLength)
            resultArray.push(thisResult)
        }
    }
    return resultArray
}

// console.log(tribonacci([1,1,1,1],10)) // [1, 1, 1, 3, 5, 9, 17, 31, 57, 105]


// 根据字符串里面的数字来进行排序, 从小到大


// 辅助函数, 查找字符串里面的数字
var findNumber = function(string) {
    var numbers = '0123456789'
    for (var i = 0; i < string.length; i++) {
        var s = string[i]
        if (numbers.includes(s)) {
            break
        }
    }
    return Number(s)
}

var order = function(words) {
    var indexs = []
    var result = []
    var stringArray = words.split(' ')
    for (var i = 0; i < stringArray.length; i++) {
        var word = stringArray[i]
        var index = findNumber(word)
        indexs.push(index)
    }
    // 对里面的数字进行从小到大排序
    var indexs = indexs.sort(function(a, b){
        return a - b
    })
    // 双遍历对应寻找
    for (var j = 0; j < indexs.length; j++) {
        var site = indexs[j]
        for (var k = 0; k < stringArray.length; k++) {
            var w = stringArray[k]
            if (w.includes(site)) {
                result.push(w)
                break
            }
        }
    }
    return result.join(' ')
}



// console.log(order("is2 Thi1s T4est 3a")); // "Thi1s is2 3a T4est"
