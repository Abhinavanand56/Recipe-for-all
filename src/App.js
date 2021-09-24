import Axios from "axios";
import { useState } from "react";
import "./App.css";
import RecipeTile from "./RecipeTile";

function App() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);
  const [healthLabel, sethealthLabel] = useState("vegan")

  const YOUR_APP_ID = "b7e0361f"
  const YOUR_APP_KEY = "d4813e1bf9ffa1f6f4579b424bdcb203"

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=${healthLabel}`;

  const getRecipes = async () => {
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data.hits);
  };
  // await and async is used to fetch an API and get the url before the photo even loads

  const onSubmit = (e) => {
    e.preventDefault(); //to prevent reloading of the page
    getRecipes();
  };

  return (
    <div className="app">
    <h1>Food Delicacies</h1>
    <p className="paragraph">"Make what you like"</p>
    <form className="app__searchForm" onSubmit={onSubmit}>
    <input type="text" 
          className="app__input"
          placeholder="Enter Ingredient"
          autoComplete="Off"
          value={query}
          onChange={(e) => setquery(e.target.value)}/>
    <input className="app__submit" type="submit" value="Search" />
    <select className="app__healthLabels">
      <option onClick={() => sethealthLabel("vegan")}>
      Vegan
      </option>
      <option onClick={() => sethealthLabel("vegetarian")}>
      Vegetarian
      </option>
      <option onClick={() => sethealthLabel("dairy-free")}>
      Dairy-free
      </option>
      <option onClick={() => sethealthLabel("paleo")}>
      Paleo
      </option>
      <option onClick={() => sethealthLabel("gluten-free")}>
      Gluten-free
      </option>
      <option onClick={() => sethealthLabel("wheat-free")}>
      Wheat-free
      </option>
      <option onClick={() => sethealthLabel("low-sugar")}>
      Low-Sugar
      </option>
      <option onClick={() => sethealthLabel("egg-free")}>
      Egg-free
      </option>
      <option onClick={() => sethealthLabel("peanut-free")}>
      Peanut-free
      </option>
      <option onClick={() => sethealthLabel("soy-free")}>
      Soy-free
      </option>
      <option onClick={() => sethealthLabel("fish-free")}>
      Fish-free
      </option>
    </select>
    </form>
    
    <div className="app__recipes">
        {recipes !== [] &&
          recipes.map((recipe) => {
            return <RecipeTile recipe={recipe}/>;
          })}
      </div>
    </div>
  );
}

export default App;
