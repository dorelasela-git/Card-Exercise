import CardChild from "./CardChild";
const CardParent = ({data})=>{
    return(
        <div>
            {data.map((item, index) => (
                <CardChild
                    key={index}
                    picture={item.picture}
                    name={item.name}
                    age={item.age}
                    city={item.city}
                    skills={item.skills}
                    description={item.description}
                />))}
        </div>
    )
}
export default CardParent;