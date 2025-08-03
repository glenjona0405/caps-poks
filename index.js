const express = require('express');
const app = express();
const cors = require('cors');
const playersRoutes = require('./backend/players/routes/playerRoute');
const trxRoutes = require('./backend/trx/routes/trxRoute')
//const PORT = 5000;
const PORT = 5000;

// Middleware
app.use(cors(/*{origin: ['https://glenjona0405.github.io', 'http://127.0.0.1:5500']}*/));// agar bisa konek ke API database (misal kalau portnya beda)
app.use(express.json()); // agar bisa parsing JSON dari request body

// Route
app.use('/players', playersRoutes);
app.use('/trx', trxRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});


/*
//---------------------------------------//
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  db.query('SELECT * FROM users WHERE id = ?', [userId], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ message: 'User tidak ditemukan' });
    res.json(results[0]);
  });
});
*/
