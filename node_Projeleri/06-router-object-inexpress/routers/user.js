const express = require('express')
const router = express.Router();

router.get('/user', (req, res) => res.send('User page... from Get Methode'))
router.post('/user', (req, res) => res.send('User page... from Post Methode'))

module.exports = router;