USE jobDB;

INSERT INTO department (name)
VALUES 
("Engineering"),
("Legal"),
('Sales'),
('Finance');


INSERT INTO role (title, salary, department_id)
VALUES 
("Software Engineer", 150000.00, 3),
("Lead Engineer", 80000.00, 3),
("Sales Lead", 65000.00, 4),
("Salesperson", 30000.00, 4),
("Lawyer", 175000.00, 2),
("Legal Team Lead", 70000.00, 2),
("Accountant", 95000.00, 1);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
("Marisa", "NeSmith", 1, 2),
("William", "Chenausky", 2, 1),
("Bianca", "Haas", 3, 3),
("Teresa", "Moon", 4, 3),
("Stephanie" "Dominguez", 5, 1)


-- inner join the 3 tables