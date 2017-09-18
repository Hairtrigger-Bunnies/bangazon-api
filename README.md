# bangazon-api

### Product Types

Within postman, you are able to accomplish the following:

* GET ALL- You can access a list of all product types by running a GET call to “http://localhost:8008/productTypes”

* GET ONE- You can get the information on a single product type by running a Get call to “http://localhost:8008/productTypes/0” *OR any number in the database you want to search for to find the correlating object

* PUT- You can update the info on a specific product type by running a Put call to “http://localhost:8008/productTypes/0” OR whichever product type ID position you’re looking to edit 
    - Running a put requires that you submit the entire object.
    - example: `{“name” = ‘${Butter Beers}’}`

* DELETE- You can delete a product type by running a Delete call to “http://localhost:8008/productTypes/0” OR whichever product type position/number you wish to delete

* POST- You can enter a new product type by running a Post call to “http://localhost:8008/productTypes”
    * You must put a `name` with a post.
    * Example: `{ “name" =  ‘${Chocolate Frogs}’ }`
