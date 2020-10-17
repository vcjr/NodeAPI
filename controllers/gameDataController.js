const GameData = require("../models/gameDataModel");

async function getGameData(req, res) {
  try {
    const gameData = await GameData.findAll();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(gameData));
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getGameData
}