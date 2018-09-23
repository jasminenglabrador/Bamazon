var mysql = require('mysql');
var inquirer = require('inquirer');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "bamazon_db"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
   startBamazon();
   
  });

function fetchProducts() {
    con.query('SELECT * FROM products', function (err, result) {
        if (err) throw err;
        for (var i = 0; i<result.length; i++){
            console.log(result[i].product_name)
        }
        inquirer
        .prompt([
          /* Pass your questions in here */
          {
              type: "input",
              message: "What is the ID of the product you would like to buy?",
              name: "product_ID"
          },
          {
              type: "input",
              message: "How many would you like to buy?",
              name: "quantity"
          }
        ])
        .then(answers => {
          // Use user feedback for... whatever!!
          console.log(answers);
        });
        
      }); 
}
 

function startBamazon() {
    fetchProducts()
 
}



// 5. Then create a Node application called `bamazonCustomer.js`. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.

// 6. The app should then prompt users with two messages.

//    * The first should ask them the ID of the product they would like to buy.
//    * The second message should ask how many units of the product they would like to buy.