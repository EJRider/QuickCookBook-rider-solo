import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
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
  },[]);

  return (
    <>
    <div className="container">
        <h1>My Recipes</h1>
    </div>
    <ul>
      {recipes && recipes.map(recipe=>
        <li key={recipe.id}>{recipe.recipe_name}</li>)}
    </ul></>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
