import './Card.css';
const CardTest = ({picture,age,name,city,skills}) => {
    const handleChange = (event) => {
        //getting the value of the element that triggered the onChange event:
        console.log(event.target.value)
    }
    return(
        <div className="card">
            <img className="img" src={picture} alt={name}/>
            <div className="card-content">
                <h2>{name}</h2>
                <p>Age: {age}</p>
                <p>City: {city}</p>
                <label>A list of Skills:</label>
                <ul className="list">{skills.map((skills, index) =>(<li key={index}>{skills}</li>))}</ul>
                <div>
                    <label>Graduated: </label>
                    <input type="radio"  name="gender" value= 'Yes' onChange={handleChange}/>
                    <label>Yes </label>
                    <input type="radio" name="gender" value= 'No' onChange={handleChange}/>
                    <label>No </label>
                </div>

            </div>
        </div>
    )
}
export default CardTest;