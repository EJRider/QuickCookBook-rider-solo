import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
import RecipeBrief from '../RecipeBrief/RecipeBrief';
import { Link } from 'react-router-dom';
function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const recipes = useSelector((store)=>store.userRecipes);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch({
      type:'GET_RECIPES'
    })
    dispatch({
      type:'GET_ALLERGENS'
    })
    dispatch({
      type:'GET_DIETS'
    });
  },[]);

  return (
    <>
    <div className="container">
        <h1>My Recipes</h1>
    </div>
    <ul>
      {recipes && recipes.map(recipe=>
        <RecipeBrief key={recipe.id} recipe={recipe}/>)}
    </ul></>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
