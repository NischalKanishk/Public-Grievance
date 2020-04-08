const express = require('express')
const router = express.Router()
const ibmdb = require('ibm_db');

let connStr = "DATABASE=BLUDB;HOSTNAME=dashdb-txn-sbox-yp-dal09-08.services.dal.bluemix.net;PORT=50000;PROTOCOL=TCPIP;UID=jfk88129;PWD=kz2hrcjn8tw^j1hz;";

router.get('/', (req,res)=>{
    res.render('reportMain')
})

router.get('/report', (req, res)=>{
    res.render('reportPortal')
})


router.post('/forminput',(req,res)=>{
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const email = req.body.email
    const phonenumber = req.body.phonenumber
    const address = req.body.address
    const city = req.body.city
    const zip = req.body.zip
    const reportext = req.body.report
    const department = req.body.department
    console.log(reporttext);
console.log(department);
    ibmdb.open(connStr,function(err,conn){
        if(err){
            Console.log(err);
        }else if(department == 'Education'){
            var education = "INSERT INTO JFK88129.EDUCATION (firstname , lastname , email , phonenumber , address , city , zip , report , department) VALUES ('"+firstname+"' , '"+lastname+"' , '"+email+"' , '"+phonenumber+"' , '"+address+"' , '"+city+"' , '"+zip+"' , '"+reporttext+"' , '"+department+"');";
        conn.query(education,function(err,data){
            if(err){
                console.log(err);
            }else{
                conn.close(function(){
                    console.log("db closed");
                    res.redirect("/");
                });
            }
        });
        }
    })

});


module.exports = router