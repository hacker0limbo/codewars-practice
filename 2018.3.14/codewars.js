// 输入一个数字将之和转换为二进制
var addBinary = function(a, b) {
    var sum = a + b
    return sum.toString(2)
}


// 展开
var getInterger = function(num) {
    var num = String(num)
    var l = num.length
    var result = Number(num[0]) * Math.pow(10, l-1)
    return result
}
var expandedForm = function(num) {
    var number = num
    var resultArray = []
    while (number > 0) {
        // 这里必须在这里定义 getInterger(), 因为每次扣掉以后要重新根据新生成的整数来获取相应的数字
        var integer = getInterger(number)
        resultArray.push(integer)
        number = number - integer
    }
    var result = resultArray.join(' + ')
}

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
