// const supervillains = require('supervillains');

// console.log(supervillains.random());

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

const express = require('express');
const App = express();

App.listen(3000, function() {
  console.log("This Server runs Port Number 3000");
});

App.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

App.get("/about", function(req, res) {
  res.send("Sanoj Ahamed");
})