import {useEffect, useState} from "react";
import TableCountry from "./TableCountry";
import './Filter.css'
const FilterComponent =()=>{
    const country=[
        {
            key: 1,
            countryName:'Albania',
            population: 15247
        },
        {
            key: 2,
            countryName:'Austria',
            population: 52963
        },
        {
            key: 3,
            countryName:'Korea',
            population: 98527
        }
    ]
    const[filterCountry, setFilterCountry]= useState('');
    const[filteredCountries, setFilteredCountries]= useState(country);

    const handleChange =(e)=>{
        setFilterCountry(e.target.value)
    }
    useEffect(()=>{
        const filter = country.filter(country => country.countryName.toLowerCase().includes(filterCountry.toLowerCase()));
        setFilteredCountries(filter);
        } ,[filterCountry, country]);

    return(
        <div>
            <h1>Filter Country</h1>
            <input type="text" placeholder="Filter Country" value={filterCountry} onChange={handleChange}/>
            <div className="table">
                <table className="table">
                    <thead>
                    <tr>
                        <th>Country Name</th>
                        <th>Population</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredCountries.map((countries)=>(
                        <TableCountry key={country.id} {...countries}/>
                    ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}
export default FilterComponent;