"""
给定一个列表, 移除里面最小的 n 个元素
    如果 n <= 0 返回原列表
    如果 n > 列表.length 返回空列表
"""
def remove_smallest(n, arr):
    i = 0
    l = arr[:]
    if n > len(l):
        result = []
    elif n <= 0:
        result = l
    else:
        while i < n:
            min_e = min(l)
            l.remove(min_e)
            i += 1
        result = l
    return result

# 另外一种方法是使用 sorted, smallest = sorted(arr)[:n]

"""
写一个图类, 里面有以下几个参数和方法:
    g = Graph(3) # 初始化
    g.add_edge(0, 1) # 增加点
    g.add_edge(2, 2)
    g.adj -> [[1], [0], [2, 2]]

    g.V 返回节点数
    g.E 返回路线数
    g.adj 依次返回每个节点与相邻节点连起来的数量

"""
class IllegalArgumentError(Exception):
    pass

class Graph:
    def __init__(self, v):
        if v < 0:
            raise IllegalArgumentError
        self.V = v
        self.E = 0
        self.adj = [[] for _ in range(v)]

    def add_edge(self, v, w):
        if (not 0 <= v < self.V) or (not 0 <= w < self.V):
            raise IllegalArgumentError
        self.adj[v].append(w)
        self.adj[w].append(v)
        self.E += 1
        

"""
给定一个字符串, 找到第一个没有在这个字符串里面重复的字母, 大小写敏感, 如果所有字母都是重复, 返回''
"""
def first_non_repeating_letter(s):
    s_lower = s.lower()
    for i in s_lower:
        if s_lower.count(i) == 1:
            index = s_lower.index(i)
            return s[index]
    return ''


"""
给定一个列表, 里面包含一系列数字, 找出和最大的子序列, 例如:
[-2, 1, -3, 4, -1, 2, 1, -5, 4] -> [4, -1, 2, 1]
"""
def maxSequence(arr):
    max, curr = 0, 0
    for i in arr:
        curr += i
        if curr < 0:
            curr = 0
        if curr > max:
            max = curr
    return max           


"""
给定两个字符串, 如果第一个字符串包含第二个字符串里面所有的字母, 返回 True, 否则 False
"""
def scramble(s1, s2):
    s = list(s2[:])
    for i in s1:
        if i in s:
            s.remove(i)
    if len(s) == 0:
        return True
    return False

# 更简单的方法是用 count 计算
def scramble_(s1,s2):
    for c in set(s2):
        if s1.count(c) < s2.count(c):
            return False
    return True


"""
写一个类, 构造函数接受一个列表和一个数字, 分别代表内容和每页的内容的数量
例子如下:

helper = PaginationHelper(['a','b','c','d','e','f'], 4)
helper.page_count # should == 2 第一页4个, 第二页2个
helper.item_count # should == 6
helper.page_item_count(0)  # should == 4
helper.page_item_count(1) # last page - should == 2
helper.page_item_count(2) # should == -1 since the page is invalid

# page_ndex takes an item index and returns the page that it belongs on
helper.page_index(5) # should == 1 (zero based index)
helper.page_index(2) # should == 0
helper.page_index(20) # should == -1
helper.page_index(-10) # should == -1 because negative indexes are invalid
"""
import math

class PaginationHelper:

    # The constructor takes in an array of items and a integer indicating
    # how many items fit within a single page
    def __init__(self, collection: list, items_per_page: int):
        self.collection = collection
        self.items_per_page = items_per_page
    
    # returns the number of items within the entire collection
    def item_count(self):
        return len(self.collection)
    
    # returns the number of pages
    def page_count(self):
        return math.ceil(len(self.collection)/self.items_per_page)
       
    # returns the number of items on the current page. page_index is zero based
    # this method should return -1 for page_index values that are out of range
    def page_item_count(self, page_index: int):
        result = -1
        total_page = self.page_count()
        total_items = self.item_count()
        if page_index == total_page -1:
            result = total_items - self.items_per_page*(total_page-1)
        if page_index < total_page - 1:
            result = self.items_per_page
        return result
    
    # determines what page an item is on. Zero based indexes.
    # this method should return -1 for item_index values that are out of range
    def page_index(self, item_index: int):
        result = -1
        if 0 <= item_index < self.item_count():
            result = math.floor(item_index/self.items_per_page)
        return result


if __name__ == '__main__':
    L = remove_smallest(2, [5, 3, 2, 1, 4])
    print(L)
    print(first_non_repeating_letter('moonmen'))
    print(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
    helper = PaginationHelper(['a','b','c','d','e','f'], 4)
    print(helper.page_count())
    print(helper.item_count())
    print(helper.page_item_count(0))
    print(helper.page_item_count(1))
    print(helper.page_item_count(2))
    print(helper.page_index(5))
    print(helper.page_index(2))
    print(helper.page_index(20))
    print(helper.page_index(-10))