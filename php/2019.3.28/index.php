<?php

/*
写一个函数, 根据指令进行计算

初始为 0
i 增加1
d 减少1
s 平方数据
o 将数据存到 array 中

*/
function parse($data) {
    $result = [];
    $count = 0;
    $array = str_split($data);
    foreach ($array as $v) {
        switch ($v) {
            case "i":
                $count++;
                break;
            case "d":
                $count--;
                break;
            case "s":
                $count = pow($count, 2);
                break;
            case "o":
                array_push($result, $count);
                break;
        }
    }
    return $result;
}
?>