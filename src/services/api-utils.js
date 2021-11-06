export const getCharacters = async (searchTerm) => {
    const res = await fetch(`https://swapi.dev/api/people/?search=${searchTerm}`);
    const results = await res.json();
    return results.results
}
