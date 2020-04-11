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

router.get('/panel', (req, res) =>{
    res.render('panel')
})


router.post('/panel', (req, res)=>{
    ibmdb.open(connStr,function(err,conn){
        const department = req.body.department
        if(err){
            console.log(err);
        } 
        else if(department === 'Education'){
            var inputdata = "SELECT * FROM JFK88129.EDUCATION;"
            conn.query(inputdata,(err,data)=>{
                if(err){
                    console.log(err);
                }else{
                    conn.close(function(){
                        console.log(data);
                        res.render("display",{info : data});
                        
                    });
                    
                }
            });
        }   
        else if(department === 'Health'){
            var inputdata = "SELECT * FROM JFK88129.HEALTH;"
            conn.query(inputdata,(err,data)=>{
                if(err){
                    console.log(err);
                }else{
                conn.close(function(){
                    console.log(data);
                    res.render("display",{info : data});
                    
                    });     
                }
            });
        }
        else if(department === 'Civil Services'){
            var inputdata = "SELECT * FROM JFK88129.CIVIL;"
            conn.query(inputdata,(err,data)=>{
                if(err){
                    console.log(err);
                }else{
                conn.close(function(){
                    console.log(data);
                    res.render("display",{info : data});
                    
                    });     
                }
            });
        }
        if(department === 'Electricity'){
            var inputdata = "SELECT * FROM JFK88129.ELECTRICITY;"
            conn.query(inputdata,(err,data)=>{
                if(err){
                    console.log(err);
                }else{
                conn.close(function(){
                    console.log(data);
                    res.render("display",{info : data});
                    
                    });     
                }
            });
        }
        if(department === 'Finance'){
            var inputdata = "SELECT * FROM JFK88129.FINANCE;"
            conn.query(inputdata,(err,data)=>{
                if(err){
                    console.log(err);
                }else{
                conn.close(function(){
                    console.log(data);
                    res.render("display",{info : data});
                    
                    });     
                }
            });
        }
        if(department === 'Agriculture'){
            var inputdata = "SELECT * FROM JFK88129.AGRICULTURE;"
            conn.query(inputdata,(err,data)=>{
                if(err){
                    console.log(err);
                }else{
                conn.close(function(){
                    console.log(data);
                    res.render("display",{info : data});
                    
                    });     
                }
            });
        }
        if(department === 'Transport'){
            var inputdata = "SELECT * FROM JFK88129.TRANSPORT;"
            conn.query(inputdata,(err,data)=>{
                if(err){
                    console.log(err);
                }else{
                conn.close(function(){
                    console.log(data);
                    res.render("display",{info : data});
                    
                    });     
                }
            });
        }
        if(department === 'PWC'){
            var inputdata = "SELECT * FROM JFK88129.PWC;"
            conn.query(inputdata,(err,data)=>{
                if(err){
                    console.log(err);
                }else{
                conn.close(function(){
                    console.log(data);
                    res.render("display",{info : data});
                    
                    });     
                }
            });
        }
    })
})


module.exports = router