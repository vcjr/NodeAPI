const allGameData = require("../data/upcomingVideoGames.json");
const { writeDataToFile } = require("../utils");
const { v4: uuidv4 } = require("uuid");

function findAll() {
  return new Promise((resolve, reject) => {
    resolve(allGameData);
  });
}

function findById(id) {
  return new Promise((resolve, reject) => {
    const gameData = allGameData.find((game) => game.id === id);
    resolve(gameData);
  });
}

function create(game) {
  return new Promise((resolve, reject) => {
    const newGame = {id: uuidv4(), ...game};
    allGameData.push(newGame);
    writeDataToFile("./data/upcomingVideoGames.json", allGameData)
    resolve(newGame);
  });
}

module.exports = {
  findAll,
  findById,
  create,
};
