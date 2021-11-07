import React, {useState, useEffect} from 'react';
import CharacterList from '../../components/character/CharacterList';
import { useCharacters } from '../../hooks/character-hook';
import { getCharactersBySearch, getCharactersByPage } from '../../services/api-utils';

const ListContainer = () => {
    const [search, setSearch] = useState('')
    const [loading, characters, setCharacters] = useCharacters(search);
    const [currentPage, setCurrentPage] = useState(1);

    const handleNext = () => {
      setCurrentPage(currentPage + 1);
    };
    const handlePrev = () => {
      setCurrentPage(currentPage - 1);
    };

    const handleSearchChange = (event) =>{
        setSearch(event.target.value)
    }

    const handleSubmit= async (event) =>{
        event.preventDefault();
        await getCharactersBySearch(search);
    }

     useEffect(() => {
       getCharactersByPage(currentPage).then((characters) =>
         setCharacters(
           characters.results.sort((a, b) => {
             if (a.name < b.name) {
               return -1;
             }
             if (a.name > b.name) {
               return 1;
             }
             return 0;
           })
         )
       );
     }, [currentPage, setCharacters]);

    return (
      <div>
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            placeholder="Enter character name to search"
            value={search}
            onChange={handleSearchChange}
          />
        </form>
        {loading ? (
          <h1>LOADING...</h1>
        ) : (
          <>
            <CharacterList characters={characters} />{" "}
            <button onClick={handleNext}>Next Page</button>
            <button onClick={handlePrev}>Prev Page</button>
          </>
        )}
      </div>
    );
};

export default ListContainer;
