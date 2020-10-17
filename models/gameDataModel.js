const allGameData = require("../data/upcomingVideoGames.json");

function findAll() {
  return new Promise((resolve, reject) => {
    resolve(allGameData);
  });
}

function findById(id) {
  return new Promise((resolve, reject) => {
    const gameData = allGameData.find((game) => game.id === id );
    resolve(gameData);
  });
}

module.exports = {
  findAll,
  findById
};
