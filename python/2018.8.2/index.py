"""
给定一个 Fighter 类, 写一个函数来计算两个 fighter 之间的获胜者
战斗方法为每回合攻击对方一次, 失败者为 health <= 0
"""
class Fighter(object):
    def __init__(self, name, health, damage_per_attack):
        self.name = name
        self.health = health
        self.damage_per_attack = damage_per_attack

def declare_winner(fighter1, fighter2, first_attacker):
    f1_health = fighter1.health
    f2_health = fighter2.health
    f1_attack = fighter1.damage_per_attack
    f2_attack = fighter2.damage_per_attack

    while True:
        if first_attacker == fighter1.name:
            f2_health -= f1_attack
            if f1_health <= 0:
                return fighter2.name
            f1_health -= f2_attack
            if f2_health <= 0:
                return fighter1.name

        elif first_attacker == fighter2.name:
            f1_health -= f2_attack
            if f1_health <= 0:
                return fighter2.name
            f2_health -= f1_attack
            if f2_health <= 0:
                return fighter1.name


"""
写一个类具有如下行为:

joe = Person('Joe')
joe.greet('Kate') # should return 'Hello Kate, my name is Joe'
joe.name          # should == 'Joe'
"""

class Person(object):
    def __init__(self, name):
        self.name = name

    def greet(self, greet_name):
        return f'Hello {greet_name}, my name is {self.name}'


"""
写一个 Block 类, 构造函数是一个列表[width, length, height]
"""
class Block(object):
    def __init__(self, list):
        self.width = list[0]
        self.length = list[1]
        self.height = list[2]

    def get_width(self):
        return self.width
    
    def get_length(self):
        return self.length

    def get_height(self):
        return self.height

    def get_volume(self):
        return self.width * self.length * self.height

    def get_surface_area(self):
        return 2 * (self.width * self.length + self.width * self.height + self.height * self.length)


"""
给定一系列不定参数, 返回参数类型是数字的所有参数的和
"""
def sum(*args):
    total = 0
    for i in args:
        if type(i) == int:
            total += i
    return total 


"""
写一个类, 里面有一个方法, 接受两个参数均为列表, 返回第一个列表不在第二个列表里面的元素
"""
class List(object):
    def remove_(self, integer_list, values_list):
        l = []
        for i in integer_list:
            if i not in values_list:
                l.append(i)
        return l




if __name__ == '__main__':
    f1 = Fighter("Lew", 10, 2)
    f2 = Fighter("Harry", 5, 4)
    print(declare_winner(f1, f2, "Lew"))


