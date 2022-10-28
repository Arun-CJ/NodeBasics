// const add = require("./addition");
const { one } = require("./addition");
const fs = require("fs");
// require("./pathos");
// require("./fsmodule");
const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Request started");
  res.setHeader("Content-Type", "text/html");
  //   res.write("<div>Request received</div>");
  //   res.write("<center>Request assessing</center>");
  //   res.end("<h1>Response sent</h1>");
  fs.readFile("./views/index.html", (err, data) => {
    console.log("inside read file");
    if (err) {
      res.end("Something went wrong!!!");
    } else {
      res.write(data.toString());
      res.end();
    }
  });
});

server.listen(4000, "localhost", () => {
  console.log("server is listening in port 3000");
});
