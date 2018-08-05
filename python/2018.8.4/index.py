"""
写一个函数, 参数是字符串, 返回所有单词的字母的大写的组合
如果传入参数不是字符串, 返回 'not a string'
如果字符串中有其他字符, 例如数字, 返回 'not letters'
"""
def make_acronym(phrase):
    try:
        return ''.join(word[0].upper() if word.isalpha() else 0 for word in phrase.split())
    except AttributeError:
        return 'Not a string'
    except TypeError:
        return 'Not letters'


"""
写一个类, 有如下表现形式:
>>> d = Dictionary()

>>> d.newentry('Apple', 'A fruit that grows on trees')

>>> print(d.look('Apple'))
A fruit that grows on trees

>>> print(d.look('Banana'))
Cant find entry for Banana
"""
class Dictionary():
    def __init__(self):
        self.d = {}
        
    def newentry(self, word, definition):
        self.d[word] = definition
        
    def look(self, key):
        if key in self.d.keys():
            return self.d[key]
        return f"Can't find entry for {key}"


"""
给定一个字符串, 返回里面各个字母出现的次数, 返回如下:
'abracadabra' => [('a', 5), ('b', 2), ('r', 2), ('c', 1), ('d', 1)]
"""
def ordered_count(s: str) -> str:
    s_set = set(s)
    result = []           
    for i in s_set:
        result.append((i, s.count(i)))
    return result


if __name__ == '__main__':
    print(ordered_count('abracadabra'))