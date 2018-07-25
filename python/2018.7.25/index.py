"""
给定一个字符串, 找出里面元音的个数
"""
def getCount(str):
	num_vowels = 0
	vowels = 'aeiou'
	for i in str:
		if i.lower() in vowels:
			num_vowels += 1
	return num_vowels


"""
给定一个字符串, 删除里面所有的元音
This website is for losers LOL! => Ths wbst s fr lsrs LL!
"""
def disemvowel(str):
	vowels = 'aeiou'
	new_str = ''
	for i in str:
		if i.lower() not in vowels:
			new_str += i
	return new_str

# 更简单的方法如下:
def disemvowel(s):
    return s.translate(None, "aeiouAEIOU")

def disemvowel(str):
	for i in "aeiouAEIOU":
		s = str.replace(i, '')
	return s

"""
给定一个字符串, 找出里面的中间项
test => es
a => a
testing => t
"""
def get_middle(s):
	return s[(len(s) - 1) // 2:len(s) // 2 + 1]


"""
给定一个字符串句子, 将每个单词的第一个字母放到该单词的最后, 并且在每个单词末尾加上 'ay', 符号排出
pig_it('Pig latin is cool') => igPay atinlay siay oolcay
pig_it('Hello world !') => elloHay orldWay !
"""
def pig_it(str):
	str_list = str.split(' ')
	new_list = []
	for i in str_list:
		if i.isalpha():
			new_word = i[1:] + i[0] + 'ay'
		else:
			new_word = i
		new_list.append(new_word)
	new_str = ' '.join(new_list)
	return new_str


"""
给定一个字符串句子, 将所有的单词开头字母全部大写
"""
# 注意 s.title() 会把 "aren't" 变成 "Aren'T"
def toJadenCase(str):
	str_list = str.split(' ')
	new_list = []
	for i in str_list:
		i = i.capitalize()
		new_list.append(i)
	new_str = ' '.join(new_list)
	return new_str

def toJadenCase(string):
    return " ".join(w.capitalize() for w in string.split())


"""
给定一个字符串, 返回如下形式:
"abcd" => "A-Bb-Ccc-Dddd"
RqaEzty => "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
"cwAt" => "C-Ww-Aaa-Tttt"
"""
def accum(str):
	new_list = []
	for i in range(len(str)):
		new_word = (str[i]*(i+1)).capitalize()
		new_list.append(new_word)
	new_str = '-'.join(new_list)
	return new_str


if __name__ == '__main__':
	print(getCount('abc'))
	print(get_middle('a'))
	print(pig_it('This is my string !'))
	print(disemvowel('This website is for losers LOL!'))
	print(toJadenCase("How can mirrors be real if our eyes aren't real"))
	print(accum('RqaEzty'))