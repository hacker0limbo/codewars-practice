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
