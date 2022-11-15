const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//GET
 router.get('/', (req,res)=> {
    console.log('getting recipes');
    const sqlText = `SELECT * FROM "recipe"`
 })
//POST

//PUT

//DELETE

module.exports = router