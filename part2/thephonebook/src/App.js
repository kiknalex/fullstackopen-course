import React, { useState, useEffect } from 'react'
import PersonForm from "./components/PersonForm"
import SearchFilter from "./components/SearchFilter"
import Numbers from "./components/Numbers"
import personService from './services/persons'
import Notification from './components/Notification'
const App = () => {
  const [ persons, setPersons ] = useState([]);
  const [ personsCopy, setPersonsCopy ] = useState(persons);
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchString, setSearchString ] = useState('')
  const [ errMsg, setErrMsg ] = useState(null)
  const [ msgColor, setMsgColor ] = useState("red")
  
  useEffect(() => {
    personService
    .getAll()
    .then(initialPersons => {
      setPersons(initialPersons);
      setPersonsCopy(initialPersons);
    })
  }, [])
  const handleSearchChange = (event) => setSearchString(event.target.value);
  useEffect(() => {
    setPersons(persons.filter(persons => persons.name.toLowerCase().includes(searchString.toLowerCase())));
    if(searchString.length === 0){
      setPersons(personsCopy)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchString]); 
  const handleNameChange = event => setNewName(event.target.value);
  const handleNumberChange = event => setNewNumber(event.target.value);

  const addNewPerson = (event) => { 
    event.preventDefault();
    if(persons.some(e => e.name === newName)) {
      if (window.confirm(`${newName} already exists, do you want to replace old number?`)) {
      const person = persons.find(person => person.name === newName)
      const changedPerson = { ...person, number: newNumber }
      personService
      .update(person.id, changedPerson)
      .then(returnedPerson => {
        console.log(changedPerson)
        setPersons(persons.map(currentPerson => currentPerson.id !== person.id ? currentPerson : returnedPerson))
      })
      .catch(err => {
        setMsgColor("red")
        setErrMsg(`${newName} is already deleted from database, reload the page`)
        setTimeout(() => {
          setErrMsg(null)
        }, 5000)
      })
    }
    } else {
    const nameObject = {
      name: newName,
      number: newNumber
    }
    personService
    .create(nameObject)
    .then(newName => {
      setMsgColor("green")
      setErrMsg(`Added ${newName.name}`)
        setTimeout(() => {
          setErrMsg(null)
        }, 5000)
    })
    setPersons(persons.concat(nameObject));
    setPersonsCopy(persons.concat(nameObject));
    setNewName("");
    setNewNumber("");
    }
  }
  
  const buttonDeletePerson = (id) => {
    if(window.confirm("Do you really want to delete?")) {
    personService
    .deletePerson(id)
    .catch(error => {
      console.log(error);
    })
    const tempPersons = [...persons]
    tempPersons.splice((tempPersons.map(element => element.id).indexOf(id)),1)
    setPersons(tempPersons)
    setPersonsCopy(tempPersons)
    }
  }
  return (
    <div>
      <SearchFilter 
      searchString={searchString} 
      handleSearchChange={handleSearchChange}
      />
      <Notification message={errMsg} color={msgColor} />
      <PersonForm 
      addNewPerson={addNewPerson}
      handleNameChange={handleNameChange}
      handleNumberChange={handleNumberChange}
      newName={newName}
      newNumber={newNumber}
      />
      <Numbers 
      persons={persons}
      buttonDeletePerson={buttonDeletePerson}
      />
    </div>
  )
}

export default App