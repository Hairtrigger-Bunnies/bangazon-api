let express = require('express');
let app = express();

// middleware
const middleware = (req, res, next) => {
  console.log("I am middleware!");
  next();
};

//Tells the app to go through the middleware before launching routes
app.use(middleware);


let routes = require('./Routes/');
app.use(`/bangazon/`, routes);

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