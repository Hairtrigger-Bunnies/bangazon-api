const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db/bangazoncorp.sqlite');

//requiring in data for tables
const { product_types } = require('../data/product_types');
const { generateCustomers } = require('../data/customers');
const { generateProducts } = require('../data/products');
const { generatePaymentTypes } = require('../data/payment_types');
const { generateOrders } = require('../data/orders');
const { generateComputers } = require('../data/computers');
const { generateEmployees } = require('../data/employees');
const { generateTrainingPrograms } = require('../data/training_programs');
const { generateDepartments } = require('../data/departments');

// Create collections...
let customers = generateCustomers();
let products = generateProducts(product_types.length, customers.length);
let payment_types = generatePaymentTypes(customers.length);
let orders = generateOrders(payment_types.length, customers.length);
let departments = generateDepartments();
let employees = generateEmployees(departments.length);
let computers = generateComputers(employees.length);
let training_programs = generateTrainingPrograms();

// inProduction is true or false, but sqlite doesn't support. So we set to Int & use 1 and 0
db.serialize(function() {
    // Need to drop in this order, since shows depends on directors id props and employees
    db.run(`DROP TABLE IF EXISTS Products`);
    db.run(`DROP TABLE IF EXISTS Payment_Types`);
    db.run(`DROP TABLE IF EXISTS Product_Types`);
    db.run(`DROP TABLE IF EXISTS Orders`);
    db.run(`DROP TABLE IF EXISTS Customers`);
    db.run(`DROP TABLE IF EXISTS Departments`);
    db.run(`DROP TABLE IF EXISTS Employees`);
    db.run(`DROP TABLE IF EXISTS Computers`);
    db.run(`DROP TABLE IF EXISTS Training_Programs`);
    
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
        creation_date DATE,        
        active TEXT,
        last_login TEXT,
        email TEXT,
        address TEXT,
        phone_number INT)`
    );

    db.run(`CREATE TABLE IF NOT EXISTS Departments (
        DepartmentID INTEGER PRIMARY KEY, 
        department_name TEXT,
        expense_budget INT,
        supervisor_first TEXT,
        supervisor_last TEXT)`
    );

    db.run(`CREATE TABLE IF NOT EXISTS Employees (
    EmployeeID INTEGER PRIMARY KEY, 
    first_name TEXT,
    last_name TEXT,
    department_id INT,
    email TEXT,
    address TEXT,
    phone_number INT,
    is_supervisor TEXT)`
    );

    db.run(`CREATE TABLE IF NOT EXISTS Computers (
        ComputerID INTEGER PRIMARY KEY, 
        assigned_employee TEXT,
        purchase_date INT,
        decommission_date INT)`
    );

    db.run(`CREATE TABLE IF NOT EXISTS Training_Programs (
        TrainingProgramID INTEGER PRIMARY KEY, 
        program_name TEXT,
        start_date TEXT,
        end_date TEXT,
        max_attendees INT)`
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

    employees.forEach( ({first_name, last_name, department_id, email, address, phone_number, is_supervisor}) => {
        db.run(`INSERT INTO Employees (first_name, last_name, department_id, email, address, phone_number, is_supervisor) 
                VALUES ("${first_name}", "${last_name}", "${department_id}", "${email}", "${address}", "${phone_number}", "${is_supervisor}")`);
    });

    departments.forEach( ({department_name, expense_budget, supervisor_first, supervisor_last}) => {
        db.run(`INSERT INTO Departments (department_name, expense_budget, supervisor_first, supervisor_last) 
                VALUES ("${department_name}", "${expense_budget}", "${supervisor_first}", "${supervisor_last}")`);
    });

    computers.forEach( ({assigned_employee, purchase_date, decommission_date}) => {
        db.run(`INSERT INTO Computers (assigned_employee, purchase_date, decommission_date) 
              VALUES ("${assigned_employee}", "${purchase_date}", "${decommission_date}")`);
    });

    training_programs.forEach( ({program_name, start_date, end_date, max_attendees}) => {
        db.run(`INSERT INTO Training_Programs (program_name, start_date, end_date, max_attendees) 
                VALUES ("${program_name}", "${start_date}", "${end_date}", "${max_attendees}")`);
    });   
});