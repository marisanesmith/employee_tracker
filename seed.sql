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
    id INTEGER NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NULL,
    PRIMARY KEY (id)
)

CREATE TABLE employee (
    id INTEGER NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER(1) NOT NULL,
    manager_id INTEGER(1),
    PRIMARY KEY (id)
)

CREATE TABLE role (
    id INTEGER(1) NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10,2) NOT NULL,
    department_id INTEGER(1) NOT NULL,
    PRIMARY KEY (id)
)



-- create insert into for each department, role and employee
-- inner join the 3 tables