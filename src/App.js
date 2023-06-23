import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from "./ClothingStore/Home";
import About from "./ClothingStore/About";
import Contact from "./ClothingStore/Contact";
import Error from "./ClothingStore/Error";
import Layout from "./ClothingStore/Layout";
import RecipeDetails from "./ClothingStore/Meals/RecipeDetails";
import Recipes from "./ClothingStore/Meals/Recipes";
function App() {
  return (
    <BrowserRouter>
        <Layout/>
        <Routes>
            <Route  path="home" element={<Home/>}/>
            <Route  path="about" element={<About/>}/>
            <Route  path="contact" element={<Contact/>}/>
            <Route path="recipe" element={<Recipes/>} />
            <Route path="/recipeDetails/:id" element={<RecipeDetails/>} />
            <Route path="*" element={<Error />} />
        </Routes>
    </BrowserRouter>
  );
}
export default App;
