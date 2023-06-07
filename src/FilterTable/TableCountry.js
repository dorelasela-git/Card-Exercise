const TableCountry =(country)=>{
    return(
        <tr>
            <td>{country.countryName}</td>
            <td>{country.population}</td>
        </tr>
    )
}
export default TableCountry;