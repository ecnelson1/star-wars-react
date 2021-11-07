import React, {useState, useEffect} from 'react';
import CharacterList from '../../components/character/CharacterList';
import { getCharactersBySearch} from '../../services/api-utils';


const ListContainer = () => {
    const [search, setSearch] = useState('')
    const [characters, setCharacters] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pages, setPages] = useState();
    const [loading, setLoading] = useState(true)
   

    const handleNext = () => {
        if(currentPage < pages){
      setCurrentPage(currentPage + 1 );
        } else {
            return;
        }
    };
    const handlePrev = () => {
        if(currentPage > 1){
      setCurrentPage(currentPage - 1);
        } else {
            return;
        }
    };

    const handleSearchChange = (event) =>{
        setSearch(event.target.value)
    }

    const handleSubmit= (event) =>{
        event.preventDefault();
        getCharactersBySearch(search, currentPage)
        .then((res)=>setPages(res.count/10))
        .then(setLoading(false));
    }

      useEffect(() => {
       getCharactersBySearch(search, currentPage)
         .then((res) => {
           setCharacters(res.sorted);
           const count = res.count;
           setPages(count / 10);
         })
         .finally(setLoading(false));
     }, [search, currentPage]);

    return (
      <div title='list-container'>
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
            <button onClick={handlePrev}>Prev Page</button>
            <button onClick={handleNext}>Next Page</button>
          </>
        )}
      </div>
    );
};

export default ListContainer;
