const express = require('express');
const router = express.Router();
const db = require('../../db/connection');

// Get all parties
router.get('/parties', (req, res) => {
  // internal logic remains the same
  const sql = `SELECT * FROM parties`;
  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: rows
    });
  });
});

// Get single party
router.get('/party/:id', (req, res) => { });

// Delete a party
router.delete('/party/:id', (req, res) => { });

module.exports = router;