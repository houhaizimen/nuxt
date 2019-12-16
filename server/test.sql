-- 设置连接编码
SET NAMES UTF8;
-- 删除数据库
DROP DATABASE IF EXISTS testTable;
-- 创建数据库
CREATE DATABASE testTable CHARSET=UTF8;
-- 使用数据库
USE testTable;
-- 创建表
CREATE TABLE login(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(6),
    upwd VARCHAR(32)
);
-- 插入数据
INSERT INTO login VALUES (null, 'tom', 12);
INSERT INTO login VALUES (NULL, 'tina', 13);
INSERT INTO login VALUES (NULL, 'jack', 14);
