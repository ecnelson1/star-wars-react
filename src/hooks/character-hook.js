import { useEffect, useState } from 'react';
import { getCharacters } from '../services/api-utils';

export const useCharacters = (searchTerm) => {
    const [loading, setLoading] = useState(true)
    const [characters, setCharacters] = useState([]);
   
    useEffect(()=> {
        getCharacters(searchTerm)
        .then((characters)=> setCharacters(characters.sort((a,b) =>{ if(a.name<b.name){return -1} if(a.name>b.name){return 1} return 0})))
        .finally(()=> setLoading(false));
    }, [searchTerm]);
    return [loading, characters];
}
