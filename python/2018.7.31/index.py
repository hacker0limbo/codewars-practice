"""
给定一个列表, 里面包含一系列字符串, 如果字符串长度为4 选出来, 否则不考虑
["Ryan", "Kieran", "Mark",] => ["Ryan", "Mark"]
"""
def friend(list: list) -> list:
    l = []
    for i in list:
        if len(i) == 4:
            l.append(i)
    return l

# 返回的是一个列表, 因此可以直接使用列表推到
# [i for i in list if len(i) == 4]

"""
给定一个列表, 只包含 0, 1 将里面的元素转换为 10 进制
"""
def binary_array_to_number(list: list) -> list:
    binary_str = ''.join([str(i) for i in list])
    return int(binary_str, 2)


"""
给定一个字符串, 找出里面大写字母的索引, 返回一个列表
'CodEWaRs' => [0, 3, 4, 6]
"""
def capitals(words: str) -> list:
    l = []
    for index in range(len(words)):
        if words[index].isupper():
            l.append(index)
    return l

# 也可以使用列表推到
# [i for (i, c) in enumerate(word) if c.isupper()]


"""
给定一个列表, 返回里面最大值和最小值, 返回值为列表
"""
def min_max(list: list) -> list:
    smallest = min(list)
    giggest = max(list)
    return [smallest, giggest]


"""
给定一个列表, 里面包含子列表, 每个子列表第一个元素作为相加, 第二个元素作为相减, 计算最后剩余
[10,0],[3,5],[5,8] => 5
"""
def number(nums: list) -> int:
    rest = 0
    for i in nums:
        rest += i[0]
        rest -= i[1]
    return rest



if __name__ == '__main__':
    print(friend(["Ryan", "Kieran", "Mark",]))
    print(binary_array_to_number([1,1,1,1]))
    print(capitals('CodEWaRs'))
    print(min_max([1]))
    print(number([[10,0],[3,5],[5,8]]))