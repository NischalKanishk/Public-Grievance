const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
    res.render('reportMain')
})

router.get('/report', (req, res)=>{
    res.render('reportPortal')
})


module.exports = router