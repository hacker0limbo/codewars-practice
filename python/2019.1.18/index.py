"""
给定一个列表, 写一个函数, 将所有的 0  移到末尾, 其余元素位置不变
"""

def move_zeros(array: list):
    start = list(filter(lambda x: x is not 0, array))
    end = list(filter(lambda y: y is 0, array))
    return start + end
