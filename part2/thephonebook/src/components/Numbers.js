const Numbers = ({ persons, buttonDeletePerson }) => {

    return (
    <div>
      <h2>Numbers</h2>
      {persons.map(person =>
        <p key={person.name}>{person.name} {person.number} <button onClick={() => buttonDeletePerson(person.id)}>Delete</button></p>
        )}
    </div>
    )
}

export default Numbers;