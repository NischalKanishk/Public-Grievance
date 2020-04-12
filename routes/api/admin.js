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

router.get("/checkinfo",(req,res)=>{
    var id = req.query.id;
    var department =req.query.dept;
    ibmdb.open(connStr,function(err,conn){
        if(err){
            Console.log(err);
        }else if(department === 'Education'){
            var education = "SELECT * FROM JFK88129.EDUCATION WHERE ID="+id+";"
        conn.query(education,function(err,data){  //required
            if(err){
                console.log(err);
            }else{
                conn.close(function(){  //required
                    res.render("checkinfo",{info : data})
                });
            }
        });
        }else if( department === 'Health'){
            var health = "SELECT * FROM JFK88129.HEALTH WHERE ID="+id+";"
            conn.query(health,function(err,data){
                if(err){
                    console.log(err.message);
                }else{
                    conn.close(function(){
                        res.render("checkinfo",{info : data})
                    });
                }
            });
        }else if(department === 'Civil Services'){
            var health = "SELECT * FROM JFK88129.CIVIL WHERE ID="+id+";"
            conn.query(health,function(err,data){
                if(err){
                    console.log(err);
                }else{
                    conn.close(function(){
                        res.render("checkinfo",{info : data})
                    });
                }
            });
            // //n>Agriculture</option>
            // <option>PWC</option>
            // <option>Transport</option>
            // <option>Electricity</option>
        }else if(department === 'Finance'){
            var finance = "SELECT * FROM JFK88129.FINANCE WHERE ID="+id+";"
            conn.query(finance,function(err,data){
                if(err){
                    console.log(err);
                }else{
                    conn.close(function(){
                        res.render("checkinfo",{info : data})
                    });
                }
            });
        }
        else if(department === 'Agriculture'){
            var agriculture = "SELECT * FROM JFK88129.AGRICULTURE WHERE ID="+id+";"
            conn.query(agriculture,function(err,data){
                if(err){
                    console.log(err);
                }else{
                    conn.close(function(){
                        res.render("checkinfo",{info : data})
                    });
                }
            });
        }
        else if(department === 'PWC'){
            var pwc = "SELECT * FROM JFK88129.PWC WHERE ID="+id+";"
            conn.query(pwc,function(err,data){
                if(err){
                    console.log(err);
                }else{
                    conn.close(function(){
                        cres.render("checkinfo",{info : data})
                    });
                }
            });
        }
        else if(department === 'Transport'){
            var transport = "SELECT * FROM JFK88129.TRANSPORT WHERE ID="+id+";"
            conn.query(transport,function(err,data){
                if(err){
                    console.log(err);
                }else{
                    conn.close(function(){
                        res.render("checkinfo",{info : data})
                    });
                }
            });
        }
        else if(department === 'Electricity'){
            var electricity = "SELECT * FROM JFK88129.ELECTRICITY WHERE ID="+id+";"
            conn.query(electricity,function(err,data){
                if(err){
                    console.log(err);
                }else{
                    conn.close(function(){
                        res.render("checkinfo",{info : data})
                    });
                }
            });
        }
    })
    
});

