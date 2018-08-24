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
        

if __name__ == '__main__':
    L = remove_smallest(2, [5, 3, 2, 1, 4])
    print(L)