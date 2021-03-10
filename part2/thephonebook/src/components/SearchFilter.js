

const SearchFilter = ({ searchString, handleSearchChange }) => {
    return (
    <div>
        <h2>Phonebook</h2>
        Search person: <input value={searchString} onChange={handleSearchChange} />        
    </div>
    )
}
export default SearchFilter;