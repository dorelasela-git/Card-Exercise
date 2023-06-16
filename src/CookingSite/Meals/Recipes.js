import RecipeCard from "./RecipeCard";
import data from "./MealsData";
const Recipes=()=>{
    return(
        <>
            <h2 style={{textAlign: 'center'}}>Meal List</h2>
        <div style={
            {
                display: 'flex',
                width: '100%',
                height: '100vh',
                justifyContent: 'space-evenly'
            }
        }>
            {data.map(meal=>{
               return <RecipeCard asd={meal}/>
            })}

        </div>
        </>
    )
}
export default Recipes;