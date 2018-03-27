// 给定一个井字棋的数组, 判断是否获胜, 其中0代表空位, 1代表选手1, 2代表选手2
// -1 还有棋子空着, 1 为 X 获胜, 2 为 O 获胜, 0 平局
/*
[
    [0, 0, 1],
    [0, 1, 2],
    [2, 1, 0]
]
思路: 将所有选手1, 2的情况排出来, 通过枚举法得到所有胜利结果进行判断
*/
// var winArray = [
//     // 横着3个
//     [[0, 0], [0, 1], [0, 2]],
//     [[1, 0], [1, 1], [1, 2]],
//     [[2, 0], [2, 1], [2, 2]],
//     // 竖着3个
//     [[0, 0], [1, 0], [2, 0]],
//     [[0, 1], [1, 1], [2, 1]],
//     [[0, 2], [1, 2], [2, 2]],
//     // 斜对角
//     [[0, 0], [1, 1], [2, 2]],
//     [[0, 2], [1, 1], [2, 0]],
// ]
//
// var isSolved = function(arr) {
//     var xArray = []
//     var oArray = []
//     for (var i = 0; i < arr.length; i++) {
//         var row = arr[i]
//         for (var j = 0; j < row.length; j++) {
//             var value = row[j]
//             if (value === 1) {
//                 // [[0, 1], [0, 2]...]
//                 xArray.push([i, j])
//             }
//             if (value === 2) {
//                 oArray.push([i, j])
//             }
//         }
//     }
//
//     xArray.sort(function(a, b) {
//         if (a[0] === b[0]) {
//             return a[1] - b[1]
//         }
//         return a[0] - b[0]
//     })
//     oArray.sort(function(a, b) {
//         if (a[0] === b[0]) {
//             return a[1] - b[1]
//         }
//         return a[0] - b[0]
//     })
//
//     // console.log(xArray, oArray);
//     for (let i = 0; i < xArray.length-3; i++) {
//         var possibleX = xArray.slice(i, i+3)
//         // console.log('possibleX', possibleX);
//         for (var win of winArray) {
//             if (JSON.stringify(possibleX) == JSON.stringify(win)) {
//                 return 1
//             }
//         }
//     }
//     for (let i = 0; i < oArray.length-3; i++) {
//         var possibleO = oArray.slice(i, i+3)
//         for (var win of winArray) {
//             if (JSON.stringify(possibleO) == JSON.stringify(win)) {
//                 return 1
//             }
//         }
//     }
//
//     return 0
// }

// console.log(isSolved([[1,1,1],
//                       [0,1,2],
//                       [0,0,1]]))

// 做不出来, 另外一种, 对每行每列进行判断, 然后对对角线判断
var isSolved = function(arr) {
    // 列
    for (var i = 0; i < 3; i++) {
        if (arr[0][i] == arr[1][i] && arr[1][i] == arr[2][i]) {
            if (arr[0][i] === 1) {
                return 1
            }
            else if (arr[0][i] === 2) {
                return 2
            }
        }
    }
    // 对角线
    if (arr[0][0] == arr[1][1] == arr[2][2]) {
        if (arr[0][0] === 1) {
            return 1
        }
        else if (arr[0][0] === 2) {
            return 2
        }
    }
    if (arr[0][2] == arr[1][1] == arr[2][0]) {
        if (arr[0][0] === 1) {
            return 1
        }
        else if (arr[0][0] === 2) {
            return 2
        }
    }
    // 行
    for (var row of arr) {
        if (row[0] == row[1] && row[1] == row[2]) {
            if (row[0] === 1) {
                return 1
            }
            else if (row[0] === 2) {
                return 2
            }
        }
    }
    // 判断是否有空余的
    for (let i = 0; i < arr.length; i++) {
        var line = arr[i]
        for (let i = 0; i < line.length; i++) {
            var value = line[i]
            if (value === 0) {
                return -1
            }
        }
    }
    return 0
}
// console.log(isSolved([[0,0,1], [0,1,2], [2,1,0]]))


