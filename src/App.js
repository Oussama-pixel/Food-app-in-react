import './App.css';
import React,{useEffect,useState} from "react";
import Recipe from "./recipe";
function App() {
  const APP_ID  = "1f4d4775";
  const APP_KEY = "58501f624e9d3eb7e87bf0c5040d9581";
  const [search,setSearch] = useState('');
  const [recipes,setRecipes] = useState([]);
  const [query,setQuery] = useState('chicken');
  useEffect(()=>{
    getRecipes();
  });
  const getRecipes= async()=>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`);
    const data = await response.json();
    setRecipes(data.hits);
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }
  return (
    <div className="App">
      <form className="search-form" onSubmit={handleSubmit}>
        <input value={search} onChange={(e)=>{
    setSearch(e.target.value)}} className="search-bar" type="text"/>
        <button className="search-button" type="submit">
          submit
        </button>
      </form>
      <div className="recipes">
      {recipes.map(recipe=>(
        <Recipe key={recipe.recipe.label} ingredients={recipe.recipe.ingredients} title={recipe.recipe.label} calories={recipe.recipe.calories} img={recipe.recipe.image} />
      ))}
      </div>
    </div>
  );
}

export default App;
