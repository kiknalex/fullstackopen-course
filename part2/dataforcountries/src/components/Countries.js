import React, { useState, useEffect } from 'react' 
import Country from './Country'
import Weather from './Weather'
const Countries = ({ searchedCountries }) => {
    const filteredCountries = () => {
        if(searchedCountries.length > 1 && searchedCountries.length < 11) {
        return searchedCountries.map(country => {
         //return <p key={country.name}>{country.name}</p>
         return <Country
         key={country.name}
         country={country}
          />
        })
     } else if(searchedCountries.length === 1) {
         return (
            <div>
                <h2>{searchedCountries[0].name}</h2>
                <p>Capital:{searchedCountries[0].capital}</p>
                <p>Population:{searchedCountries[0].population}</p>
                <h3>Languages</h3>
                <ul>
                    {searchedCountries[0].languages.map(language => {
                      return <li key={language.name}>{language.name}</li>
                    })}
                </ul>
                <img src={searchedCountries[0].flag} alt={searchedCountries[0].name + " flag"} width="200"height="200"></img>
                <Weather country={searchedCountries[0]} />
            </div>
         )} else {
            return <p>Too many matches,specify another filter</p>
         }
     }
    return (
        <div>
            {filteredCountries()}
        </div>
    )
}
export default Countries;