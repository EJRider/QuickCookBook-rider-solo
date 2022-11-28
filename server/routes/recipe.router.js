const express = require('express');
const { default: reduxSaga } = require('redux-saga');
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

router.post('/submit', (req,res)=>{
    if(req.isAuthenticated()){
    console.log('reqbody is', req.body);
    const sqlRecipe = `
    INSERT INTO "recipes" ("user_id", "recipe_name", "description", "instructions", "likes", "calories", "protein", "sugar", "fats", "carbohydrates", "serving_size")
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
    RETURNING "id";
    `;
    const sqlRecipeParams = [req.body.data.user, req.body.data.recipeName, req.body.data.recipeDesc, req.body.data.recipeInst, '1', req.body.data.recipeCal, req.body.data.recipePro, req.body.data.recipeSugar, req.body.data.recipeFat, req.body.data.recipeCarb, req.body.data.recipeSize ]
    pool.query(sqlRecipe, sqlRecipeParams)
        .then(dbRecipeRes => {
            const recipeId = dbRecipeRes.rows[0].id;
            const sqlAllergen = `INSERT INTO "recipe-allergen-junction" ("recipe_id", "allergen_id")
                                VALUES ($1, $2);`;
            req.body.data.recipeAllergens.map(allergen => {
                let sqlAllergenParams = [recipeId, allergen]
                pool.query(sqlAllergen, sqlAllergenParams)
                    .catch(dbAllergenErr => {
                        console.error(dbAllergenErr);
                    })
                })
            const sqlDiet = `INSERT INTO "recipe-diet-junction" ("recipes_id", "diet_id")
                            VALUES ($1, $2);`;
            req.body.data.recipeDiets.map(diet=>{
                let sqlDietParams = [recipeId, diet]
                pool.query(sqlDiet, sqlDietParams)
                    .catch(dbDietErr=>{
                        console.error(dbDietErr);
                    })
            })
            
            const sqlIngredients = `INSERT INTO "ingredients" ( "recipe_id", "ingredient_name", "quantity")
            VALUES ($1, $2, $3);`;
            req.body.data.recipeIngredients.map(ingredient => {
                let sqlIngredientsParams = [recipeId, ingredient.ingredient_name, ingredient.quantity];
                pool.query(sqlIngredients, sqlIngredientsParams)
                    .catch(dbIngredientErr => {
                        console.error(dbIngredientErr);
                    })
            })
        })
        .catch(dbRecipeErr => {
            console.error(dbRecipeErr);
        });
    }
});

//PUT
router.put('/likes/:id', (req,res)=>{
    let sqlText = `UPDATE "recipes" 
    SET "likes" = "likes" + 1
    WHERE "id" = $1`;
    let sqlParams = [req.params.id];
    pool.query(sqlText, sqlParams)
        .then(dbRes=>{
            res.sendStatus(201);
        })
        .catch(dbErr => {
            res.sendStatus(500);
            console.error(dbErr);
        })
})

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