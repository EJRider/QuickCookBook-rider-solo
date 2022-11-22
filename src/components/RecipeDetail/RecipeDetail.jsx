import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function RecipeDetail(){
    const params = useParams();
    const dispatch = useDispatch();
    
    useEffect(()=>{

    },[params.id])
    return (
        <>
        RecipeDetails
        </>
    )
}

export default RecipeDetail;