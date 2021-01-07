import React, { useState, useEffect } from 'react'
import PersonForm from "./components/PersonForm"
import SearchFilter from "./components/SearchFilter"
import Numbers from "./components/Numbers"
const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ personsCopy, setPersonsCopy ] = useState(persons);
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchString, setSearchString ] = useState('')
  const handleSearchChange = (event) => setSearchString(event.target.value);
  useEffect(() => {setPersons(persons.filter(person => person.name.toLowerCase().includes(searchString.toLowerCase())));
    if(searchString.length === 0){
      setPersons(personsCopy)
    }
  }, [searchString]); 
  const handleNameChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (event) => setNewNumber(event.target.value);

  const addNewPerson = (event) => {
    event.preventDefault();
    if(persons.some(e => e.name === newName)) {
      setNewName("");
      alert(`${newName} already exists in the phonebook`);
    } else {
    const nameObject = {
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(nameObject));
    setPersonsCopy(persons.concat(nameObject));
    setNewName("");
    setNewNumber("");
    }
  }
  return (
    <div>
      <SearchFilter 
      searchString={searchString} 
      handleSearchChange={handleSearchChange}
      />
      <PersonForm 
      addNewPerson={addNewPerson}
      handleNameChange={handleNameChange}
      handleNumberChange={handleNumberChange}
      newName={newName}
      newNumber={newNumber}
      />
      <Numbers persons={persons} />
    </div>
  )
}

export default App