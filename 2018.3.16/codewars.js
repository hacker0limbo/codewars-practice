// 给定一个字符串, 如果有重复字母就返回 false 不区分大小写
var isIsogram = function(str) {
    var result = true
    var str = str.toLowerCase()
    var existed = ''
    for (var i = 0; i < str.length; i++) {
        var letter = str[i]
        if (!existed.includes(letter)) {
            existed += letter
        }
        else {
            result = false
            break
        }
    }
    return result
}

// 给定一个数组, 返回数组里面两个最小元素的和
var sumTwoSmallestNumbers = function(array) {
    var smallToLarge = array.sort(function(a, b){
        return a - b
    })
    return smallToLarge[0] + smallToLarge[1]
}

// 给定一个数组, 里面包含数字和字符串, 返回一个数组只包含数字
var filter_list = function(array) {
    var result = array.filter(function(elem){
        return typeof(elem) == 'number'
    })
    return result
}

// 给定一个字符串, 只包含数字, 长度为4或者6
var validatePIN = function(str) {
    var result = false
    var numbers = '0123456789'
    if (str.length == 4 || str.length == 6) {
        for (var i = 0; i < str.length; i++) {
            var letter = str[i]
            if (numbers.includes(letter)) {
                result = true
            }
            else {
                result = false
                break
            }
        }
    }
    return result
}

// 给定一个字符串句子, 如果里面的单词长度 >= 5, 那么将他反过来
var spinWords = function(str) {
    var strArray = str.split(' ')
    var newStrArr = strArray.map(function(word) {
        if (word.length >= 6) {
            var letterArrray = word.split('')
            letterArrray.reverse()
            word = letterArrray.join('')
        }
        return word
    })
    return newStrArr.join(' ')
}
// console.log(spinWords("Hey fellow warriors"));

// NOTE: 将一个字符串反转过来方法: split()->reverse()->join()


// 给定一个数字, 不断将各个位数的数字相加, 直到最后加到为个位数, 返回最后结果
// QUESTION: 时间复杂度太高
var digital_root = function(nums) {
    var numbers = String(nums)
    while (numbers.length > 1) {
        var result = 0
        for (var i = 0; i < numbers.length; i++) {
            var number = Number(numbers[i])
            result += number
        }
        numbers = String(result)
    }
    return Number(numbers)
}
// console.log(digital_root(16));
// console.log(digital_root(942));


// 给定一个字符串, 按照字母顺序排序, 同时要大写的字母在前面
// FIXME: 未完成
var findChildren = function(str) {
    var strArray = str.split('')
}


// 给定一个字符串, 将里面的'WUB'去掉, 并且每个之间用空格隔开
var songDecoder = function(str) {
    var strArray = str.split('WUB')
    var arr = []
    strArray.forEach(function(str) {
        if (str != '') {
            arr.push(str)
        }
    })
    return arr.join(' ')
}
console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC"));

// REVIEW: 有一个很优雅的方法:
/*
// // NOTE:
可以使用 Boolean() 函数将之转换为布尔值
    undefined
    null
    -0
    +0
    NaN
    ‘’（空字符串）
因此可以使用 filter() 函数:
    它的参数是一个函数，所有数组成员依次执行该函数，
    返回结果为 true 的成员组成一个新数组返回。该方法不会改变原数组。
*/
var songDecoder = function(song) {
    return song.split('WUB').filter(Boolean).join(' ');
}


// 给定一个字符串, 将里面的每一个字符用字母表里面的 +13 位以后的那个替换掉
var rot13 = function(str) {
    var result = ''
    var lowerLetters = 'abcdefghijklmnopqrstuvwxyz'
    var upperLetters = lowerLetters.toUpperCase()

    for (var i = 0; i < str.length; i++) {
        var letter = str[i]
        if (lowerLetters.includes(letter)) {
            var index = lowerLetters.indexOf(letter)
            var newIndex = (index + 13) % 26
            var newLetter = lowerLetters[newIndex]
            console.log(index, newIndex);
            result += newLetter
        }
        else if (upperLetters.includes(letter)) {
            var index = upperLetters.indexOf(letter)
            var newIndex = (index + 13) % 26
            var newLetter = upperLetters[newIndex]
            result += newLetter
        }
        else {
            result += letter
        }
    }
    return result
}
console.log(rot13("test"));


// 给一个数组, 找到一个与其他元素不同的元素
// // FIXME: 未完成
var findUniq = function(arr) {
    var result = arr[0]
    var last = arr[arr.length-1]
    for (var i = 0; i < arr.length; i++) {
        var each = arr[i]
        if (result != each && last != each) {
            result = each
            break
        }
    }
    return result
}
