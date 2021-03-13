use employees;

INSERT INTO department
    (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Sales Lead', 100000, 1),
    ('Salesperson', 80000, 1),
    ('Lead Engineer', 150000, 2),
    ('Software Engineer', 120000, 2),
    ('Account Manager', 160000, 3),
    ('Accountant', 125000, 3),
    ('Legal Team Lead', 250000, 4),
    ('Lawyer', 190000, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Marisa', 'NeSmith', 1, NULL),
    ('Matthew', 'NeSmith', 2, 1),
    ('Meghan', 'NeSmith', 3, NULL),
    ('Chris', 'Harkness', 4, 3),
    ('Kathy', 'Tran', 5, NULL),
    ('Bianca', 'Haas', 6, 5),
    ('Teresa', 'Moon', 7, NULL),
    ('Mohamed', 'Hamdhoon', 8, 7);

