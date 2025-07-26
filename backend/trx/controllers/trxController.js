const trxModel = require('../models/trxModels');

const trxController = {
  getAllTrx: (req, res) => {
    trxModel.getAll((err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json(results);
    });
  },

  getAllTrxGames: (req, res) => {
    trxModel.getAllGames((err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json(results);
    });
  },

  getTrxWinner: (req, res) => {
    const game = req.params.game;
    trxModel.getWinner(game, (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json(results);
    });
  },  

  getTrxById: (req, res) => {
    const id = req.params.id;
    trxModel.getById(id, (err, result) => {
      if (err) return res.status(500).json({ error: err });
      if (result.length === 0) return res.status(404).json({ message: 'Trx not found' });
      res.json(result[0]);
    });
  },

  createTrx: (req, res) => {
    const trxData = req.body;
    trxModel.create(trxData, (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.status(201).json({ message: 'Trx created', id: result.insertId });
    });
  }
};

module.exports = trxController;