router.get("/updateaccept",(req,res)=>{
    var id = req.query.id;
    var department = req.query.dept;
    var accept = 1;
    var submitted = 0 ;
    var rejected = 0;
    var resolved = 0; 
    ibmdb.open(connStr,(err,conn)=>{
       if(err){
           console.log(err);
       }else if(department === 'Education'){
           console.log("updare rooute entered")
                var update_education = "UPDATE JFK88129.EDUCATION SET ACCEPTED="+accept+", REJECTED="+rejected+", SUBMITTED="+submitted+", RESOLVED="+resolved+" WHERE ID="+id+";"
                conn.query(update_education,function(err,data){
                    if(err){
                        console.log(err);
                    }else{
                        conn.close(function(){
                            console.log("data updated");
                            res.redirect("/admin/checkinfo?id="+id+"&dept="+department);
                       });
                    }
                });
            }else if(department === 'Health'){
                console.log("updare route entered")
                     var update_health = "UPDATE JFK88129.HEALTH SET ACCEPTED="+accept+", REJECTED="+rejected+", SUBMITTED="+submitted+", RESOLVED="+resolved+" WHERE ID="+id+";"
                     conn.query(update_health,function(err,data){
                         if(err){
                             console.log(err);
                         }else{
                             conn.close(function(){
                                 console.log("data updated");
                                 res.redirect("/admin/checkinfo?id="+id+"&dept="+department);
                            });
                         }
                     });
                 }else if(department === 'Civil Services'){
                    console.log("updare rooute entered")
                         var update_civil = "UPDATE JFK88129.CIVIL SET ACCEPTED="+accept+", REJECTED="+rejected+", SUBMITTED="+submitted+", RESOLVED="+resolved+" WHERE ID="+id+";"
                         conn.query(update_civil,function(err,data){
                             if(err){
                                 console.log(err);
                             }else{
                                 conn.close(function(){
                                     console.log("data updated");
                                     res.redirect("/admin/checkinfo?id="+id+"&dept="+department);
                                });
                             }
                         });
                     }else if(department === 'Finance'){
                        console.log("updare rooute entered")
                             var update_finance = "UPDATE JFK88129.FINANCE SET ACCEPTED="+accept+", REJECTED="+rejected+", SUBMITTED="+submitted+", RESOLVED="+resolved+" WHERE ID="+id+";"
                             conn.query(update_finance,function(err,data){
                                 if(err){
                                     console.log(err);
                                 }else{
                                     conn.close(function(){
                                         console.log("data updated");
                                         res.redirect("/admin/checkinfo?id="+id+"&dept="+department);
                                    });
                                 }
                             });
                         }else if(department === 'Agriculture'){
                            console.log("updare rooute entered")
                                 var update_agriculture = "UPDATE JFK88129.AGRICULTURE SET ACCEPTED="+accept+", REJECTED="+rejected+", SUBMITTED="+submitted+", RESOLVED="+resolved+" WHERE ID="+id+";"
                                 conn.query(update_agriculture,function(err,data){
                                     if(err){
                                         console.log(err);
                                     }else{
                                         conn.close(function(){
                                             console.log("data updated");
                                             res.redirect("/admin/checkinfo?id="+id+"&dept="+department);
                                        });
                                     }
                                 });
                             }else if(department === 'PWC'){
                                console.log("updare rooute entered")
                                     var update_pwc = "UPDATE JFK88129.PWC SET ACCEPTED="+accept+", REJECTED="+rejected+", SUBMITTED="+submitted+", RESOLVED="+resolved+" WHERE ID="+id+";"
                                     conn.query(update_pwc,function(err,data){
                                         if(err){
                                             console.log(err);
                                         }else{
                                             conn.close(function(){
                                                 console.log("data updated");
                                                 res.redirect("/admin/checkinfo?id="+id+"&dept="+department);
                                            });
                                         }
                                     });
                                 }else if(department === 'Transport'){
                                    console.log("updare rooute entered")
                                         var update_transport = "UPDATE JFK88129.TRANSPORT SET ACCEPTED="+accept+", REJECTED="+rejected+", SUBMITTED="+submitted+", RESOLVED="+resolved+" WHERE ID="+id+";"
                                         conn.query(update_transport,function(err,data){
                                             if(err){
                                                 console.log(err);
                                             }else{
                                                 conn.close(function(){
                                                     console.log("data updated");
                                                     res.redirect("/admin/checkinfo?id="+id+"&dept="+department);
                                                });
                                             }
                                         });
                                     }else if(department === 'Electricity'){
                                        console.log("updare rooute entered")
                                             var update_electricity = "UPDATE JFK88129.ELECTRICITY SET ACCEPTED="+accept+", REJECTED="+rejected+", SUBMITTED="+submitted+", RESOLVED="+resolved+" WHERE ID="+id+";"
                                             conn.query(update_electricity,function(err,data){
                                                 if(err){
                                                     console.log(err);
                                                 }else{
                                                     conn.close(function(){
                                                         console.log("data updated");
                                                         res.redirect("/admin/checkinfo?id="+id+"&dept="+department);
                                                    });
                                                 }
                                             });
                                         }
       
        
    });
})

