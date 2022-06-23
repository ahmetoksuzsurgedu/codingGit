const express = require('express')
const router = express.Router();

router.get('/about', (req, res) => res.send('About page... from Get Methode'))
router.post('/about', (req, res) => res.send('About page... from Post Methode'))

module.exports = router;