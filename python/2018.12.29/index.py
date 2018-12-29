# 给定一个二维数组, 里面可能存在覆盖的区间(overlaped intervals), 具体如下:
# [
#    [1, 4],
#    [7, 10],
#    [3, 5],
# ]
# 其中, [1, 4] 和 [3, 5] 存在区间重复, 合并以后为 [1, 5]
# 因此, 假设有两个数组 [a, b] 和 [c, d], 其中 a < c, 如果 c < d, 那么存在重复, 合并以后新数组为[a, max(b, d)]
# 注意, 在比较的时候需要将所有数组先按照每个数组第一个元素升序排列
# 可以将该题抽象为一根数轴, |___| |_|_|______| [1, 3] [4, 6], [5, 10]
#                        1___3 4_5-_-6----10
#                       --------------------------->

# 题目1: 给定一系列数组, 计算所有数组间隔的和, 覆盖的不计算
def maerged_intervals(intervals):
    intervals = list(map(list, intervals))
    # 先按照每一个 interval 里面的第一个元素升序排序
    new_intervals = sorted(intervals, key=lambda interval: interval[0])
    merged = [new_intervals[0]]
    for current in new_intervals:
        previous = merged[-1]
        if current[0] <= previous[1]:
            previous[1] = max(previous[1], current[1])
        else:
            merged.append(current)
    return merged


def sum_of_intervals(intervals):
    merged = maerged_intervals(intervals)
    return sum([i[1]-i[0] for i in merged])


# 写一个函数, 第一个参数为给定字符串, 第二个参数为 marker, 将字符串中包含 marker 的部分后面(包括 marker 全部删除)
# 例如:
#   result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
#   result should == "apples, pears\ngrapes\nbananas"
def solution(str, markers):
    arr_s = str.split('\n')
    new_arr = []
    for s in arr_s:
        temp = s
        for m in markers:
            if m in s:
                i = s.index(m)
                temp = s[0:i].strip()
                break
        new_arr.append(temp)
    return '\n'.join(new_arr)


# 给定两个 ipv4 地址, 两个之间的差值
import ipaddress

def ips_between(start, end):
    s = int(ipaddress.IPv4Address(start))
    e = int(ipaddress.IPv4Address(end))
    return abs(s-e)


# 给定三个字符串, 判断后两个字符串是否可以组成第一个字符串, 例如:
# is_merge('codewars', 'code', 'wars') True
# is_merge('codewars', 'cod', 'wars') False
# 其中, 第二和第三个字符串有顺序要求, 必须在第一个中按出现顺序排列
def is_merge(s, s1, s2):
    s_new = ''.join(list(sorted(list(s1+s2))))
    s_old = ''.join(list(sorted(list(s))))
    return s_old == s_new and determin_order(s, s1) and determin_order(s, s2)

def determin_order(s, s1):
    indexs = []
    for v in s1:
        indexs.append(s.find(v))
    new_indexs = sorted(indexs)
    print(new_indexs, indexs)
    return indexs == new_indexs


if __name__ == '__main__':
    intervals = [
        [1, 4],
        [7, 10],
        [3, 5]
    ]
    print(maerged_intervals(intervals))
    print(sum_of_intervals(intervals))

    s = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
    print(s)

    print(is_merge('codewars', 'code', 'wars'))
    print(determin_order('codewars', 'wasr'))
