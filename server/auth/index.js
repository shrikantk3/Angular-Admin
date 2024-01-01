const _express = require('express');
const app = _express();
const _conn = require('../config.js');
const _authrouter = _express.Router();

_authrouter.get('/login',(req, res)=>{
    _conn.query('select * from candidate_log', (err, rows)=>{
        if(err) throw err;
        else res.json(rows);
    });
});

_authrouter.post('/login',(req, res)=>{
    let data = req.body;
    _conn.query(`select * from candidate_log where email="${data.email}" and password="${data.password}"`, (err, rows)=>{
        if(err) res.json({statuscode:404, message:"Page Not Found!", error : err})
        else {
            if(rows.length>0){
                res.json({statuscode:200, status:true, message:"Login Successful!", result:rows})
            }else{
                res.json({statuscode:404, status:false, message:"Page Not Found!", error:err})
            }                   
        };
        // _conn.end();
    });
});

_authrouter.post('/isuser',(req, res)=>{
    let data = req.body;
    _conn.query(`select * from candidate_log where username="${data.username}"`, (err, rows)=>{
        if(err) res.json({statuscode:404, status:false, message:"Page Not Found!"})
        else {
            if(rows.length>0){
                res.json({statuscode:200, status:true, message:"user available!"})
            }else{
                res.json({statuscode:404, status:false, message:"user Not Found!"})
            }                    
        };
        // _conn.end();
    });
    
});

_authrouter.post('/isemail',(req, res)=>{
    let data = req.body;
    _conn.query(`select * from candidate_log where email="${data.email}"`, (err, rows)=>{
        if(err) res.json({statuscode:404, status:false, message:"Page Not Found!"})
        else {
            if(rows.length>0){
                res.json({statuscode:200, status:true, message:"email Successful!"})
            }else{
                res.json({statuscode:404, status:false, message:"email Not Found!"})
            }                    
        };
        // _conn.end();
    });
    
});

_authrouter.post('/isphone',(req, res)=>{
    let data = req.body;
    _conn.query(`select * from candidate_log where phone="${data.phone}"`, (err, rows)=>{
        if(err) res.json({statuscode:404, status:false, message:"Page Not Found!"})
        else {
            if(rows.length>0){
                res.json({statuscode:200, status:true, message:"Phone Successful!"})
            }else{
                res.json({statuscode:404, status:false, message:"Phone Not Found!"})
            }                    
        };
        // _conn.end();
    });
});

_authrouter.post('/signup',(req, res)=>{
    let data = req.body;
    let date = new Date();
    let id = `TRJB${date.getHours()}${date.getDate()}${date.getSeconds()}`;
    _conn.query(`
            INSERT INTO candidate_log(candidate_id,email, username, password,phone, isActive, status, careated_on, candidate_fname, candidate_lname,candidate_mname, location) 
            VALUES('${id}','${data.email}','${data.username}','${data.password}', '${data.phone}',1,0, sysdate(),'${data.fname}','${data.lname}','${data.mname}','${data.location}')`, (err, rows)=>{
                if(err) res.json({statuscode:404, status:false, message:"Somethis went wrong!", err:err});
                else {
                    if(rows.affectedRows>0){
                        res.json({statuscode:200, status:true, message:"Update Successful!"})
                    }else{
                        res.json({statuscode:404, status:false, message:"Somethis went wrong!", err:rows});
                    }                    
                }
                // _conn.end();
            });
});

_authrouter.post('/signup-step', (req, res)=>{
    let data = req.body;
    _conn.query(`
                UPDATE candidate_log set language ="${data.laguage}", address="${data.address}", skills="${data.topics}", nature="${data.occupation}"
                where username = "${data.username}"
            `, (err, rows)=>{
                if(err) res.json({statuscode:404, status:false, message:"Somethis went wrong!", err:err});
                else {
                    if(rows.affectedRows>0){
                        res.json({statuscode:200, status:true, message:"Update Successful!"})
                    }else{
                        res.json({statuscode:404, status:false, message:"Somethis went wrong!", err:rows});
                    }                    
                };
                // _conn.end();
            })
})

_authrouter.get('/user/:id', (req, res)=>{
    _conn.query(`select * from candidate_log where username = '${req.params['id']}'`, (err, rows)=>{
        if(err) res.json({statuscode:404, status:false, message:"Somethis went wrong!", err:err});
        else {
            if(rows.length>0){
                res.json({statuscode:200, status:true, message:"Update Successful!", result:rows})
            }else{
                res.json({statuscode:404, status:false, message:"Somethis went wrong!", err:rows});
            }                    
        };
    })
})


module.exports = _authrouter;
