DROP DATABASE IF EXISTS jobDB

CREATE DATABASE jobDB

USE jobDB

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  flavor VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  quantity INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (flavor, price, quantity)
VALUES ("vanilla", 2.50, 100);

CREATE TABLE department (
PRIMARY KEY (id)
)

CREATE TABLE role (
PRIMARY KEY (id)
)

CREATE TABLE employee (
PRIMARY KEY (id)
)

-- create insert into for each department, role and employee
-- inner join the 3 tables