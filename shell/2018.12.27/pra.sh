#!/bin/bash

a=$(( 5 * 6 ))
echo $a

# 写一个函数, 有一个参数, 判断是奇数还是偶数
is_even() {
    if [ $(($1 % 2 == 1)) ]; then
        echo "Even";
    else
        echo "Odd"
    fi    
}

# 给定一个数字, 找出相反的数, 例如 4 -> -4
echo ${1}*-1 | bc

# 删除字符串第一个和最后一个字符
function remove_char() {
    arg=$1
    l=${#arg}
    echo ${arg:1:l-2}   
}
remove_char 'abc'

# 移除字符串之间的空格
function remove_space() {
    echo | sed 's/ //g'
}

