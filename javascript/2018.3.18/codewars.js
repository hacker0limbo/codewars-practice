

// 给定一个字符串, 先将之转换为二进制, 返回该二进制里面的 1 的个数
var countBits = function(n) {
    var result = 0
    var binaryNumber = n.toString(2)
    for (let i of binaryNumber) {
        if (i == '1') {
            result ++
        }
    }
    return result
}