router.get("/updateresolve",(req,res)=>{
    var id = req.query.id;
    var department = req.query.dept;
    var accept = 0;
    var submitted = 0 ;
    var rejected = 0;
    var resolved = 1; 
    ibmdb.open(connStr,(err,conn)=>{
       if(err){
           console.log(err);
       }else if(department === 'Education'){
           console.log("updare rooute entered")
                var update_education = "UPDATE JFK88129.EDUCATION SET ACCEPTED="+accept+", REJECTED="+rejected+", SUBMITTED="+submitted+", RESOLVED="+resolved+" WHERE ID="+id+";"
                conn.query(update_education,function(err,data){
                    if(err){
                        console.log(err);
                    }else{
                        conn.close(function(){
                            console.log("data updated");
                            res.redirect("/admin/checkinfo?id="+id+"&dept="+department);
                       });
                    }
                });
            }else if(department === 'Health'){
                console.log("updare route entered")
                     var update_health = "UPDATE JFK88129.HEALTH SET ACCEPTED="+accept+", REJECTED="+rejected+", SUBMITTED="+submitted+", RESOLVED="+resolved+" WHERE ID="+id+";"
                     conn.query(update_health,function(err,data){
                         if(err){
                             console.log(err);
                         }else{
                             conn.close(function(){
                                 console.log("data updated");
                                 res.redirect("/admin/checkinfo?id="+id+"&dept="+department);
                            });
                         }
                     });
                 }else if(department === 'Civil Services'){
                    console.log("updare rooute entered")
                         var update_civil = "UPDATE JFK88129.CIVIL SET ACCEPTED="+accept+", REJECTED="+rejected+", SUBMITTED="+submitted+", RESOLVED="+resolved+" WHERE ID="+id+";"
                         conn.query(update_civil,function(err,data){
                             if(err){
                                 console.log(err);
                             }else{
                                 conn.close(function(){
                                     console.log("data updated");
                                     res.redirect("/admin/checkinfo?id="+id+"&dept="+department);
                                });
                             }
                         });
                     }else if(department === 'Finance'){
                        console.log("updare rooute entered")
                             var update_finance = "UPDATE JFK88129.FINANCE SET ACCEPTED="+accept+", REJECTED="+rejected+", SUBMITTED="+submitted+", RESOLVED="+resolved+" WHERE ID="+id+";"
                             conn.query(update_finance,function(err,data){
                                 if(err){
                                     console.log(err);
                                 }else{
                                     conn.close(function(){
                                         console.log("data updated");
                                         res.redirect("/admin/checkinfo?id="+id+"&dept="+department);
                                    });
                                 }
                             });
                         }else if(department === 'Agriculture'){
                            console.log("updare rooute entered")
                                 var update_agriculture = "UPDATE JFK88129.AGRICULTURE SET ACCEPTED="+accept+", REJECTED="+rejected+", SUBMITTED="+submitted+", RESOLVED="+resolved+" WHERE ID="+id+";"
                                 conn.query(update_agriculture,function(err,data){
                                     if(err){
                                         console.log(err);
                                     }else{
                                         conn.close(function(){
                                             console.log("data updated");
                                             res.redirect("/admin/checkinfo?id="+id+"&dept="+department);
                                        });
                                     }
                                 });
                             }else if(department === 'PWC'){
                                console.log("updare rooute entered")
                                     var update_pwc = "UPDATE JFK88129.PWC SET ACCEPTED="+accept+", REJECTED="+rejected+", SUBMITTED="+submitted+", RESOLVED="+resolved+" WHERE ID="+id+";"
                                     conn.query(update_pwc,function(err,data){
                                         if(err){
                                             console.log(err);
                                         }else{
                                             conn.close(function(){
                                                 console.log("data updated");
                                                 res.redirect("/admin/checkinfo?id="+id+"&dept="+department);
                                            });
                                         }
                                     });
                                 }else if(department === 'Transport'){
                                    console.log("updare rooute entered")
                                         var update_transport = "UPDATE JFK88129.TRANSPORT SET ACCEPTED="+accept+", REJECTED="+rejected+", SUBMITTED="+submitted+", RESOLVED="+resolved+" WHERE ID="+id+";"
                                         conn.query(update_transport,function(err,data){
                                             if(err){
                                                 console.log(err);
                                             }else{
                                                 conn.close(function(){
                                                     console.log("data updated");
                                                     res.redirect("/admin/checkinfo?id="+id+"&dept="+department);
                                                });
                                             }
                                         });
                                     }else if(department === 'Electricity'){
                                        console.log("updare rooute entered")
                                             var update_electricity = "UPDATE JFK88129.ELECTRICITY SET ACCEPTED="+accept+", REJECTED="+rejected+", SUBMITTED="+submitted+", RESOLVED="+resolved+" WHERE ID="+id+";"
                                             conn.query(update_electricity,function(err,data){
                                                 if(err){
                                                     console.log(err);
                                                 }else{
                                                     conn.close(function(){
                                                         console.log("data updated");
                                                         res.redirect("/admin/checkinfo?id="+id+"&dept="+department);
                                                    });
                                                 }
                                             });
                                         }
       
        
    });
})

