"""
给定一个字符串, 看是否符合以下条件:
    1, 至少包含一个 char
    2, 字母(大小写均可), 数字0-9, 
    3, 不允许空白或者下划线
"""
def alphanumeric(s):
    return s.isalnum()

"""
给定一些列数字, 将给定的数字作为参数传进, 计算他们的最小公倍数
"""
import math

def lcm_(a, b):
    return int(a*b / math.gcd(a, b))


def lcm(*args):
    p = 1
    for i in args:
        p = lcm_(p, i)
    return p

print(lcm(2, 4, 4))