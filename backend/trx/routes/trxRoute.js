const express = require('express');
const router = express.Router();
const trxController = require('../controllers/trxController');

// GET semua trx
router.get('/allTrx', trxController.getAllTrx);

// GET semua games
router.get('/allTrxGames', trxController.getAllTrxGames);

// GET winner
router.get('/winner', trxController.getTrxWinner);

// GET player by ID
router.get('/:id', trxController.getTrxById);

// POST buat trx baru
router.post('/', trxController.createTrx);

module.exports = router;