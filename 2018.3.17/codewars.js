// 给定一个字符串, 返回每一个字母所对应的字母表数字, 其中 a=1, 不区分大小写
// 如果是不是字母的直接忽视, 例如 ',', '$'
var alphabetPosition = function(str) {
    var string = str.toLowerCase()
    var strArray = string.split(' ')
    var result = []
    // word
    strArray.forEach(function(word){
        for (var i = 0; i < word.length; i++) {
            var letter = word[i]
            var index = letter.charCodeAt() - 96
            if (index > 0 && index < 27) {
                result.push(index)
            }
        }
    })
    return result.join(' ')
}
// console.log(alphabetPosition("The sunset sets at twelve o' clock."));

//给定一个字符串, 将驼峰类型的字符串转换为下划线类型的字符串
var kebabize = function(str) {
    var lowLetters = 'abcdefghijklmnopqrstuvwxyz'
    var upperLetters = lowLetters.toUpperCase()
    var letters = lowLetters + upperLetters
    // 先保证全是字母
    var s = ''
    for (var j = 0; j < str.length; j++) {
        var letter = str[j]
        if (letters.includes(letter)) {
            s += letter
        }
    }
    // 再进行修改
    var result = s[0].toLowerCase()
    for (var i = 1; i < s.length; i++) {
        var l = s[i]
        if (upperLetters.includes(l)) {
            var lowerL = l.toLowerCase()
            result += `-${lowerL}`
        }
        if (lowLetters.includes(l)) {
            result += l
        }
    }
    return result
}
// console.log(kebabize('camelsHaveThreeHumps')) // camels-have-three-humps;
// console.log(kebabize('camelsHave3Humps')) // camels-have-humps;
