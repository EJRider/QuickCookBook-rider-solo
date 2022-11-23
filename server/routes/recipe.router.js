const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//GET
 router.get('/', (req,res)=> {
    if(req.isAuthenticated()){
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

 router.get('/:id', (req,res)=>{
    if(req.isAuthenticated()){
        const sqlText=`SELECT * FROM "recipes" WHERE "id" = $1;`;
        const sqlParams = [req.params.id];
        pool.query(sqlText, sqlParams)
            .then(dbRes=>{
                res.send(dbRes.rows);
            })
            .catch(dbErr=>{
                res.sendStatus(500);
            });
    }
 });

    router.get('/ingredient/:id', (req,res)=>{
        if(req.isAuthenticated()){
            const sqlText=`SELECT * FROM "ingredients" WHERE "recipe_id" = $1;`;
            const sqlParams = [req.params.id];
            pool.query(sqlText, sqlParams)
                .then(dbRes => {
                    res.send(dbRes.rows);
                })
                .catch(dbErr=>{
                    res.sendStatus(500)
                });
        }
    })

    router.get('/allergens/:id', (req,res)=>{
        if(req.isAuthenticated()){
            const sqlText = `SELECT "recipe_id", "allergens"."allergen_name" FROM "recipe-allergen-junction" 
            JOIN "allergens" on "allergens"."id" = "allergen_id" WHERE "recipe_id" = $1;`;
            const sqlParams = [req.params.id];
            pool.query(sqlText,sqlParams)
                .then(dbRes=>{
                    console.log('dbRes is', dbRes.rows);
                    res.send(dbRes.rows);
                })
                .catch(dbErr=>{
                    console.error(dbErr);
                })
        }
    })
    
    router.get('/diets/:id', (req,res)=>{
        if(req.isAuthenticated()){
            const sqlText = `SELECT "recipes_id", "diets"."diet_name" from "recipe-diet-junction" 
            JOIN "diets" ON "diets"."id" = "diet_id" WHERE "recipes_id" = $1;`;
            const sqlParams = [req.params.id];
            pool.query(sqlText, sqlParams)
                .then(dbRes=>{
                    res.send(dbRes.rows);
                })
                .catch(dbErr=>{
                    console.error(dbErr);
                })
        }
    })
//POST

router.post('/', (req,res)=>{

})

//PUT

//DELETE
router.delete('/:id', (req,res)=>{
    let sqlText = `DELETE FROM "ingredients" WHERE "recipe_id" = $1;`;
    const sqlParams = [req.params.id];
    pool.query(sqlText, sqlParams)
        .then(dbRes=>{
            sqlText =`DELETE FROM "recipe-diet-junction" WHERE "recipes_id" = $1;`
            pool.query(sqlText, sqlParams)
            .then(dbResTwo=>{
                sqlText=`DELETE FROM "recipe-allergen-junction" WHERE "recipe_id" = $1;`;
                pool.query(sqlText, sqlParams)
                    .then(dbResThree=>{
                        sqlText = `DELETE FROM "recipes" WHERE "id" = $1;`;
                        pool.query(sqlText, sqlParams)
                        .then(dbResFour=>{
                            res.sendStatus(201);
                        })
                        .catch(dbErr=>{
                            console.error(dbErr);
                            res.sendStatus(500);
                        })
                    })
            })
        })
})
module.exports = router