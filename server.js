const mysql = require('mysql')
// const express = require('express')
const inquirer = require('inquirer');
const consoleTable = require('console.table');

// change back to process.env ????
const connection = mysql.createConnection({

  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'developer',
  database: 'jobDB',
});

// connection.connect((err) => {
//     if (err) throw err;
//     mainOptions();


// inquirer prompts, confirms

const mainOptions = () => {
    inquirer.prompt(
        {
            type: 'list',
            name: 'options',
            message: 'What would you like to do?',  
            choices: [
                'View All Employees',
                "View All Employees by Department",
                'View All Employees by Role',
                'Add Employee',
                'Add Department',
                "Add Role",
                'Update Employee Role',
                'Update Employee Manager', //delete if I don't get to this part
                'Remove Employee', //delete if I don't get to this part
                'Exit'
            ]
        })
    .then((answer) => {
        console.log("this is a test")
        switch(answer.mainOptions) {
            case "View All Employees":
                viewAllEmployees();
                break;

            case "View All Employees by Department":
                viewAllDept();
                break;
            
            case "View All Employees by Role":
                viewAllRoles();
                break;

            case "Add Employee":
                addEmployee();
                break;

            case "Add Department":
                addDepartment();
                break;

            case "Add Role":
                addRole();
                break;

            case "Update Employee Role":
                updateEmployee();
                break;

            // add back in if I get to this part
            // case "Remove Employee":
            //     removeEmployee();
            //     break;

            case "Exit":
                connection.end();
                break;
        }
    });
};

mainOptions();

// Add Employee function
const addEmployee = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'first',
            message: "What is the employee's first name?"
        },
        {
            type: 'input',
            name: 'last',
            message: "What is the employee's last name"
        },
        {
            type: 'list',
            name: 'role',
            message: "What is the employee's role?",
            choices: [
                'Sales Lead',
                'Salesperson',
                'Lead Engineer',
                'Software Engineer',
                'Lead Engineer',
                'Accountant',
                'Legal Team Lead',
                'Lawyer'
            ]
        },
        {
            type: 'input',
            name: 'managerID',
            message: "What is the manager's ID?"
        }

    ])
    .then((res) => {
        connection.query('INSERT INTO employee SET ?',
        {
            first_name: res.first,
            last_name: res.last,
            role_id: res.role,
            manager_id: res.managerID,
        },
        (err) => {
            if(err) throw err;
            console.log("You have added a new employee");
            mainOptions();
        });
    }); 
};

// View all Employees
const viewAllEmployees = () => {
    connection.query("SELECT * FROM employee", (err,res) => {
        if (err) throw err;
        console.table(res);
        mainOptions();
        })
}

// Add role function
const addRole = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'role',
            message: "What is the employee's role?"
        },
        {
            type: 'input',
            name: 'salary',
            message: "What is the salary of the role?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the ID for the role?"
        },

    ])
    .then((res) => {
        connection.query('INSERT INTO role SET ?',
        {
            title: res.role,
            salary: res.salary,
            department_id: res.id,
        });
        console.log("You have added a new role");
        mainOptions();
    }) 
};

// View all Roles
const viewAllRoles = () => {
    this.connection.query("SELECT * FROM role", (err, res) => {
        if(err) throw err;
        console.table(res);
        mainOptions();
    })
};

// Add Department function

const addDepartment = () => {
    return inquirer.prompt({
            type: 'input',
            name: 'department',
            message: "What is the name of the Department?"
    })
    .then((res) => {
        connection.query('INSERT INTO department SET ?',
        {
            name: res.department,
        });
        console.log("You have added a new department");
        mainOptions();
    }) 
};

// View all Departments (is it employee.department or just department?)
const viewAllDept = () => {
    connection.query("SELECT * FROM department", (err, res) => {
        if(err) throw err;
        console.table(res);
        mainOptions();
    })
};

// connection.connect((err) => {
//     if (err) throw err;
//     //run the mainOptions function after the connection is made to prompt the user
//     mainOptions();
// });



// Function to update employee
// function updateEmployee() {
//     viewAllEmployees()
// }


