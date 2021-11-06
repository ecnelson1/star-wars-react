import React, {useState} from 'react';
import CharacterList from '../../components/character/CharacterList';
import { useCharacters } from '../../hooks/character-hook';
import { getCharacters } from '../../services/api-utils';

const ListContainer = () => {
    const [search, setSearch] = useState('')
    const [loading, characters] = useCharacters(search);



    const handleSearchChange = (event) =>{
        setSearch(event.target.value)
    }

    const handleSubmit= async (event) =>{
        event.preventDefault();
        await getCharacters(search);
    }
    
    return (

        <div>
        <form className='search-form' onSubmit={handleSubmit}>
        <input placeholder= 'Enter character name to search' value={search} onChange={handleSearchChange} />
        </form>
            {loading ? (<h1>LOADING...</h1>)
            : (<CharacterList characters={characters}/>)}
        </div>
    );
};

export default ListContainer;
