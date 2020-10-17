// Requireing the http module included with Node
const http = require("http");
const { getGameData } = require('./controllers/gameDataController');

const server = http.createServer((req, res) => {
  if (req.url === "/api/gamedata" && req.method === 'GET') {
    getGameData(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({message: `No Route For \{ ${req.url} \}`}));
  }
});

// Setting a default port or taking in the default enviroment port
const PORT = process.env.PORT || 7777;

server.listen(PORT, () => console.log(`Server running on Port: ${PORT}`));
