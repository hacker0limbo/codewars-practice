// 输入一个数字将之和转换为二进制
var addBinary = function(a, b) {
    var sum = a + b
    return sum.toString(2)
}

// 将一个数字展开
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

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'


// 根据所给信息返回对应的名称
/*
| Card Type  | Begins With          | Number Length |
|------------|----------------------|---------------|
| AMEX       | 34 or 37             | 15            |
| Discover   | 6011                 | 16            |
| Mastercard | 51, 52, 53, 54 or 55 | 16            |
| VISA       | 4                    | 13 or 16      |
 */


// 这题做的不好, 虽然做出来了, 但是代码巨长.....
var Issuer = function(card, number, length) {
    this.card = card
    this.number = number
    this.length = length
}

var issuer1 = new Issuer('AMEX', [34, 37], [15])
var issuer2 = new Issuer('Discover', [6011], [16])
var issuer3 = new Issuer('Mastercard', [51, 52, 53, 54, 55], [16])
var issuer4 = new Issuer('VISA', [4], [13, 16])

var issuers = [issuer1, issuer2, issuer3, issuer4]

var getIssuer = function(number) {
    var number = String(number)
    var l = number.length
    for (var i = 0; i < issuers.length; i++) {
        var eachIssue = issuers[i]
        // 此时 eachIssue 是一个对象, 包含了所有信息
        var issueName = eachIssue.card
        var issueNumebr = eachIssue.number
        var issueLength = eachIssue.length
        // 此时 issueNumebr 是一个数组
        for (var j = 0; j < issueNumebr.length; j++) {
            var possibleNum = String(issueNumebr[j])
            var numberCheck = number.search(possibleNum) == 0
            var lengthCheck = issueLength.includes(l)
            if (numberCheck && lengthCheck) {
                return issueName
            }
        }
    }
    return 'Unknown'
}

// a, b 为两个数组, 将 a 中有重复 b 的所有元素去掉
var array_diff = function(a, b) {
    var result = []
    for (var i = 0; i < a.length; i++) {
        var checkE = a[i]
        if (!b.includes(checkE)) {
            result.push(checkE)
        }
    }
    return result
}

// array_diff([1,2],[1])
// array_diff([1,2,2,2,3],[2])

var accum = function(s) {
    var Ustring = s.toUpperCase()
    var result = []
    for (var i = 0; i < Ustring.length; i++) {
        var lowerLetter = Ustring[i].toLowerCase()
        var string = Ustring[i] + lowerLetter.repeat(i)
        result.push(string)
    }
    return result.join('-')
}
// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"


// 写一个辅助函数来生成全是大写字母, 或者全是小写字母的字符串


// 找到字符串里面的大写字母索引
var capitals = function(s) {
    var result = []
    // var upperLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var upperLetter = generateUpperLetters()()
    for (var i = 0; i < s.length; i++) {
        var letter = s[i]
        if (upperLetter.includes(letter)) {
            result.push(i)
        }
    }
    return result
}

// capitals('CodEWaRs'), [0,3,4,6]

// 验证密码
/*
1. 至少6个字母
2. 包含一个小写字母
3. 包含一个大写字母
4. 包含一个数字
5. 只能是英文字母, 数字
 */
function generateUpperLetters() {
    var str = [];
    for(var i = 65; i < 91; i++){
     str.push(String.fromCharCode(i));
    }
    return str.join('')
}

function generateLowerLetters() {
    var str = [];
    for(var i = 97; i < 123; i++){
     str.push(String.fromCharCode(i));
    }
    return str.join('')
}

function generateNumbers() {
    var str = ''
    for (var i = 0; i < 10; i++) {
        str += String(i)
    }
    return str
}

var validate = function(password) {
    var normalCheck = true
    var lowerLetters = generateLowerLetters()
    var upperLetters = generateUpperLetters()
    var numbers = generateNumbers()
    var characters = lowerLetters + upperLetters + numbers

    var lowerCheck = false
    var upperCheck = false
    var numCheck = false

    var l = password.length
    // check length first
    if (l < 6) {
        normalCheck = false
    }
    else {
        for (var i = 0; i < password.length; i++) {
            var letter = password[i]
            if (!characters.includes(letter)) {
                normalCheck = false
                break
            }
            else {
                if (lowerLetters.includes(letter)) {
                    lowerCheck = true
                    continue
                }
                if (upperLetters.includes(letter)) {
                    upperCheck = true
                    continue
                }
                if (numbers.includes(letter)) {
                    numCheck = true
                }
            }
        }
    }
    var specificCheck = lowerCheck && upperCheck && numCheck
    var checkAll = specificCheck && normalCheck
    return checkAll
}

// console.log(validate('Password123')); // true


// 给定一个字符串, 如果这个字符串里面每个字母都至少出现一次, 那么就说明这个是一个合法的字符串

var isPangram = function(str) {
    var result = false
    var string = str.toLowerCase()
    var letters = generateLowerLetters()
    var unRepeatLetters = string[0]
    var totalLength = letters.length
    for (var i = 1; i < string.length; i++) {
        var letter = string[i]
        // valid character and not be repeated in the 'unRepeatLetters'
        var condition = letters.includes(letter) && (!unRepeatLetters.includes(letter))
        if (condition) {
            unRepeatLetters += letter
        }
    }
    if (unRepeatLetters.length == totalLength) {
        result = true
    }
    return result
}
