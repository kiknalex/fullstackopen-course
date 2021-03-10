import React, { useState, useEffect } from 'react'  
import axios from "axios";
import Countries from './components/Countries'
import Search from './components/Search'
import Country from './components/Country'
function App() {
  const [ countriesData, setCountriesData ] = useState([]);
  const [ searchString, setSearchString ] = useState('');
  const [ searchedCountries, setSearchedCountries ] = useState([]);
  const [ stateLoaded, setStateLoaded] = useState(false);
  useEffect(() => {
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      setCountriesData(response.data);
      setStateLoaded(true);
    })
  }, [])
  useEffect(() => {
    if(stateLoaded === true) {
       const filteredCountries = countriesData.filter(country => {
        return country.name.toLowerCase().includes(searchString.toLowerCase());
      })
      setSearchedCountries(filteredCountries);
  }
  }, [searchString])
  return (
    <div>
     <Search searchString={searchString} setSearchString={setSearchString} />
     <Countries
     searchedCountries={searchedCountries} />
    </div>
  );
}

export default App;
