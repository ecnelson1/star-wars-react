export const getCharactersBySearch = async (searchTerm) => {
    const res = await fetch(`https://swapi.dev/api/people/?search=${searchTerm}`);
    const results = await res.json();
    return results.results
}
export const getCharactersByPage = async (pageNumber) => {
  const res = await fetch(`https://swapi.dev/api/people/?page=${pageNumber}`);
  const results = await res.json();
  return results;
};
