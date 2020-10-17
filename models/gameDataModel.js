const gameData = require("../data/upcomingVideoGames.json");

function findAll() {
  return new Promise((resolve, reject) => {
    resolve(gameData);
  });
}

module.exports = {
  findAll,
};
