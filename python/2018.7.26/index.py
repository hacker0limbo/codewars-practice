"""
给定一个字符串, 里面包含一些数字, 返回里面的最大值和最小值
high_and_low("1 2 3 4 5") => "5 1"
high_and_low("1 2 -3 4 5") => "5 -3"
high_and_low("1 9 3 4 -5") => "9 -5"
"""
def high_and_low(str):
    num_list = str.split(' ')
    min_num = min(num_list, key=int)
    max_num = max(num_list, key=int)
    return max_num + ' ' + min_num


"""
给定一串数字, 将里面的数字按照从大到小的顺序重新排列
"""
def Descending_Order(num):
    num_list = []
    for i in str(num):
        num_list.append(i)
    num_list.sort(reverse=True)
    print(num_list)
    num_sorted = int(''.join(num_list))
    return num_sorted

# 更加简单的方法如下
# sorted 方法返回一个新的列表, sort 方法会对原始列表进行修改
def Descending_Order(num):
    return int("".join(sorted(str(num), reverse=True)))


"""
给定一个 DNA 字符串, 返回对应的碱基字符串
"""
def DNA_strand(str):
    dna_str = ''
    dna_dict = {
        'A': 'T',
        'G': 'C',
        'T': 'A',
        'C': 'G',
    }
    for i in str:
        dna_str += dna_dict[i]
    return dna_str

# 更简单的方法如下, 使用列表推导
pairs = {'A':'T','T':'A','C':'G','G':'C'}
def DNA_strand(dna):
    return ''.join([pairs[x] for x in dna])


"""
给定一个数字, 将每个数字平方以后再连接起来, 返回一个数字
9119 => 811181
"""
def square_digits(num):
    num_list = [int(i) for i in str(num)]
    square_num_list = [str(j**2) for j in num_list]
    new_num = int(''.join(square_num_list))
    return new_num

# 其他方法
def square_digits(num):
    ret = ""
    for x in str(num):
        ret += str(int(x)**2)
    return int(ret)


"""
给定一个字符串, 判断里面是否有相等的 x 和 o
zpzpzpp => true
zzoo => false
"""
def xo(str):
    low_str = str.lower()
    o_num = low_str.count('o')
    x_num = low_str.count('x')
    return o_num == x_num


"""
给定一个列表, 将里面的字符串全部过滤只剩数字, 返回一个列表
[1,2,'aasf','1','123',123] => [1,2,123]
"""
def filter_list(list):
    result_list = [i for i in list if type(i) is not str]
    return result_list


"""
给定一个字符串句子, 返回里面单词最短的那个的长度, 返回为数字
i want to travel the world writing code one day => 1
"""
def find_short(str):
    str_list = str.split(' ')
    short = len(str_list[0])
    for i in str_list:
        if len(i) < short:
            short = len(i)
    return short

# 另一种简单的方法, 用列表推导
def find_short(s):
    return min(len(x) for x in s.split())


if __name__ == '__main__':
    print(high_and_low("1 9 3 4 -5"))
    print(Descending_Order(432421))
    print(DNA_strand('ATTGC'))
    print(square_digits(912))
    print(xo('fff'))
    print(filter_list([1,2,'aasf','1','123',123]))
    print(find_short('i want to travel the world writing code one day'))