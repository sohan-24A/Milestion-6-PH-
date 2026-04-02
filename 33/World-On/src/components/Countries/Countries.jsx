import React, { use, useState } from 'react';
import Country from '../country/Country';
import './Countries.css'

const Countries = ({ countriesPromise }) => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([])
    const handleVisitedCountries = (country) => {
        // console.log('click');
        const visitedCountrie = [...visitedCountries, country]
        setVisitedCountries(visitedCountrie)
    }
    const handleVisitedFlag = (country) => {
        // console.log(country.flags.flags.png);
        const visitedFlagsCountry = [...visitedFlags, country]
        setVisitedFlags(visitedFlagsCountry)
    }
    const countriesData = use(countriesPromise)
    const countriesAll = countriesData.countries;
    return (
        <div>
            <h1>Countries : {countriesAll.length}</h1>
            <h3>Total visited countrirs: {visitedCountries.length}</h3>
            <ol>
                {visitedCountries.map(county => <li key={county.cca3.cca3}>{county.name.common}</li>)}
            </ol>
            <ol className='all-img'>
                {visitedFlags.map((countryFlag,index) =>
                    <img key={index} className='img' src={countryFlag.flags.flags.png} alt="" />)}
            </ol>
            <div className="countries">
                {countriesAll.map(country => <Country
                    key={country.cca3.cca3}
                    country={country}
                    handleVisitedFlag={handleVisitedFlag}
                    handleVisitedCountries={handleVisitedCountries}></Country>)}
            </div>
        </div>
    );
};

export default Countries;