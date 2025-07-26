const express = require('express');
const router = express.Router();
const PlayerController = require('../controllers/playerController');

// GET semua player
router.get('/', PlayerController.getAllPlayers);

// GET player by ID
router.get('/:id', PlayerController.getPlayerById);

// POST buat player baru
router.post('/', PlayerController.createPlayer);

module.exports = router;