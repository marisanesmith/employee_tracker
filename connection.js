const mysql = require('mysql');
const inquirer = require('inquirer');
const consoleTable = require('console.table')


const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});


