# bangazon-api
### Products

Within postman, you are able to accomplish the following:

* GET ALL- You can access a list of all products by running a GET call to "http://localhost:8008/products"

* GET ONE- You can get the information on a single products by running a Get call to "http://localhost:8008/products/0" *OR any number in the database you want to search for to find the correlating object

* PUT- You can update the info on a specific product type by running a Put call to "http://localhost:8008/products/0" OR whichever product ID position you're looking to edit 
    - Running a put requires that you submit the entire object.
    - example: `{"name" = '${Handlebars}'`

* DELETE- You can delete a product type by running a Delete call to "http://localhost:8008/products/0" OR whichever product position/number you wish to delete

* POST- You can enter a new product type by running a Post call to "http://localhost:8008/products"
    * You must put a `name` with a post.
    * Example: `{ "name" =  '${Mustaches}' }`