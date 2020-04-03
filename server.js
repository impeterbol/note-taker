// Dependencies
// =============================================================
const express = require("express");

// Setting up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Setting up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// =============================================================
const callAPI = require('./routes/apiRoutes')
callAPI(app);
require('./routes/htmlRoutes')(app)



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});



//note to self about passing func
// const myFunc = require('./fizzBuzz')
// myFunc("ANythig I want")
// require('./fizzBuzz')("ANythig I want")


// Add(1, 4, function(result){
//   console.log(result)
// })
// function Add(x, y, cb){
//   cb(x + y)
// }