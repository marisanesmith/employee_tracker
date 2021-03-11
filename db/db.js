const connection = require('./connection.js')

// rewrite to view, create and update job database based on user input

class DB {
    constructor(connection) {
        this.connection = connection
    }

    findAllEmployees(){
        this.connection.query(
            ""
        )
    }
}

module.exports = new DB (connection)












const readProducts = () => {
    console.log('Selecting all products...\n');
    connection.query('SELECT * FROM products', (err, res) => {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.log(res);
      connection.end();
    });
  };
  
  const deleteProduct = () => {
    console.log('Deleting all strawberry icecream...\n');
    connection.query(
      'DELETE FROM products WHERE ?',
      {
        flavor: 'strawberry',
      },
      (err, res) => {
        if (err) throw err;
        console.log(`${res.affectedRows} products deleted!\n`);
        // Call readProducts AFTER the DELETE completes
        readProducts();
      }
    );
  };
  
  const updateProduct = () => {
    console.log('Updating all Rocky Road quantities...\n');
    const query = connection.query(
      'UPDATE products SET ? WHERE ?',
      [
        {
          quantity: 100,
        },
        {
          flavor: 'Rocky Road',
        },
      ],
      (err, res) => {
        if (err) throw err;
        console.log(`${res.affectedRows} products updated!\n`);
        // Call deleteProduct AFTER the UPDATE completes
        deleteProduct();
      }
    );
  
    // logs the actual query being run
    console.log(query.sql);
  };
  
  const createProduct = () => {
    console.log('Inserting a new product...\n');
    const query = connection.query(
      'INSERT INTO products SET ?',
      {
        flavor: 'Rocky Road',
        price: 3.0,
        quantity: 50,
      },
      (err, res) => {
        if (err) throw err;
        console.log(`${res.affectedRows} product inserted!\n`);
        // Call updateProduct AFTER the INSERT completes
        updateProduct();
      }
    );
  
    // logs the actual query being run
    console.log(query.sql);
  };
  
  // Connect to the DB
  connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}\n`);
    createProduct();
  });
