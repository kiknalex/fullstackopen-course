
const PersonForm = ({ addNewPerson, handleNameChange, handleNumberChange, newName, newNumber }) => {
    return (
        <div>
            <h2>Add new</h2>
            <form>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
        <div>
          <button type="submit" onClick={addNewPerson}>add</button>
        </div>
      </form>
        </div>
    )
  }

export default PersonForm