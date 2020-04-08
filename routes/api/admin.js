//Dependencies
const express = require('express')
const router  = express.Router()
const bcrypt = require('bcryptjs')
const ibmdb = require('ibm_db');

//Routes
router.get('/login', (req, res)=>{
    res.render('login.ejs')
})

router.post('/login', (req, res)=>{
    const user =  req.body.username
   const pass =  req.body.password
 if(user === 'admin' && pass ==='admin' ){
        res.redirect('/panel')
        console.log('User logged in')
   }
   else{
       res.redirect('back')
       console.log('Wrong creds')
   }
})

router.get('/panel', (req, res)=>{
    res.render('panel')
})


module.exports = router