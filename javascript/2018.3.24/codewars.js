// 给定一个数字, 例如213, 返回里面数字可以组成的比原先数字大的, 例如231 (不是321), 如果已经是最大的数字就返回 -1
// 思路:
// ----题目太难, 放弃
var nextBigger = function(num) {
    var numStr = String(num)
    var numArray = numStr.split('')
    numArray = numArray.map(function(elem) {
        return Number(elem)
    })
    for (var i = numArray.length-1; i > -1; i--) {
        var current = numArray[i]
        var previous = numArray[i-1]
        if (current > previous) {
            // 找到可以将 previous 替换掉的更大一点的元素
            var toChangeArr = numArray.slice(i-1)
            toChangeArr.sort(function(a, b) {
                return a - b
            })
            var bigger = toChangeArr[0]
            toChangeArr[0] = previous
            numArray[i-1] = bigger
            break
        }
    }
    // 使用 concat() 进行拼接
    numArray.splice(i)
    var fullArr = numArray.concat(toChangeArr)
    var result = Number(fullArr.join(''))
    return result
}
console.log(nextBigger(999999999));
console.log(nextBigger(7064194174) === 7064194417);
