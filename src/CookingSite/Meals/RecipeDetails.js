import { useParams } from "react-router-dom";
import data from "./MealsData";
import './Style/styleRecipeDetails.css';

const RecipeDetails = () => {
    const { id } = useParams();
    const meal = data.find((meal) => meal.id === parseInt(id));

    if (!meal) {
        return <p>Meal not found.</p>;
    }

    return (
        <div style={{display:'grid', placeItems:'center'}}>
        <div className="recipe-details-container">
            <h2 className="recipe-details-heading">Recipe Details</h2>
            <h3 className="recipe-details-name">{meal.name}</h3>
            <p className="recipe-details-description">{meal.description}</p>
            <p className="recipe-details-instructions">{meal.instructions}</p>
        </div>
        </div>
    );
};

export default RecipeDetails;
