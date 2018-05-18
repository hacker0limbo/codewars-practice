-- easy sql: counting and grouping
/*
demographics: id name birthday race

选出每个人种(race)的人口数量, DESC 表示
输出为: race count
*/
SELECT
    race,
    COUNT(*)
FROM demographics
GROUP BY race
ORDER BY COUNT(*) DESC
