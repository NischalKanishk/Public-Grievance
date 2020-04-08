//Dependencies
require('custom-env').env()
const express = require('express')
const router  = express.Router()
const bcrypt = require('bcryptjs')
const ibmdb = require('ibm_db');
//required to connect to database
// let connStr = "DATABASE=BLUDB;HOSTNAME=dashdb-txn-sbox-yp-lon02-01.services.eu-gb.bluemix.net;PORT=50000;PROTOCOL=TCPIP;UID=rmw15324;PWD=md1tz7z-8x6p6h5d;";

//Routes
router.get('/login', (req, res)=>{
    res.render('login.ejs')
})

router.post('/login', (req, res)=>{
    const user =  req.body.username
   const pass =  req.body.password
   // connection to database start required 
    // ibmdb.open(connStr,function(err,conn){
    //     if(err){
    //         console.log(err);
    //     }else{
    //         var str ="INSERT INTO RMW15324.USERS (username , password) VALUES ('"+user+"' , '"+pass+"');";
    //         conn.query(str,function(err,data){
    //             if(err){
    //                 console.log(err);
    //             }else{
    //                 conn.close(function(){
    //                     console.log("connection to database is closed");
    //                 });
    //             }
    //         });
    //     }
    // });
   
   if(user === 'admin' && pass ==='admin' ){
        res.redirect('/panel')
        console.log('User logged in')
   }
   else{
       res.redirect('back')
       console.log('Wrong creds')
   }
})


module.exports = router