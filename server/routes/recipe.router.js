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
    else{res.sendStatus(403)}
 })

 router.get('/allergens', (req,res)=>{
    if(req.isAuthenticated()){
        const sqlText = `SELECT  "recipe_id", "allergen_name" FROM "recipe-allergen-junction" 
        JOIN "allergens" on "allergens"."id" = "allergen_id";
        `;
        pool.query(sqlText)
            .then(dbRes=>{
                res.send(dbRes.rows);
            })
            .catch(dbErr=>{
                res.sendStatus(500);
            })
    }
    else{res.sendStatus(403)};
 })

 router.get('/diets', (req,res)=>{
    if(req.isAuthenticated()){
        const sqlText = `SELECT "recipes_id", "diets"."diet_name" from "recipe-diet-junction" 
        JOIN "diets" ON "diets"."id" = "diet_id";
        `;
        pool.query(sqlText)
            .then(dbRes=>{
                res.send(dbRes.rows);
            })
            .catch(dbErr=>{
                res.sendStatus(500);
            });
    }
 })
//POST
let recipeIdCount = 2
router.post('/', (req,res)=>{

})

//PUT

//DELETE

module.exports = router