const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//GET
 router.get('/', (req,res)=> {
    if(req.isAuthenticated()){
    console.log('getting recipes');
    const sqlText = `SELECT * FROM "recipes" where "user_id" = $1`
    const sqlParams = [req.user.id];
    pool.query(sqlText, sqlParams)
        .then(dbRes=>{
            res.send(dbRes.rows);
        })
        .catch(dbErr=>{
            res.sendStatus(500);
        })}
 })
//POST

//PUT

//DELETE

module.exports = router