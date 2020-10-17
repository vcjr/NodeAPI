// Requireing the http module included with Node
const http = require("http");
const gameData = require("./data/upcomingVideoGames.json");


// Seperating out the variables
// Creating and saving the server as a constant to be able to make this more modular
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/html");
//   res.write("<h1>Hello World</h1>");
//   res.end();
// });

// Shorter way of initializing header info
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type' : 'application/json'});
  res.end(JSON.stringify(gameData));

});

// Setting a default port or taking in the default enviroment port
const PORT = process.env.PORT || 7777;

server.listen(PORT, () => console.log(`Server running on Port: ${PORT}`));
