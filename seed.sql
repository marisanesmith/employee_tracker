DROP DATABASE IF EXISTS jobDB

CREATE DATABASE jobDB

USE jobDB

CREATE TABLE department (
    dept_id INTEGER NOT NULL AUTO_INCREMENT,
    dept_name VARCHAR(30) NULL,
    PRIMARY KEY (dept_id),
    FOREIGN KEY ()
)

CREATE TABLE role (
    rol_id INTEGER(1) NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10,2) NOT NULL,
    department_id INTEGER(1) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (department_id) REFERENCES department(department_id)
)

CREATE TABLE employee (
    employee_id INTEGER NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER(1) NOT NULL,
    manager_id INTEGER(1),
    PRIMARY KEY (employee_id),
    FOREIGN KEY (role_id) REFERENCES role(role_id),
)

INSERT INTO department (dept_name)
VALUES 
("Engineering"),
()

INSERT INTO role (title, salary, department_id)
VALUES 
("Software Engineer", 150,000, 3),
("Lead Developer", 80,000, 3)


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
("Marisa", "NeSmith", 1, null);


-- inner join the 3 tables