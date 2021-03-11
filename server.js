const mysql = require('mysql')
// const express = require('express')
const inquirer = require('inquirer');
const consoleTable = require('console.table');

// inquirer prompts, confirms

function mainOptions() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'options',
            message: 'What would you like to do?',  
            choices: [
                'View All Employees',
                'View All Employees By Department',
                'View All Employees by Role',
                'Add Employee',
                'Add Department',
                "Add Role",
                'Update Employee Role',
                'Update Employee Manager', //delete if I don't get to this part
                'Remove Employee', //delete if I don't get to this part

            ]
        }
    ])
};

mainOptions();

// Add Employee function
function addEmployee() {
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
            name: 'manager',
            message: "Who is the employee's manager?"
        }

    ])
    // .then((response) => {
    //     const engineer = new Engineer(response.name, response.id, response.email, response.github);
    //     team.push(engCard(engineer));
    //     newTeamMbr();
    // })
};

// Add role function
function addRole() {
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
            name: 'roleID',
            message: "What is the ID for the role?"
        },

    ])
    // .then((res) => {
    //     const intern = new Intern(response.name, response.id, response.email, response.school);
    //     team.push(intCard(intern));
    //     newTeamMbr();
    // })
};

// Add Department function

function addDepartment() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'department',
            message: "What is the name of the Department?"
        },

    ])
    // .then((response) => {
    //     const intern = new Intern(response.name, response.id, response.email, response.school);
    //     team.push(intCard(intern));
    //     newTeamMbr();
    // })
}

// View all Employees
function viewAllEmployees() {
    this.connection.query("SELECT * FROM employee", (err,res) => {
        if (err) throw err;
        console.table(res);
        mainOptions();
        })
}

// View all Departments (is it employee.department or just department?)
 function viewAllDept() {
    this.connection.query("SELECT * FROM employee.department", (err, res) => {
        if(err) throw err;
        console.table(res);
        mainOptions();
    })
};

// View all Roles
function viewAllRoles() {
    this.connection.query("SELECT * FROM role", (err, res) => {
        if(err) throw err;
        console.table(res);
        mainOptions();
    })
};


// Function to update employee
// function updateEmployee() {
//     viewAllEmployees()
// }



// choices of what you would like to do

//add employee

//add job description

//add department

// main menu