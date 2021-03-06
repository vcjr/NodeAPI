// Requireing the http module included with Node
const http = require("http");
const {
  getGameData,
  getAllGameData,
  createGameData,
  updateGameData,
  deleteGameData
} = require("./controllers/gameDataController");

const server = http.createServer((req, res) => {
  if (req.url === "/api/gamedata" && req.method === "GET") {
    getAllGameData(req, res);
  } else if (
    req.url.match(/\/api\/gamedata\/([0-9]+)/) &&
    req.method === "GET"
  ) {
    const id = req.url.split("/")[3];
    getGameData(req, res, id);
  } else if (req.url === "/api/gamedata" && req.method === "POST") {
    createGameData(req, res);
  } else if (
    req.url.match(/\/api\/gamedata\/([0-9]+)/) &&
    req.method === "PUT"
  ) {
    // Manage Updating of a game's data
    const id = req.url.split("/")[3];
    updateGameData(req, res, id);
  } else if (
    req.url.match(/\/api\/gamedata\/([0-9]+)/) &&
    req.method === "DELETE"
  ) {
    const id = req.url.split("/")[3];
    deleteGameData(req, res, id);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: `No Route For \{ ${req.url} \}` }));
  }
});

// Setting a default port or taking in the default enviroment port
const PORT = process.env.PORT || 7777;

server.listen(PORT, () => console.log(`Server running on Port: ${PORT}`));
