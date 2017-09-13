let express = require("express");
let app = express();

// middleware
const middleware = (req, res, next) => {
  next();
};

//Tells the app to go through the middleware before launching routes
app.use(middleware);

let routes = require("./Routes/");
app.use(`/bangazon-api/`, routes);

app.use((req, res, next) => {
  let err = new Error("Not Found, dummy");
  err.status = 404;
  next("Moving Along");
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: "Error, Messed Up Baby",
    err: err
  });
});

let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
