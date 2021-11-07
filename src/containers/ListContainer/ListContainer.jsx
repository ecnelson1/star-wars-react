import React, {useState, useEffect} from 'react';
import CharacterList from '../../components/character/CharacterList';
import { reducedAvg } from '../../hooks/reduceAvg/reduceAvg-hook';
import { getCharactersBySearch } from '../../services/api-utils';
import './listContainer.css'

const ListContainer = () => {
    const [search, setSearch] = useState('')
    const [characters, setCharacters] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pages, setPages] = useState();
    const [loading, setLoading] = useState(true)
    const averages = reducedAvg(characters);
    
    

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
        setCurrentPage(1)
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
      <div title="list-container">
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            placeholder="Enter character name to search"
            value={search}
            onChange={handleSearchChange} className='searchField'
          />
        </form>
        {loading ? (
          <h1 className='loading'>LOADING...</h1>
        ) : (
          <>
            <CharacterList characters={characters} />{" "}
            <div className='avg'>
            <span className="avgM"> Avg Mass for known sizes: {averages[0].mass}</span>
            <span className="avgH">Avg Height for known sizes: {averages[0].height}</span>
            </div>
            <div className='pageNav'>
            <button onClick={handlePrev}>Prev Page</button>
            <button onClick={handleNext}>Next Page</button>
            </div>
          </>
        )}
      </div>
    );
};

export default ListContainer;
