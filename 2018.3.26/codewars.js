// 给定一个字符串, 一个驼峰字符串中间加上空格, 返回字符串
var solution = function(str) {
    var result = ''
    var strArray = str.split('')
    var upperLetters = 'ABCDEFGUIJKLMNOPQRSTUVWXYZ'
    for (var i = 0; i < strArray.length; i++) {
        var letter = strArray[i]
        if (upperLetters.includes(letter)) {
            letter = ' ' + letter
        }
        result += letter
    }
    return result
}
console.log(solution('camelCasing'));

// 给定一个字符串, 将每个单词的第一个字母移到最后, 并且再加上 'ay'
var pigIt = function(str) {
    var resultArray = []
    var strArray = str.split(' ')
    for (var i = 0; i < strArray.length; i++) {
        var word = strArray[i]
        var newWord = word.slice(1) + word[0] + 'ay'
        resultArray.push(newWord)
    }
    var result = resultArray.join(' ')
    return result
}
// console.log(pigIt('Pig latin is cool'));
// console.log(pigIt('Hello world'));


// 给定一个字符串, 将之用驼峰法表示, 其中首字母一直保持原样
var toCamelCase = function(str) {
    var strArray = str.split('_')
    var dash = '-'
    if (str.includes(dash)) {
        strArray = str.split(dash)
    }
    var resultArray = [strArray[0]]
    for (var i = 1; i < strArray.length; i++) {
        var word = strArray[i]
        var newWord = word[0].toUpperCase() + word.slice(1)
        resultArray.push(newWord)
    }
    var result = resultArray.join('')
    return result
}
console.log(toCamelCase('The-Stealth-Warrior'));


// 给定两个字符串, 如果第一个字符串里面包含第二个字符串里面的所有字符返回 true, 否则 false
var scramble = function(str1, str2) {
    var result = true
    var str1Array = str1.split
    for (let letter2 of str2) {
        var index = str1Array.indexOf(letter2)
        if (index == -1) {
            result = false
            break
        }
        else {
            str1Array.splice(index, 1)
        }
    }
    return result
}
// console.log(scramble('katas', 'steak'));


// 给定一个数组, 将里面所有的 0 全部移到最后, 其他元素位置保持不变
var moveZeros = function(arr) {
    var array = arr.slice(0)
    var zeroArray = []
    var noZeroArray = []
    for (var i = 0; i < array.length; i++) {
        var elem = array[i]
        if (elem === 0) {
            zeroArray.push(elem)
        }
        else {
            noZeroArray.push(elem)
        }
    }
    var result = noZeroArray.concat(zeroArray)
    return result
}

// 或者直接使用 filter() 函数, 可以不断判断进行累加
var moveZeros = function (arr) {
    var filtedList = arr.filter(function(num){
        return num !== 0
    })
    var zeroList = arr.filter(function(num){
        return num === 0
    })
    return filtedList.concat(zeroList);
}


// 给定一个数字, 将之转换为时间的形式, 如下: HH:MM:DD
// HH 范围是00-99, 其余均为 00-59
// 原生浏览器不支持 padStart 和 padEnd
var humanReadable = function(num) {
    var hours = String(Math.floor(num / 3600))
    var minutes = String(Math.floor((num % 3600) / 60))
    var seconds = String(num - 3600*hours - 60*minutes)
    hours = hours.padStart(2, '0')
    minutes = minutes.padStart(2, '0')
    seconds = seconds.padStart(2, '0')
    var result = `${hours}:${minutes}:${seconds}`
    return result
}
// console.log(humanReadable(4));


// 给定一个字符串和一个数组, 从数组里面找出和字符串字母组合一样的元素, 包括长度一样
// 写一个 compare() 对任意两个字符串进行比较
var compare = function(str1, str2) {
    var result = true
    var s1 = str1.slice(0)
    var s2 = str2.slice(0)
    var str1Array = s1.split('')
    var str2Array = s2.split('')
    while (str1Array.length > 0) {
        var letter1 = str1Array[0]
        var indexInStr2 = str2Array.indexOf(letter1)
        if (indexInStr2 != -1) {
            str1Array.splice(0, 1)
            str2Array.splice(indexInStr2, 1)
        }
        else {
            result = false
            break
        }
    }
    if (str1.length !== str2.length) {
        result = false
    }
    return result
}
// console.log(compare('abba', 'baab'));

var anagrams = function(str, arr) {
    var result = []
    for (let word of arr) {
        var isAnagram = compare(str, word)
        if (isAnagram) {
            result.push(word)
        }
    }
    return result
}

// 或者直接用 sort() 函数进行排序, 然后进行比较
var anagrams = function(str, arr) {
    var result = []
    var word1 = str.split('').sort().join('')
    for (var i = 0; i < arr.length; i++) {
        var word2 = arr[i]
        var newWord2 = word2.split('').sort().join('')
        if (word1 == newWord2) {
            result.push(word2)
        }
    }
    return result
}
// console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));


// 给定两个对象, 根据对象里面的属性值判断第二个对象可以包含多少个第一个对象
var cakes = function(obj1, obj2) {
    var attributesArr1 = Object.keys(obj1)
    var arrtibutesArr2 = Object.keys(obj2)
    var result = Number.MAX_VALUE
    for (let attribute of attributesArr1) {
        if (arrtibutesArr2.includes(attribute)) {
            var needAmount = obj1[attribute]
            var totalAmount = obj2[attribute]
            var amount = Math.floor(totalAmount / needAmount)
            if (amount < result) {
                result = amount
            }
        }
        else {
            result = 0
            break
        }
    }
    return result
}
// var recipe = {flour: 500, sugar: 200, eggs: 1}
// var available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
// console.log(cakes(recipe, available));


// 给定一个字符串, 找到第一个不重复的字母, 不区分大小写
var firstNonRepeatingLetter = function(str) {
    var s = str.toLowerCase()
    for (var i = 0; i < s.length; i++) {
        var letter = s[i]
        if (s.indexOf(letter) == s.lastIndexOf(letter)) {
            return str[i]
        }
    }
    return ''
}
console.log(firstNonRepeatingLetter('zaazzZxXAaaP3er'));
