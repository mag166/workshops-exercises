SQLite version 3.19.3 2017-06-27 16:48:08
Enter ".help" for usage hints.

-- #1)
SELECT name, MIN(population)
FROM country
WHERE region = "Southern Europe";

--#2)
SELECT language
FROM countrylanguage
WHERE countrycode = "VAT" AND isofficial = "t";

--#3)
SELECT percentage, countrycode
FROM countrylanguage
WHERE language= 'Italian';

--#4)
SELECT name
FROM city
WHERE countrycode = "SMR";

--#5)
SELECT countrycode
FROM city
WHERE name LIKE "%Serra%";

--#6)
SELECT capital
FROM country
WHERE code = "BRA";
----
SELECT name
FROM city
WHERE id = 211;

--#7)
-- ??????
-- Profit

--#8)
SELECT name
FROM city
WHERE population = 91084;