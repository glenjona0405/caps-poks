const db = require('../../config/db');

const PlayerModel = {
  getAll: (callback) => {
    db.query('SELECT * FROM players order by player_name asc', callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM players WHERE id = ?', [id], callback);
  },

  create: (playerData, callback) => {
    db.query('INSERT INTO players SET ?', playerData, callback);
  }
};

module.exports = PlayerModel;


