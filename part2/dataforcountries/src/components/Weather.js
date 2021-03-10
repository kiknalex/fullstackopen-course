import React, { useState, useEffect } from 'react' 
import axios from "axios"
const Weather = ({ country, value }) => {
    const api_key = process.env.REACT_APP_WEATHER_API_KEY
    const [weather, setWeather] = useState()
    useEffect(() => {
        axios
        .get('http://api.weatherstack.com/current', {
            params: {
                access_key: api_key,
                query: country.capital
            }
        })      
        .then(response => {
            setWeather(response.data);
        })
    }, [value])
    if(weather != undefined) {return (
        <div>
            {"Whats this:", console.log(weather)}
            <h2>Weather in {country.capital}</h2>
            <p>Temperature: {weather.current.temperature}</p>
            <img src={weather.current.weather_icons[0]}></img>
            <h3>Wind: <p>{weather.current.wind_speed} MPH direction {weather.current.wind_dir}</p></h3>
            
        </div>
    ) } else {
        return <h2>Loading...</h2>
    }
}

export default Weather