export const getAllCharacters = async () => {
    const res = await fetch('https://swapi.dev/api/people');
    const results = await res.json();
    return results.results
}
