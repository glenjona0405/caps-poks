const db = require('../../config/db');

const trxModel = {
  getAll: (callback) => {
    db.query('SELECT * FROM trx_games', callback);
  },

  getAllGames: (callback) => {
    db.query('SELECT game FROM trx_games group by game', callback);
  },

  getWinner: (game, callback) => {
  db.query('SELECT sum(profit_loss) FROM trx_games where game = ?', [game], callback);
  },

  checkWinner: (game, callback) => {
  db.query('SELECT * FROM trx_games where game = ? and is_winner = 1', [game], callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM trx_games WHERE id = ?', [id], callback);
  },

  create: (trxData, callback) => {
    db.query('INSERT INTO trx_games SET ?', trxData, callback);
  }
};

module.exports = trxModel;