// 给定一个数组, 找出与其他元素组成不一样的成员
// var findUniq = function(arr) {
//     var array = arr.map(function(elem) {
//         return elem.toLowerCase()
//     })
//     var e1 = array[0][0]
//     var e2 = array[1][0]
//
//     for (var i = 2; i < array.length; i++) {
//         var word = array[i]
//         if (word.includes(e1)) {
//             continue
//         }
//         if (word.includes(e2)) {
//
//         }
//     }
// }
// console.log(findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]));


// 给定一个字符串, 将之进行如下转换:
/*
1. 如果超过140个字母就返回 false
2. 如果输入是一个空字符串, 返回 false
3. 开头必须是一个'#'
4. 所有的单词的首字母全部大写
*/
var generateHashtag = function(str) {
    // 可以通过 trim()方法删除两边的空格, 这样可以判断一个字符串是否是空字符串了
    str = str.trim()
    var strArray = str.split(' ')
    var result = '#'
    if (str.length > 140 || str == '') {
        result = false
    }
    else {
        for (var word of strArray) {
            var newWord = word[0].toUpperCase() + word.slice(1)
            result += newWord
        }
    }
    return result
}
// console.log(generateHashtag(' '));


// 给定一个数字, 判断里面的数字包含9的个数, 例如 '99'算作两次
var count9 = function(num) {
    var count = 0
    var stringNum = String(num)
    for (var i = 0; i < stringNum.length; i++) {
        var letter = stringNum[i]
        if (letter == '9') {
            count++
        }
    }
    return count
}
var number9 = function(num) {
    var count = 0
    for (var i = 0; i <= num; i++) {
        count += count9(i)
    }
    return count
}
// console.log(number9(100));


// 给定一个字符串, 将每个单词旋转以后返回, 单词之间的空格保留
var reverseWord = function(s) {
    var sArr = s.split('')
    return sArr.reverse().join('')
}
var reverseWords = function(str) {
    var resultArr = []
    var strArray = str.split(' ')
    for (let word of strArray) {
        resultArr.push(reverseWord(word))
    }
    return resultArr.join(' ')
}
console.log(reverseWords("double  spaces"));


// 给定一个字符串, 包含数字, 将任意两个奇数之间用'-'连接, 其中收尾不加
var dashatize = function(num) {
    if (isNaN(num)) {
        return 'NaN'
    }
    var numStr = String(Math.abs(num))
    var numArr = numStr.split('')
    numArr = numArr.join('-')
    var resultArr = []
    for (var i = 0; i < numArr.length; i++) {
        var letter = numArr[i]
        if (letter === '-') {
            if (numArr[i-1]%2 == 0 && numArr[i+1]%2 == 0) {
                letter = ''
            }
        }
        resultArr.push(letter)
    }
    return resultArr.join('')
}
// console.log(dashatize(6815));


// 给定一个字符串, 将单词用首字母大写, 并且去除空格
String.prototype.camelCase = function() {
    if (this.length === 0) {
        return ''
    }
    var strArr = this.trim().split(' ')
    var resultArr = []
    for (var i = 0; i < strArr.length; i++) {
        var word = strArr[i]
        var newWord = word[0].toUpperCase() + word.slice(1)
        resultArr.push(newWord)
    }
    return resultArr.join('')
}
// console.log('  camel Case method '.camelCase());


// 给定一个字符串, 将从第一个字母开始大写, 不断的传递到最后一个字母
// 辅助方法, 根据下标替换字符串里面的元素
String.prototype.replaceFromIndex = function(index, s) {
    var result = ''
    for (var i = 0; i < this.length; i++) {
        var letter = this[i]
        if (i === index) {
            letter = s
        }
        result += letter
    }
    return result
}

var wave = function(str) {
    var result = []
    var s = str.trim()
    for (var i = 0; i < str.length; i++) {
        var letter = str[i]
        if (letter == ' ') {
            continue
        }
        var newS = str.replaceFromIndex(i, str[i].toUpperCase())
        result.push(newS)
    }
    return result
}
// console.log(wave(" gap "));
// console.log(wave('hello word'));
