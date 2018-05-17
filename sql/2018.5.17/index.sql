-- sql 练习1

-- simple join
/*
products: id name isbn company_id price
companies: id name

选出所有 products 的信息, 以及 company.name 作为 company_name, 需要将两张表联结起来
*/
SELECT
    p.*,
    c.name AS company_name
FROM
    companies AS c,
    products AS p
WHERE p.company_id = c.id

-- simple group by
/*
people: id name age

根据年龄分类, 计算出有多少人有相同的年龄

需要展示: age[group by], people_count
*/
SELECT
    age,
    COUNT(*) AS people_count
FROM people
GROUP BY age

-- simple join with COUNT
/*
people: id name
toys: id name people_id

联结两张表, 返回所有的人的信息和被人买的玩具的信息(toy_count)
*/
SELECT
    p.*,
    COUNT(*) AS toy_count
FROM people AS p
INNER JOIN toys AS t ON t.people_id = p.id
GROUP BY p.id

-- best selling books
/*
books: name author copies_sold

选出销量最好的五本书, 包含 books 的所有信息
*/
SELECT *
FROM books
ORDER BY copies_sold DESC
LIMIT 5
