"""
写一个 HighScoreTable 类, 
    一个基本可输入属性参数用来确定最大得分记录长度, 
    update() 方法更新最高记录, 取最大值, 
    reset() 方法清空得分表
"""
class HighScoreTable:
    
    def __init__(self, length):
        self.scores = []
        self.length = length
    
    def update(self, input):
        self.scores.append(input)
        self.scores = sorted(self.scores, reverse=True)[0:self.length]
        return self.scores

    def reset(self):
        self.scores.clear()
    

"""
给定一个单向链表, 从最后一个元素开始遍历, 找到给定的第 n 个元素
a -> b -> c -> d

k = 1, d
k = 2, c
...
k > 4, 返回链表
"""   
# pass in the linked list
# to access the head of the linked list
# linked_list.head
def search_k_from_end(linked_list, k):
    node = linked_list.head
    l = []
    while node is not None:
        l.append(node.data)
        node = node.next
    if k <= len(l):
        return l[-k]
    else:
        return None


"""
写一个类, 拥有 encode() 和 decoe() 方法, 可以将给定的字符串转换为十六进制数字, 
    Hey guys, 1 -> '4865792067757973'
    Hey guys, 2 -> '34383635373932303637373537393733'
"""
class HexCipher:

    @classmethod
    def encode(cls, s, n):
        for i in range(n):
            s = s.encode('utf-8').hex()
        return s

    @classmethod
    def decode(cls, s, n):
        for i in range(n):
            s = bytes.fromhex(s).decode('utf-8')
        return s


"""
给定一个类, 默认只有静态属性没有方法, 
写一个函数返回结果如下:
    Hi, I'm one of those (classname)s! Have a look at my (attrs)
"""
def show_me(instname):
    attrs = sorted(instname.__dict__.iterkeys())
    if len(attrs) == 1:
        attrs = attrs[0]
    else:
        attrs = '{} and {}'.format(', '.join(attrs[:-1]), attrs[-1])
    return 'Hi, I\'m one of those {}s! Have a look at my {}.'\
        .format(instname.__class__.__name__, attrs)


"""
给定一个列表, 返回列表一个元素与下一个元素的组成的元祖循环, 如下
l = [1,2,3] -> (1,2), (2, 3), (3, 1), (1, 2) ...
"""
def gen(n, l):
    a, b = l[0], l[1]
    while n > 0:
        yield (a, b)
        a, b = l[(0+n)%len(l)], l[(1+n)%len(l)]
        n = n - 1



if __name__ == '__main__':
    g = gen(5, [1, 2, 3])
    print(next(g))
    print(next(g))
    print(next(g))
    print(next(g))