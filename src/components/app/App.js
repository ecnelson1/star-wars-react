import './App.css';
import PaginatedCharacters from '../../containers/ListContainer/ListContainer';

function App() {

  return (
    <PaginatedCharacters charactersPerPage={10}/>
  );
}

export default App;
