"""
给定一个列表, 返回列表里面最小的两个数字的和
[19, 5, 42, 2, 77] => 7
[10, 343445353, 3453445, 3453545353453] => 3453455
"""
def sum_two_smallest_numbers(nums):
    num_list = nums[:]
    num1 = min(num_list)
    num_list.remove(num1)
    num2 = min(num_list)
    return num1 + num2

# 更简单的方法是使用 sorted 函数以后用切片
def sum_two_smallest_numbers(numbers):
    return sum(sorted(numbers)[:2])

"""
给定一个字符串, 只保留最后4个字符, 其余字符都使用 '#' 替代
"""
def maskify(str):
    front = str[:-4]
    end = str[-4:]
    s1 = ''.join(['#' for i in range(len(front))])
    return s1 + end

# 更加简单方法为使用字符串相乘:
def maskify(str):
    return "#"*(len(str)-4) + str[-4:]


"""
给定一个字符串, 查找里面是否有重复字符, 忽略大小写
"Dermatoglyphics" => true
'moOse' => false
"""
def is_isogram(str):
    s = str.lower()
    result = True
    for i in range(len(str)):
        if s[i+1:].find(s[i]) != -1:
            return False
    return result

# 更简单的方法是判断元素个数:
def is_isogram(string):
    string = string.lower()
    for letter in string:
        if string.count(letter) > 1:
            return False
    return True


"""
给定2个字符串, 将两个字符串先去重, 再连接, 最后排序
"""
def longest(a1, a2):
    return "".join(sorted(set(a1 + a2)))


if __name__ == '__main__':
    print(sum_two_smallest_numbers([19, 5, 42, 2, 77]))
    print(maskify('fdsafdsafdsa'))
    print(is_isogram('moOse'))