router.get("/updaterejected",(req,res)=>{
    var id = req.query.id;
    var department = req.query.dept;
    var accept = 0;
    var submitted = 0 ;
    var rejected = 1;
    var resolved = 0; 
    ibmdb.open(connStr,(err,conn)=>{
       if(err){
           console.log(err);
       }else if(department === 'Education'){
           console.log("updare rooute entered")
                var update_education = "UPDATE JFK88129.EDUCATION SET ACCEPTED="+accept+", REJECTED="+rejected+", SUBMITTED="+submitted+", RESOLVED="+resolved+" WHERE ID="+id+";"
                conn.query(update_education,function(err,data){
                    if(err){
                        console.log(err);
                    }else{
                        conn.close(function(){
                            console.log("data updated");
                            res.redirect("/admin/checkinfo?id="+id+"&dept="+department);
                       });
                    }
                });
            }else if(department === 'Health'){
                console.log("updare route entered")
                     var update_health = "UPDATE JFK88129.HEALTH SET ACCEPTED="+accept+", REJECTED="+rejected+", SUBMITTED="+submitted+", RESOLVED="+resolved+" WHERE ID="+id+";"
                     conn.query(update_health,function(err,data){
                         if(err){
                             console.log(err);
                         }else{
                             conn.close(function(){
                                 console.log("data updated");
                                 res.redirect("/admin/checkinfo?id="+id+"&dept="+department);
                            });
                         }
                     });
                 }else if(department === 'Civil Services'){
                    console.log("updare rooute entered")
                         var update_civil = "UPDATE JFK88129.CIVIL SET ACCEPTED="+accept+", REJECTED="+rejected+", SUBMITTED="+submitted+", RESOLVED="+resolved+" WHERE ID="+id+";"
                         conn.query(update_civil,function(err,data){
                             if(err){
                                 console.log(err);
                             }else{
                                 conn.close(function(){
                                     console.log("data updated");
                                     res.redirect("/admin/checkinfo?id="+id+"&dept="+department);
                                });
                             }
                         });
                     }else if(department === 'Finance'){
                        console.log("updare rooute entered")
                             var update_finance = "UPDATE JFK88129.FINANCE SET ACCEPTED="+accept+", REJECTED="+rejected+", SUBMITTED="+submitted+", RESOLVED="+resolved+" WHERE ID="+id+";"
                             conn.query(update_finance,function(err,data){
                                 if(err){
                                     console.log(err);
                                 }else{
                                     conn.close(function(){
                                         console.log("data updated");
                                         res.redirect("/admin/checkinfo?id="+id+"&dept="+department);
                                    });
                                 }
                             });
                         }else if(department === 'Agriculture'){
                            console.log("updare rooute entered")
                                 var update_agriculture = "UPDATE JFK88129.AGRICULTURE SET ACCEPTED="+accept+", REJECTED="+rejected+", SUBMITTED="+submitted+", RESOLVED="+resolved+" WHERE ID="+id+";"
                                 conn.query(update_agriculture,function(err,data){
                                     if(err){
                                         console.log(err);
                                     }else{
                                         conn.close(function(){
                                             console.log("data updated");
                                             res.redirect("/admin/checkinfo?id="+id+"&dept="+department);
                                        });
                                     }
                                 });
                             }else if(department === 'PWC'){
                                console.log("updare rooute entered")
                                     var update_pwc = "UPDATE JFK88129.PWC SET ACCEPTED="+accept+", REJECTED="+rejected+", SUBMITTED="+submitted+", RESOLVED="+resolved+" WHERE ID="+id+";"
                                     conn.query(update_pwc,function(err,data){
                                         if(err){
                                             console.log(err);
                                         }else{
                                             conn.close(function(){
                                                 console.log("data updated");
                                                 res.redirect("/admin/checkinfo?id="+id+"&dept="+department);
                                            });
                                         }
                                     });
                                 }else if(department === 'Transport'){
                                    console.log("updare rooute entered")
                                         var update_transport = "UPDATE JFK88129.TRANSPORT SET ACCEPTED="+accept+", REJECTED="+rejected+", SUBMITTED="+submitted+", RESOLVED="+resolved+" WHERE ID="+id+";"
                                         conn.query(update_transport,function(err,data){
                                             if(err){
                                                 console.log(err);
                                             }else{
                                                 conn.close(function(){
                                                     console.log("data updated");
                                                     res.redirect("/admin/checkinfo?id="+id+"&dept="+department);
                                                });
                                             }
                                         });
                                     }else if(department === 'Electricity'){
                                        console.log("updare rooute entered")
                                             var update_electricity = "UPDATE JFK88129.ELECTRICITY SET ACCEPTED="+accept+", REJECTED="+rejected+", SUBMITTED="+submitted+", RESOLVED="+resolved+" WHERE ID="+id+";"
                                             conn.query(update_electricity,function(err,data){
                                                 if(err){
                                                     console.log(err);
                                                 }else{
                                                     conn.close(function(){
                                                         console.log("data updated");
                                                         res.redirect("/admin/checkinfo?id="+id+"&dept="+department);
                                                    });
                                                 }
                                             });
                                         }
       
        
    });
})


module.exports = router