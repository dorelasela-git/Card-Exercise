import '../Meals/Style/styleRecipeCard.css'
const RecipeCard =({asd})=>{
    return(
        <div className="card">
            <div className="card-details">
                <p className="text-title">{asd.name}</p>
                <p className="text-body">{asd.description}</p>
            </div>
            <button className="card-button"><a href={`/recipeDetails/${asd.id}`}>More info</a></button>
        </div>
    )
}
export default RecipeCard;
