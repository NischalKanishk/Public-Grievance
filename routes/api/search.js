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
            var inputdata = "SELECT * FROM JFK88129.EDUCATION WHERE id="+complaintnumber+";"
            conn.query(inputdata,(err,data)=>{
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