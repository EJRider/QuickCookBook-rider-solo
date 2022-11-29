const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const userStrategy = require('../strategies/user.strategy');


router.get('/:searchparam', (req,res)=>{
    if(req.isAuthenticated()){
    console.log('req params is', req.params.searchparam);
    const sqlText = `SELECT * FROM "recipes" WHERE "recipe_name" = $1 ORDER BY "likes" DESC;`;
    const sqlParams = [req.params.searchparam];
    pool.query(sqlText,sqlParams)
        .then(dbRes=>{
            res.send(dbRes.rows);
        })
        .catch(dbErr=>{
            console.error('error in server end of search', dbErr);
            res.sendStatus(500);
        })}
})

module.exports = router;