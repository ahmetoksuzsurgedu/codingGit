const express = require('express')
const router = express.Router();
const isAuthorized = require('../helpers/isAuthorized')


router.get('/user',isAuthorized, (req, res) => res.send('User page... from Get Methode'))
router.post('/user', (req, res,next) => {
    const user = false
    if (user){
    res.send('User page... from Post Methode')}
    else {
        return next({status:404, message:'This user is not found!'})
    }
    })

module.exports = router;