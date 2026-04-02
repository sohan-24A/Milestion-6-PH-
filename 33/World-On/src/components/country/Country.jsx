import React, { useState } from 'react';
import './Country.css'

const Country = ({ country,handleVisitedCountries,handleVisitedFlag}) => {
    // console.log(country.name.common);
    const [Visited, setVisited] = useState(false)
    const handleClick = () => {
        // if(Visited){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }
        setVisited(Visited?false:true)
        handleVisitedCountries(country)
      
    }
    return (
        <div className={`country ${Visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} width="150" />
            <h4> Name : {country.name.common}</h4>
            <p>Population : {country.population.population}</p>
            <p>Area : {country.area.area}</p>
            <button onClick={handleClick}>
                {Visited ? 'Visited' : 'Not Visited'}
            </button>
            <button onClick={()=>handleVisitedFlag(country)}>Add visited Flag :</button>
        </div>
    );
};

export default Country;

/**
 * 1. inline css ( style object)
 * 2.
 */