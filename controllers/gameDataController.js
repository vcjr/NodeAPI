const GameData = require("../models/gameDataModel");

const { getPostData } = require("../utils");
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
    const body = await getPostData(req);

    const { name, publisher, developer, description, price } = JSON.parse(body);

    const game = {
      name,
      publisher,
      developer,
      description,
      price,
    };
    // Make sure to await when calling a promise
    const newGame = await GameData.create(game);

    res.writeHead(201, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(newGame));
  } catch (error) {
    console.log(error);
  }
}

// @desc  Update Game Data
// @route PUT '/api/gamedata/:id'
async function updateGameData(req, res, id) {
  try {
    const game = await GameData.findById(id);
    
    if (!game) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Game Doesn't Exist" }));
    } else {
      const body = await getPostData(req);
  
      const { name, publisher, developer, description, price } = JSON.parse(body);
  
      const gameData = {
        name: name || game.name,
        publisher: publisher || game.publisher,
        developer: developer || game.developer,
        description: description || game.description,
        price: price || game.price,
      };
      // Make sure to await when calling a promise
      const updatedGame = await GameData.update(id, gameData);
  
      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(updatedGame));
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getAllGameData,
  getGameData,
  createGameData,
  updateGameData
};
