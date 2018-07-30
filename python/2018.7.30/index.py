"""
给定一个字符串, 必须是数字, 长度为4, 否则返回 false
'1234' => True
'12345' => False
'a234' => False
"""
def validate_pin(str: str) -> bool:
    return (len(str) == 4 or len(str) == 6) and str.isdigit()

# 更加简单的方法是可以使用 a in list 判断一组数据中是否包含某个数据
def validate_pin(pin: str):
    return len(pin) in (4, 6) and pin.isdigit()


"""
给定一个字符串, 只能有 a-m 的字符组成, 返回组成的比例, 为字符串
'abcxyz' => '3/6'
"""
def printer_error(str):
    valid_str = 'abcdefghijklmn'
    not_valid_num = 0
    for i in str:
        if i not in valid_str:
            not_valid_num += 1
    result = f'{not_valid_num}/{len(str)}'
    return result


"""
给定一个列表, 移除里面最小的数字, 不改变列表的顺序
"""
def remove_smallest(list: list) -> list:
    l = list[:]
    if len(l) != 0:
        l.remove(min(l))
    return l


"""
给定一个随机数字, 如果是属于 palindromes 就返回, 否则不断和自身翻转相加, 返回次数
87 + 78 = 165; 165 + 561 = 726; 726 + 627 = 1353; 1353 + 3531 = 4884
"""
def palindrome_chain_length(n: int) -> int:
    steps = 0
    while str(n) != str(n)[::-1]:
        n = n + int(str(n)[::-1])
        steps += 1
    return steps


"""
给定二个字符串作为参数, 如果第二个参数是第一个参数的结尾, 返回 True
('abc', 'bc') => True
('abc', 'ab') => False
"""
def solution(s1: str, s2: str) -> bool:
    last_in_s1 = s1[:-(len(s2))-1:-1][::-1]
    return last_in_s1 == s2

# 更简单的方法是用 s1.endswith(s2)




if __name__ == '__main__':
    print(validate_pin('a34'))
    print(printer_error('abcxyz'))
    print(remove_smallest([2, 2, 1, 2, 1]))
    print(palindrome_chain_length(87))
    print(solution('abc', 'bc'))