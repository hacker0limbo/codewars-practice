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
    var result = 0
    var nums = String(nums)
    while (nums.length > 1) {
        for (var i = 0; i < nums.length; i++) {
            var num = Number(nums[i])
            result += num
        }
        nums = String(result)
    }
    return Number(result)
}
// console.log(digital_root(493193));
