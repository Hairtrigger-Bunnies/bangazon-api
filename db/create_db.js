const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db/bangazoncorp.sqlite');

//requiring in data for tables
const { product_types } = require('../data/product_types');
const { generateCustomers } = require('../data/customers');
const { generateProducts } = require('../data/products');
const { generatePaymentTypes } = require('../data/payment_types');
const { generateOrders } = require('../data/orders');
// const { computers } = require('../data/computers');
const { generateEmployees } = require('../data/employees');
// const { training_programs } = require('../data/training_programs');
const { generateDepartments } = require('../data/departments');

// Create customer collection...
let customers = generateCustomers();
console.log('customers', customers[0]);
// Then pass its length, and the product types' length, into the function to create products,
// so we can randomly assign customer and product type ids to each product 
let products = generateProducts(product_types.length, customers.length);
console.log('products', products[0]);

let payment_types = generatePaymentTypes(customers.length);
console.log('pay_types', payment_types[0]);

let orders = generateOrders(payment_types.length, customers.length);
console.log('orders', orders[0]);

console.log('product_types', product_types[0]);

let departments = generateDepartments();
console.log('employees', employees[0]);

let employees = generateEmployees(departments.length);
console.log('employees', employees[0]);



// inProduction is true or false, but sqlite doesn't support. So we set to Int & use 1 and 0
db.serialize(function() {
    // Need to drop in this order, since shows depends on directors id props
    db.run(`DROP TABLE IF EXISTS Products`);
    db.run(`DROP TABLE IF EXISTS Payment_Types`);
    db.run(`DROP TABLE IF EXISTS Product_Types`);
    db.run(`DROP TABLE IF EXISTS Orders`);
    db.run(`DROP TABLE IF EXISTS Customers`);
    

    //CREATE TABLES AND COLUMNS
    db.run(`CREATE TABLE IF NOT EXISTS Products (
      ProductID INTEGER PRIMARY KEY, 
      title TEXT,
      price INT,
      description TEXT,
      type_id INT,
      customer_id INT)`
    );

    db.run(`CREATE TABLE IF NOT EXISTS Payment_Types (
        PaymentTypeID INTEGER PRIMARY KEY, 
        payment_type TEXT,
        account_number INT,
        customer_id INT)`
    );

    db.run(`CREATE TABLE IF NOT EXISTS Product_Types (
        ProductTypeID INTEGER PRIMARY KEY, 
        name TEXT)`
    );

    db.run(`CREATE TABLE IF NOT EXISTS Orders (
        OrderID INTEGER PRIMARY KEY, 
        order_date TEXT,
        payment_type_id INT,
        customer_id INT)`
    );

    db.run(`CREATE TABLE IF NOT EXISTS Customers (
        CustomerID INTEGER PRIMARY KEY, 
        first_name TEXT,
        last_name TEXT,
        creation_date INT,        
        active TEXT,
        last_login TEXT,
        email TEXT,
        address TEXT,
        phone_number INT)`
    );



    //INSERT DATA INTO TABLES
    products.forEach( ({title, price, description, type_id, customer_id}) => {
        db.run(`INSERT INTO Products (title, price, description, type_id, customer_id) 
                VALUES ("${title}", "${price}", "${description}", "${type_id}", "${customer_id}")`);
    });

    product_types.forEach( ({name}) => {
        db.run(`INSERT INTO Product_Types (name) 
                VALUES ("${name}")`);
    });
    
    payment_types.forEach( ({payment_type, account_number, customer_id}) => {
      db.run(`INSERT INTO Payment_Types (payment_type, account_number, customer_id) 
              VALUES ("${payment_type}", "${account_number}", "${customer_id}")`);
    });

    orders.forEach( ({order_date, payment_type_id, customer_id}) => {
        db.run(`INSERT INTO Orders (order_date, payment_type_id, customer_id) 
                VALUES (${order_date}, ${payment_type_id}, "${customer_id}")`);
    });

    customers.forEach( ({first_name, last_name, creation_date, active, last_login, email, address, phone_number}) => {
        db.run(`INSERT INTO Customers (first_name, last_name, creation_date, active, last_login, email, address, phone_number) 
                VALUES ("${first_name}", "${last_name}", ${creation_date}, ${active}, "${last_login}", "${email}", "${address}", "${phone_number}")`);
    });



        // computers.forEach( ({assigned_employee, purchase_date, decomission_date}) => {
    //   db.run(`INSERT INTO Computers (Assigned_Employee, Purchase_Date, Decommission_Date) 
    //           VALUES ("${assigned_employee}", "${purchase_date}", "${decomission_date}")`);
    // });

    // employees.forEach( ({first_name, last_name, training_programs, department_id, is_supervisor}) => {
    //     db.run(`INSERT INTO Employees (First_Name, Last_Name, Training_Programs, Department_ID, Is_Supervisor) 
    //             VALUES ("${first_name}", "${last_name}", "${training_programs}", "${department_id}", "${is_supervisor}")`);
    // });

    // training_programs.forEach( ({name, start_date, end_date, max_attendees}) => {
    //     db.run(`INSERT INTO Training_Programs (Name, Start_Date, End_date, Max_Attendees) 
    //             VALUES ("${name}", "${start_date}", "${end_date}", "${max_attendees}")`);
    // });
      
    // departments.forEach( ({name, expense_budget, supervisor}) => {
    //     db.run(`INSERT INTO Departments (Name, Expense_Budget, Supervisor) 
    //             VALUES ("${name}", "${expense_budget}", "${supervisor}")`);
    // });
});


//scripts: 'db:reset': "node db/build-db", 'start': "nodemon blah"