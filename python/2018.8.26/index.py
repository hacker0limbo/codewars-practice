"""
给定一个字符串, 写一个函数依次从字符串里面读取一个字母, 最后一个字母结束后回到开始
"""
def make_looper(s):
    count = -1
    def get_c():
        nonlocal count
        count += 1
        return s[count%len(s)] 
    return get_c


"""
闭包测试
"""
def test():
    n = 0
    def f():
        nonlocal n
        n += 1
        print(n)
    return f


"""
写一个类, 如下特性
1. 访问元素以后该元素被删除
messages=SecureList([1,2,3,4])
print messages[1]  # prints 2
print messages     # prints [1,3,4]
"""
class SecureList():
    # Implement here...
    def __init__(self, list):
        self.list = list[:]

    def __getitem__(self, index):
        return (self.list).pop(index)

    def __str__(self):
        temp, self.list = self.list, [] 
        return str(temp)  

    __repr__ = __str__

    def __len__(self):
        return len(self.list)


"""
给定一个列表, 元素均为字符串, 找出其中与其他字符串组成不一样的元素
[ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ])  => 'foo'
"""
def find_uniq(arr):
    l1 = [x.lower() for x in arr]
    l = list(map(sorted, map(set, l1)))
    for i in l:
        if l.count(i) == 1:
            sub_s = ''.join(i)
            break
    return ''.join([s for s in arr if sub_s in s])



if __name__ == '__main__':
    messages=SecureList([1,2,3,4])
    print(messages[1])  # prints 2
    print(messages)     # prints [1,3,4]
    print(messages)