//Dependencies
const express = require('express')
const router  = express.Router()
const bcrypt = require('bcryptjs')
const ibmdb = require('ibm_db');

let connStr = "DATABASE=BLUDB;HOSTNAME=dashdb-txn-sbox-yp-dal09-08.services.dal.bluemix.net;PORT=50000;PROTOCOL=TCPIP;UID=jfk88129;PWD=kz2hrcjn8tw^j1hz;";


//Routes
router.get('/login', (req, res)=>{
    res.render('login.ejs')
})

router.post('/login', (req, res)=>{
    const user =  req.body.username
   const pass =  req.body.password
 if(user === 'admin' && pass ==='admin' ){
        res.redirect('/admin/panel')
        console.log('User logged in')
   }
   else{
       res.redirect('back')
       console.log('Wrong creds')
   }
})

router.get('/panel', (req, res)=>{
    ibmdb.open(connStr,function(err,conn){
        if(err){
            console.log(err);
        }
        console.log("connection successful");
            var inputdata = "SELECT * FROM JFK88129.EDUCATION , JFK88129.AGRICULTURE , JFK88129.HEALTH;"
            conn.query(inputdata,(err,data)=>{
                if(err){
                    console.log(err.message);
                }else{
                    conn.close(() => {
                        console.log(data)
                        res.render("panel",{info : data});               
                    });
                }
            });
    });
})


module.exports = router