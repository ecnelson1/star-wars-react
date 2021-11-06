import { useEffect, useState } from 'react';
import { getAllCharacters } from '../services/api-utils';

export const useCharacters = () => {
    const [loading, setLoading] = useState(true)
    const [characters, setCharacters] = useState([]);

    useEffect(()=> {
        getAllCharacters()
        .then((characters)=> setCharacters(characters))
        .finally(()=> setLoading(false));
    }, []);
    return [loading, characters];
}
