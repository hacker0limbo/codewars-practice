// 给定一个字符串, 里面包含各种括号 ()[]{}, 判断是否匹配
var validBraces = function(str) {
    var left = '([{'
    var right = ')]}'
    var result = []
    for (let letter of str) {
        if (left.includes(letter)) {
            result.push(letter)
        }
        if (right.includes(letter)) {
            if (result.length === 0) {
                return false
            }
            var last = result[result.length - 1]
            // 这里要判断 result 里面的最后一个元素是不是和要推出的元素一样
            // 只能通过 index 来判断
            if (left.indexOf(last) === right.indexOf(letter)) {
                result.pop()
            }
            else {
                return false
            }
        }
    }
    return result.length === 0
}
// console.log(validBraces("{)"));
// console.log(validBraces("[(])"));



// 给定一个字符串, 将每个字母两两分组, 如果是奇数, 最后一个字母用 _ 补全
var solution = function(str) {
    var result = []
    var l = str.length
    for (var i = 0; i < l; i = i + 2) {
        var letter = str[i]
        var combineStr = letter + str[i+1]

        if (i == l-1) {
            combineStr = letter + '_'
        }
        result.push(combineStr)
    }
    return result
}
// console.log(solution('abc'));
// console.log(solution('abcdef'));


// 给定一个字符串, 将里面的所有单词都反过来
var reverseWords = function(str) {
    var strArray = str.split(' ')
    strArray.reverse()
    return strArray.join(' ')
}


// 给定一个数组, 对数组里面的技术排序, 偶数保持原来的位置
// 需要用掉 shift() 函数 可以将数组里面的第一个元素删除
var sortArray = function(arr) {
    var odds = arr.filter(function(elem) {
        if (elem % 2 == 1) {
            return elem
        }
    })
    odds.sort(function(a, b){
        return a - b
    })
    // 先将所有的奇数数组取出来, 并且按照从小到大的顺序分组
    // 再对原数组循环, 如果是奇数, 就用新排序好的数组填充, 因为是一一匹配的
    for (var i = 0; i < arr.length; i++) {
        var num = arr[i]
        if (num % 2 === 1) {
            arr[i] = odds.shift()
        }
    }
    return arr
}
// console.log(sortArray([5, 3, 2, 8, 1, 4]));
