import React from "react";
import style from "./recipe.module.css";
const Recipe = ({title,ingredients,calories,img}) =>{
    {calories = calories.toString().slice(0,4).concat(" Calories")}
    return (
        <div className={style.recipe}>
            <h1>
                {title}
            </h1>
            <p>{calories}</p>
            <img src={img} alt=""/>
            <ul>
                {ingredients.map(ingredient=>(
                    <li>{ingredient.text}</li>
                ))}
            </ul>

        </div>
    );
}
export default Recipe;