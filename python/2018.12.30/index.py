"""
写一个函数, 参数为一个字符串, 对该字符串进行排列组合, 返回所有该字符串所对应的排列组合, 如:

permutations('a'); # ['a']
permutations('ab'); # ['ab', 'ba']
permutations('aabb'); # ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
"""
# 这里注意使用了 set 集合, .add() 方法可以往集合里面添加元素, 但是无法添加重复元素
def permutations(str):
    result = set([str])
    if len(str) == 2:
        result.add(str[1] + str[0])

    elif len(str) > 2:
        for i, c in enumerate(str):
            for s in permutations(str[:i] + str[i + 1:]):
                result.add(c + s)

    return list(result)
