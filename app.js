let express = require('express');
let app = express();
require('dotenv').config();
var bodyParser = require('body-parser');

// app.use(bodyParser);
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());


let routes = require('./Routes/');
app.use(`/bangazon-api/`, routes);

app.use( (req, res, next) => {
  let err = new Error('Not Found, dummy');
  err.status = 404;
  next("This got passed along");
});

app.use( (err, req, res, next) => {
  res.status( err.status || 500);
  res.json({
    message: "You blew it",

    err: err
  });
});

let port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
