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
