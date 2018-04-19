// 给定一个数组, 里面有重复的数字, 将重复的数字加起来以新的数字返回, 返回为一个数组
// 例如: [1, 1, 7, 7, 3] -> [2, 14, 3]
// [-5, -5, 7, 7, 12, 0] -> [-10, 14, 12, 0]
var sumConsecutives = function(arr) {
    var result = []
    var temp = 0
    for (var i = 0; i < arr.length; i++) {
        var current = arr[i]
        var next = arr[i+1]
        temp += current
        if (current !== next) {
            result.push(temp)
            temp = 0
        }
    }
    return result
}
console.log(sumConsecutives([-5, -5, 7, 7, 12, 0]));
