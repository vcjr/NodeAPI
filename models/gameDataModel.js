let allGameData = require("../data/upcomingVideoGames.json");
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
    const newGame = { id: uuidv4(), ...game };
    allGameData.push(newGame);
    writeDataToFile("./data/upcomingVideoGames.json", allGameData);
    resolve(newGame);
  });
}

function update(id, game) {
  return new Promise((resolve, reject) => {
    const index = allGameData.findIndex((game) => {
      return game.id === id;
    });

    allGameData[index] = { id, ...game };
    writeDataToFile("./data/upcomingVideoGames.json", allGameData);
    resolve(allGameData[index]);
  });
}

function remove(id) {
  return new Promise((resolve, reject) => {
    allGameData = allGameData.filter((game) => game.id !== id);
    writeDataToFile("./data/upcomingVideoGames.json", allGameData);
    resolve();
  });
}

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove
};
