// const connection = require('./connection.js')

// // rewrite to view, create and update job database based on user input

// class DB {
//     constructor(connection) {
//         this.connection = connection
//     }

//     // View all Employees
//     viewAllEmployees() {
//         this.connection.query("SELECT * FROM employee", (err,res) => {
//             if (err) throw err;
//             console.table(res);
//             mainOptions();
//             })
//     }

//     // View all Departments (is it employee.department or just department?)
//     viewAllDept() {
//         this.connection.query("SELECT * FROM employee.department", (err, res) => {
//             if(err) throw err;
//             console.table(res);
//             mainOptions();
//         })
//     }

//     // View all Roles
//     viewAllRoles() {
//         this.connection.query("SELECT * FROM role", (err, res) => {
//             if(err) throw err;
//             console.table(res);
//             mainOptions();
//         })
//     }
// };

// module.exports = new DB (connection)