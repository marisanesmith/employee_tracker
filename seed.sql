DROP DATABASE IF EXISTS jobDB

CREATE DATABASE jobDB

USE jobDB

CREATE TABLE department (
    id INTEGER NOT NULL AUTO_INCREMENT,
    dep_name VARCHAR(30) NULL,
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

INSERT INTO department (id, dep_name)
VALUES (1, "Engineering");

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Marisa", "NeSmith", 1, null);

INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Software Engineer", 150,000, 3);


-- create insert into for each department, role and employee
-- inner join the 3 tables