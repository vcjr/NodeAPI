const GameData = require("../models/gameDataModel");

// @desc  Get All Game Data
// @route GET '/api/gamedata'
async function getAllGameData(req, res) {
  try {
    const allGameData = await GameData.findAll();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(allGameData));
  } catch (error) {
    console.log(error);
  }
}

// @desc  Get Single Game Data by :id
// @route GET '/api/gamedata/:id'
async function getGameData(req, res, id) {
  try {
    const gameData = await GameData.findById(id);

    if (!gameData) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Game Doesn't Exist" }));
    } else {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(gameData));
    }
  } catch (error) {
    console.log(error);
  }
}

// @desc  Create Game Data
// @route POST '/api/gamedata'
async function createGameData(req, res) {
  try {
    const game = {
      name: "Game Test",
      publisher: "Rockstar Games",
      developer: "Rockstar Games North",
      description:
        "This is the newest installment from Rockstar! What will they wow us with next???",
      price: 89.99,
    };

    // Make sure to await when calling a promise
    const newGame = await GameData.create(game);

    res.writeHead(201, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(newGame));
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getAllGameData,
  getGameData,
  createGameData,
};
