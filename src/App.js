import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from "./CookingSite/Meals/Home";
import About from "./CookingSite/Meals/About";
import Contact from "./CookingSite/Meals/Contact";
import Error from "./CookingSite/Meals/Error";
import Layout from "./CookingSite/Meals/Layout";
import RecipeDetails from "./CookingSite/Meals/RecipeDetails";
import Recipes from "./CookingSite/Meals/Recipes";
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
