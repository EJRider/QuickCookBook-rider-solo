const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//GET
 router.get('/', (req,res)=> {
    console.log('getting recipes');
    const sqlText = `SELECT * FROM "recipes"`
    pool.query(sqlText)
        .then(dbRes=>{
            res.send(dbRes.rows);
        })
        .catch(dbErr=>{
            res.sendStatus(500);
        })
 })
//POST

//PUT

//DELETE

module.exports = router