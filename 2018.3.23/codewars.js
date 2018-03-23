// 给定一个字符串将字符串翻转过来
function reverseString(str) {
    var strArray = str.split('')
    strArray.reverse()
    return str;
}
reverseString("hello");


// 给定一个字符串, 如果有数字就将数字加1, 否则直接加上1, 000加上1位001
var incrementString = function(str) {
    var result = ''
    var numbers = '0123456789'
    var lastElem = str[str.length - 1]
    if (!numbers.includes(lastElem)) {
        result += str + '1'
    }
    else {
        for (var i = 0; i < str.length; i++) {
            var letter = str[i]
            if (numbers.includes(letter)) {
                break
            }
        }
        var fixedStr = str.slice(0, i)
        var toChangeStr = str.slice(i)
        // 使用 padStart() 方法在左边填充字符串
        toChangeStr = String((Number(toChangeStr) + 1)).padStart(toChangeStr.length, '0')
        result = fixedStr + toChangeStr
    }
    return result
}


// 写一个函数, 不断的进行调用可以将参数里面的数字累加
var add = function(num) {
    return 

}
