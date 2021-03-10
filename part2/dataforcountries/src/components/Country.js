import React, { useState } from 'react'
import Weather from "./Weather"
const Country = ( {country} ) => {
    const [value, setValue] = useState(false)
    const [text, setText] = useState("Show")
    const handleClick = (e) => {
        e.preventDefault();
        if(value === false) {
            setValue(true)
            setText("Hide")
            } else {
            setValue(false)
            setText("Show")
            }
        } 
        if(value === false) {
            return (
            <div>
                <p>{country.name}<button value={value} onClick={handleClick}>{text}</button></p>
            </div>
        )} else {
          return ( 
          <div>
            <h2>{country.name}</h2>
                <p>Capital:{country.capital}</p>
                <p>Population:{country.population}</p>
                <h3>Languages</h3>
                <ul>
                    {country.languages.map(language => {
                      return <li key={language.name}>{language.name}</li>
                    })}
                </ul>
                <img src={country.flag} alt={country.name + " flag"} width="200"height="200"></img>
                <Weather country={country} value={value} />
                <button value={value} onClick={handleClick}>{text}</button>
          </div>
          )
        }
}

export default Country