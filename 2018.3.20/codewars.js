// 给定一个字符串, 除了开头和结尾其他都是缩写形式
//
var initializeNames = function(str) {
    var nameArr = str.split(' ')
    var l = nameArr.length
    var result = []
    for (var i = 0; i < nameArr.length; i++) {
        var name = nameArr[i]
        if (i != 0 && i != l-1) {
            result.push(name[0] + '.')
        }
        else {
            result.push(name)
        }
    }
    return result.join(' ')
}

// 给定一个数组, 每个元素都是一个字符串, 返回每个元素中符合字母表的字母的个数, 返回值为一个数组
var solve = function(array) {
    var letters = 'abcdefghijklmnopqrstuvwxyz'
    var result = []
    for (let word of array) {
        word = word.toLowerCase()
        var count = 0
        for (let i = 0; i < word.length; i++) {
            var letter = word[i]
            if (letters.indexOf(letter) == i) {
                count++
            }
        }
        result.push(count)
    }
    return result
}

// console.log(solve(["abode","ABc","xyzD"]));


// 给定一个数组包含字符串, 任意两个个连续的字符串长度相加, 找出最长的, 返回数字

var longestConsec = function(arr, n) {
    var l = arr.length
    var result = ''
    var valid = !(l = 0 || n > l || n <= 0)
    if (valid) {
        for (let i = 0; i < arr.length - n + 1; i++) {
            var part = arr.slice(i, i+n)
            var words = ''
            var totalLength = 0
            // 这里其实不必将每个元素取出来拼接, 直接用 join()
            for (let word of part) {
                var length = word.length
                totalLength += length
                words += word
            }
            if (totalLength > result.length) {
                result = words
            }
        }
    }
    return result
}

var longestConsec = function(arr, n) {
    var l = arr.length
    var result = ''
    var valid = !(l = 0 || n > l || n <= 0)
    if (valid) {
        for (let i = 0; i < arr.length - n + 1; i++) {
            var part = arr.slice(i, i+n)
            var words = ''
            var tempPart = part.join('')
            var totalLength = tempPart.length
            if (totalLength > result.length) {
                result = tempPart
            }
        }
    }
    return result
}
// console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2));


// 给定一个字符串, 如果字符串里面的字母出现超过一次, 那么添加')', 只出现一次添加'('
var duplicateEncode = function(str) {
    var string = str.toLowerCase()
    var result = ''
    var strArray = string.split('')
    for (let i = 0; i < strArray.length; i++) {
        var letter = strArray[i]
        var tempArray = strArray.slice(0)
        tempArray.splice(i, 1)
        if (tempArray.includes(letter)) {
            result += ')'
        }
        else {
            result += '('
        }
    }
    return result
}
// console.log(duplicateEncode("recede"));


// 给定一个字符串, 找出奇偶性和其他不同的元素
/*
思路为先假设有, 然后删除那个元素, 如果剩下的元素和刚刚元素奇偶性一样就成功, 否则就反过来
*/
var findOutlier = function(arr) {
    var result
    var array = arr.slice(0)
    var possibleIndex = arr.findIndex(function(elem) {
        // 找出是偶数的Math.
        return Math.abs(elem) % 2 == 0
    })
    // 删掉
    var possibleNum = arr.splice(possibleIndex, 1)
    // 剩下全是奇数了(可能)
    var isOdd = arr.every(function(elem) {
        return Math.abs(elem) % 2 == 1
    })
    // 如果全是奇数
    if (isOdd) {
        result = possibleNum[0]
    }
    // 否则都是偶数除了一个奇数
    else {
        result = array.find(function(elem) {
            return Math.abs(elem) % 2 == 1
        })
    }
    return result
}

// 法二, 可以使用 filter()函数, 将所有返回值为 true 的函数组成一个新的函数
var findOutlier = function(arr) {
    var oddArray = arr.filter(function(elem) {
        return Math.abs(elem) % 2 != 0
    });
    var evenArray = arr.filter(function(elem) {
        return Math.abs(elem) % 2 == 0
    });
    if (oddArray.length == 1) {
        return oddArray[0]
    }
    if (evenArray.length == 1) {
        return evenArray[0]
    }
}
// console.log(findOutlier([2,6,8,10,3]));


// 给定一个数字, 不断的将个位数上的数字相乘, 直到最后得到一个一位数, 返回次数
var persistence = function(num) {
    var count = 0
    var numString = String(num)
    while (numString.length > 1) {
        var product = 1
        for (let num of numString) {
            num = Number(num)
            product *= num
        }
        numString = String(product)
        count++
    }
    return count
}
console.log(persistence(39));

// 使用 reduce() 函数进行多次累加统计
var persistence = function(num) {
    var count = 0
    var numString = String(num)
    while (numString.length > 1) {
        var numArray = numString.split('')
        numString = numArray.reduce(function(a, b) {
            return String(Number(a) * Number(b))
        })
        count++
    }
    return count
}


// 给定一个数组, 通过使用一个元素使两边可以一分为2, 左边结果等于右边结果
