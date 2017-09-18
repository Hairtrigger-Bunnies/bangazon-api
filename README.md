# BangazonAPI

Welcome to the API for Bangazon INC. This API will allow user to GET, POST, PUT, and DELETE items from the Bangazon Database. Before you're able to utilize the database, there are a few items you need to have installed.

# Installing Technologies

## SQLite

### For OSX Users

```
brew install sqlite
```

### For Windows Users

Visit the [SQLite downloads](https://www.sqlite.org/download.html) and download the 64-bit DLL (x64) for SQLite version, unzip and install it.

## SQL Browser

The [DB browser for SQLite](http://sqlitebrowser.org/) will let you view, query and manage your databases during the course.

## Visual Studio Code

[Visual Studio Code](https://code.visualstudio.com/download) is Microsoft's cross-platform editor that we'll be using during orientation for writing C# and building .NET applications. Make sure you add the [C# extension](https://code.visualstudio.com/Docs/languages/csharp) immediately after installation completes.

## For both OSX and Windows users

### NPM
1. Run “npm init —y” in the terminal to initial npm so further commands may be used
2. Run “npm install —save -dev” to install the node modules both globally and save it to the package.json in one step.

### Node.js
  1. Run “npm install node.js” in the terminal to be able to run node

### Nodemon
1. Run  “npm install -g nodemon” in the terminal to install and access nodemon 

### Faker.js
1. Run “npm install faker” to install fakerJS that will allow you access to its data

### Express.js
1. Run “npm instal express” in the terminal in order to use express.js

### DB Browser
1. Within SQLite, open the database “bangazoncorp.sqlite” from “db” folder within VS Code to access the DB Browser and its data within SQLite.

### Postman
1. Go to “https://www.getpostman.com/“ and download Postman in oder to run tests for GET, POST, PUT, DELETE from data in SQLite

### Body parser
1. Run “npm install body-parser” in the terminal to install body parser, which takes the data from postman and turns it into an object within the html when testing


## Using the API


### Customers


### Products



### Product Types

Within postman, you are able to accomplish the following:


* GET ALL- You can access a list of all product types by running a GET call to "http://localhost:3000/customers"

* GET ONE- You can get the information on a single product type by running a Get call to "http://localhost:3000/customers/0" *OR any number in the database you want to search for to find the correlating object

* PUT- You can update the info on a specific product type by running a Put call to "http://localhost:3000/customers/0" OR whichever product type ID position you're looking to edit 
    - Running a put requires that you submit the entire object.
    - example: 
        {
          "first_name": "Tifa",
          "last_name": "Lockheart",
          "creation_date": "2017-09-14",
          "last_login": "2017-09-14",
          "email": "ff7_first_lady@avalanche.com",
          "address": "Nibelheim",
          "phone_number": "978-000-1200"
        }

* DELETE- You can delete a product type by running a Delete call to "http://localhost:3000/customers/0" OR whichever product type position/number you wish to delete

* POST- You can enter a new product type by running a Post call to "http://localhost:8008/customers"
    * You must put a `name` with a post.
    * Example: 
        {
          "first_name": "Tifa",
          "last_name": "Lockheart",
          "creation_date": "2017-09-14",
          "last_login": "2017-09-14",
          "email": "ff7_first_lady@avalanche.com",
          "address": "Nibelheim",
          "phone_number": "978-000-1200"
        }

* POST- You can return a list of customers who have not placed an order by running a GET call to "http://localhost:8008/customers/?active=false"

* GET ALL- You can access a list of all product types by running a GET call to 'http://localhost:8008/productTypes'

* GET ONE- You can get the information on a single product type by running a Get call to 'http://localhost:8008/productTypes/0' OR any number in the database you want to search for to find the correlating object

* PUT- You can update the info on a specific product type by running a Put call to 'http://localhost:8008/productTypes/0' OR whichever product type ID position you’re looking to edit 
    - Running a put requires that you submit the entire object.
    - example: `{“name” = ‘${Butter Beers}’}`

* DELETE- You can delete a product type by running a Delete call to 'http://localhost:8008/productTypes/0' OR whichever product type position/number you wish to delete

* POST- You can enter a new product type by running a Post call to 'http://localhost:8008/productTypes'
    * You must put a `name` with a post.
    * Example: `{ “name" =  ‘${Chocolate Frogs}’ }`


### Order

### Payment Type

Within postman, you are able to accomplish the following:

* GET ALL- You can access a list of all product types by running a GET call to "http://localhost:8008/paymentTypes"

* GET ONE- You can get the information on a single product type by running a Get call to "http://localhost:8008/paymentTypes/0" *OR any number in the database you want to search for to find the correlating object

* PUT- You can update the info on a specific product type by running a Put call to "http://localhost:8008/paymentTypes/0" OR whichever product type ID position you're looking to edit 
    - Running a put requires that you submit the entire object.
    - example: `{"name" = '${Handlebars}'`

* DELETE- You can delete a product type by running a Delete call to "http://localhost:8008/paymentTypes/0" OR whichever product type position/number you wish to delete

* POST- You can enter a new product type by running a Post call to "http://localhost:8008/paymentTypes"
    * You must put a `name` with a post.
    * Example: `{ "name" =  '${Mustaches}' }`

### Order Products

### Employees
