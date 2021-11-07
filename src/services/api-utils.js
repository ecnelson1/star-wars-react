export const getCharactersBySearch = async (searchTerm, pageNumber) => {
    const res = await fetch(`https://swapi.dev/api/people/?search=${searchTerm}&page=${pageNumber}`);
    const results = await res.json();
    const count = results.count
    const sorted = results.results.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    return {sorted, count}
};


