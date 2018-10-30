"""
写一个函数, 将 rgb 转换为 hex
"""
def rgb2hex(r, g, b):
    return "#{:02x}{:02x}{:02x}".format(r, g, b)


"""
给定一个网址 url, 找出其中的域名

http://github.com/carbonfive/raygun
>>> github

http://www.zombie-bites.com
>>> zombie-bites

https://www.cnet.com
>>> cnet
"""
def domain_name(url: str):
    return url.split('//')[-1].split('www.')[-1].split('.')[0]

# 这题需要注意的是如果 split 一个不存在的字符串分隔符, 原始 str 会全部被存储为一个列表
# eg: 'ac'.split('b') -> ['ac']


"""
给定一个字符串, 有多个不同元素组成, 给定一个 substr, 找出 substr 在这个 str 里面出现的次数
>>> search_substr('aa_bb_cc_dd_bb_e', 'bb') # 2 
>>> search_substr('aaabbbcccc', 'bbb') # 1
>>> search_substr( 'aaa', 'aa' ) # 2
>>> search_substr( 'aaa', '' ) # 0
>>> search_substr( 'aaa', 'aa', false ) # 1
"""
def search_substr(s, subs, allow_overlap=True):
    if s == '' or subs == '':
        return 0
    elif not allow_overlap:
        return s.count(subs)
    else:
        pass


"""
写一个类, 具有如下方法:
__init__ handlers 存储数据
.subscribe() 接受一个 func 参数, 增加到 handler 里面
.unsubscribe() 接受一个 func 参数, 移除这个函数
.emit() 接受任意参数, 作为触发函数的参数
"""
class Event:
    def __init__(self):
        self.handlers = set()
    
    def subscribe(self, func):
        self.handlers.add(func)
    
    def unsubscribe(self, func):
        self.handlers.remove(func)
    
    def emit(self, *args, **kwargs):
        for func in self.handlers:
            func(*args, **kwargs)

