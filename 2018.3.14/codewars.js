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
    console.log(result);
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
