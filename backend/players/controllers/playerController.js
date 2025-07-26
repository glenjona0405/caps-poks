const PlayerModel = require('../models/playerModel');

const PlayerController = {
  getAllPlayers: (req, res) => {
    PlayerModel.getAll((err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json(results);
    });
  },

  getPlayerById: (req, res) => {
    const id = req.params.id;
    PlayerModel.getById(id, (err, result) => {
      if (err) return res.status(500).json({ error: err });
      if (result.length === 0) return res.status(404).json({ message: 'Player not found' });
      res.json(result[0]);
    });
  },

  createPlayer: (req, res) => {
    const playerData = req.body;
    PlayerModel.create(playerData, (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.status(201).json({ message: 'Player created', id: result.insertId });
    });
  }
};

module.exports = PlayerController;