const express = require('express')
const router = express.Router()
const ibmdb = require('ibm_db'); // required

//required
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
    const reporttext = req.body.reportinfo
    const department = req.body.department
    console.log(reporttext);
console.log(department);
    ibmdb.open(connStr,function(err,conn){
        if(err){
            Console.log(err);
        }else if(department === 'Education'){
            var education = "INSERT INTO JFK88129.EDUCATION (firstname , lastname , email , phonenumber , address , city , zip , report , department) VALUES ('"+firstname+"' , '"+lastname+"' , '"+email+"' , '"+phonenumber+"' , '"+address+"' , '"+city+"' , '"+zip+"' , '"+reporttext+"' , '"+department+"');";
        conn.query(education,function(err,data){  //required
            if(err){
                console.log(err);
            }else{
                conn.close(function(){  //required
                    console.log("db closed");
                    res.redirect("/");
                });
            }
        });
        }else if( department === 'Health'){
            var health = "INSERT INTO JFK88129.HEALTH (firstname , lastname , email , phonenumber , address , city , zip , report , department) VALUES ('"+firstname+"' , '"+lastname+"' , '"+email+"' , '"+phonenumber+"' , '"+address+"' , '"+city+"' , '"+zip+"' , '"+reporttext+"' , '"+department+"');";
            conn.query(health,function(err,data){
                if(err){
                    console.log(err.message);
                }else{
                    conn.close(function(){
                        console.log("db closed");
                        res.redirect("/");
                    });
                }
            });
        }else if(department === 'Civil Services'){
            var health = "INSERT INTO JFK88129.CIVIL (firstname , lastname , email , phonenumber , address , city , zip , report , department) VALUES ('"+firstname+"' , '"+lastname+"' , '"+email+"' , '"+phonenumber+"' , '"+address+"' , '"+city+"' , '"+zip+"' , '"+reporttext+"' , '"+department+"');";
            conn.query(health,function(err,data){
                if(err){
                    console.log(err);
                }else{
                    conn.close(function(){
                        console.log("db closed");
                        res.redirect("/");
                    });
                }
            });
            // //n>Agriculture</option>
            // <option>PWC</option>
            // <option>Transport</option>
            // <option>Electricity</option>
        }else if(department === 'Finance'){
            var finance = "INSERT INTO JFK88129.FINANCE (firstname , lastname , email , phonenumber , address , city , zip , report , department) VALUES ('"+firstname+"' , '"+lastname+"' , '"+email+"' , '"+phonenumber+"' , '"+address+"' , '"+city+"' , '"+zip+"' , '"+reporttext+"' , '"+department+"');";
            conn.query(finance,function(err,data){
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
        else if(department === 'Agriculture'){
            var agriculture = "INSERT INTO JFK88129.AGRICULTURE (firstname , lastname , email , phonenumber , address , city , zip , report , department) VALUES ('"+firstname+"' , '"+lastname+"' , '"+email+"' , '"+phonenumber+"' , '"+address+"' , '"+city+"' , '"+zip+"' , '"+reporttext+"' , '"+department+"');";
            conn.query(agriculture,function(err,data){
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
        else if(department === 'PWC'){
            var pwc = "INSERT INTO JFK88129.PWC (firstname , lastname , email , phonenumber , address , city , zip , report , department) VALUES ('"+firstname+"' , '"+lastname+"' , '"+email+"' , '"+phonenumber+"' , '"+address+"' , '"+city+"' , '"+zip+"' , '"+reporttext+"' , '"+department+"');";
            conn.query(pwc,function(err,data){
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
        else if(department == 'Transport'){
            var transport = "INSERT INTO JFK88129.TRANSPORT (firstname , lastname , email , phonenumber , address , city , zip , report , department) VALUES ('"+firstname+"' , '"+lastname+"' , '"+email+"' , '"+phonenumber+"' , '"+address+"' , '"+city+"' , '"+zip+"' , '"+reporttext+"' , '"+department+"');";
            conn.query(transport,function(err,data){
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
        else if(department == 'Electricity'){
            var electricity = "INSERT INTO JFK88129.ELECTRICITY (firstname , lastname , email , phonenumber , address , city , zip , report , department) VALUES ('"+firstname+"' , '"+lastname+"' , '"+email+"' , '"+phonenumber+"' , '"+address+"' , '"+city+"' , '"+zip+"' , '"+reporttext+"' , '"+department+"');";
            conn.query(electricity,function(err,data){
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