USE jobsDB;

INSERT INTO department (dept_name)
VALUES 
("Engineering"),
("Legal"),
('Sales'),
('Finance');


INSERT INTO role (title, salary, department_id)
VALUES 
("Software Engineer", 150,000, 3),
("Lead Engineer", 80,000, 3),
("Sales Lead", 65,000, 4),
("Salesperson", 30,000, 4),
("Lawyer", 175,000, 2),
("Legal Team Lead", 70,000, 2),
("Accountant", 95,000, 1);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
("Marisa", "NeSmith", 1, null),
("William", "Chenausky", 2, null),
("Bianca", "Haas", 3, null),
("Teresa", "Moon", 4, null),
("Stephanie" "Dominguez", 5, null)


-- inner join the 3 tables