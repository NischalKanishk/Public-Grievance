const express = require('express')
const router = express.Router()
const ibmdb = require('ibm_db');

let connStr = "DATABASE=BLUDB;HOSTNAME=dashdb-txn-sbox-yp-dal09-08.services.dal.bluemix.net;PORT=50000;PROTOCOL=TCPIP;UID=jfk88129;PWD=kz2hrcjn8tw^j1hz;";

router.get('/', (req,res)=>{
    res.render('search')
})

router.post('/getdata',(req,res)=>{
const complaintnumber = req.body.complaintnumber
const department = req.body.department
    ibmdb.open(connStr,function(err,conn){
        if(err){
            console.log(err);
        }
        console.log("connection successful");
        if(department === 'Education'){
            var inputdata_education = "SELECT * FROM JFK88129.EDUCATION WHERE id="+complaintnumber+";"
            conn.query(inputdata_education,(err,data)=>{
                if(err){
                    console.log(err);
                }else{
                    conn.close(function(){
                        console.log(data);
                        res.render("searchinfo",{info : data});
                        
                    });
                    
                }
            });
        }
        if(department === 'Health'){
            var inputdata_health = "SELECT * FROM JFK88129.HEALTH WHERE id="+complaintnumber+";"
            conn.query(inputdata_health,(err,data)=>{
                if(err){
                    console.log(err);
                }else{
                    conn.close(function(){
                        console.log(data);
                        res.render("searchinfo",{info : data});
                        
                    });
                    
                }
            });
        }
        if(department === 'Civil Services'){
            var inputdata_civil = "SELECT * FROM JFK88129.CIVIL WHERE id="+complaintnumber+";"
            conn.query(inputdata_civil,(err,data)=>{
                if(err){
                    console.log(err);
                }else{
                    conn.close(function(){
                        console.log(data);
                        res.render("searchinfo",{info : data});
                        
                    });
                    
                }
            });
        }
        if(department === 'Finance'){
            var inputdata_finance = "SELECT * FROM JFK88129.FINANCE WHERE id="+complaintnumber+";"
            conn.query(inputdata_finance,(err,data)=>{
                if(err){
                    console.log(err);
                }else{
                    conn.close(function(){
                        console.log(data);
                        res.render("searchinfo",{info : data});
                        
                    });
                    
                }
            });
        }
        if(department === 'Agriculture'){
            var inputdata_agri = "SELECT * FROM JFK88129.AGRICULTURE WHERE id="+complaintnumber+";"
            conn.query(inputdata_agri,(err,data)=>{
                if(err){
                    console.log(err);
                }else{
                    conn.close(function(){
                        console.log(data);
                        res.render("searchinfo",{info : data});
                        
                    });
                    
                }
            });
        }
        if(department === 'PWC'){
            var inputdata_pwc = "SELECT * FROM JFK88129.PWC WHERE id="+complaintnumber+";"
            conn.query(inputdata_pwc,(err,data)=>{
                if(err){
                    console.log(err);
                }else{
                    conn.close(function(){
                        console.log(data);
                        res.render("searchinfo",{info : data});
                        
                    });
                    
                }
            });
        }
        if(department === 'Transport'){
            var inputdata_transport = "SELECT * FROM JFK88129.TRANSPORT WHERE id="+complaintnumber+";"
            conn.query(inputdata_transport,(err,data)=>{
                if(err){
                    console.log(err);
                }else{
                    conn.close(function(){
                        console.log(data);
                        res.render("searchinfo",{info : data});
                        
                    });
                    
                }
            });
        }
        if(department === 'Electricity'){
            var inputdata_electricity = "SELECT * FROM JFK88129.ELECTRICITY WHERE id="+complaintnumber+";"
            conn.query(inputdata_electricity,(err,data)=>{
                if(err){
                    console.log(err);
                }else{
                    conn.close(function(){
                        console.log(data);
                        res.render("searchinfo",{info : data});
                        
                    });
                    
                }
            });
        }
        
    });
});


module.exports = router