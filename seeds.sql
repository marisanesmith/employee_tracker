USE jobsDB;

INSERT INTO department (dept_name)
VALUES 
("Engineering"),
("Legal"),


INSERT INTO role (title, salary, department_id)
VALUES 
("Software Engineer", 150,000, 3),
("Lead Developer", 80,000, 3)


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
("Marisa", "NeSmith", 1, null);


-- inner join the 3 tables