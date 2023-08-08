const express  = require("express");
const bodyParser = require("body-parser");

const App = express();
var userIsAuth = false;

App.use(bodyParser.urlencoded({extended:true}));

function userCheck(req,res,next) {
  const password = req.body["password"];
  if (password === "sanoj"){
    userIsAuth = true;
  }
  next();
}

App.use(userCheck);

App.get("/",(req,res) => {
  res.sendFile(__dirname + "/index.html")
})

App.post("/check",(req,res) => {
  if (userIsAuth){
    res.sendFile(__dirname + "/secret.html")
  }
  else {
    res.sendFile(__dirname + "/index.html")
  }
})

App.listen(3000,() => {
  console.log("Server has Been Started on port 3000");
})

	