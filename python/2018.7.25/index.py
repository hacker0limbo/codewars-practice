# 给定一个字符串, 找出里面元音的个数
def getCount(str):
	num_vowels = 0
	vowels = 'aeiou'
	for i in str:
		if i.lower() in vowels:
			num_vowels += 1
	return num_vowels
print(getCount('abc'))

# 给定一个字符串, 找出里面的中间项
# test => es
# a => a
# testing => t
def get_middle(str):
	middle_of_str = ''
	str_length = len(str)
	if str_length % 2 == 1:
		middle_of_str += str[len//2+1]
	else:
		middle_of_str += str[len//2] + str[len//2+1]
	return middle_of_str
print(get_middle('title'))