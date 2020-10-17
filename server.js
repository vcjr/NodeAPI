// Requireing the http module included with Node
const http = require("http");

// Seperating out the variables
// Creating and saving the server as a constant to be able to make this more modular
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.write("<h1>Hello World</h1>");
  res.end();
});

// Setting a default port or taking in the default enviroment port
const PORT = process.env.PORT || 7777;

server.listen(PORT, () => console.log(`Server running on Port: ${PORT}`));
