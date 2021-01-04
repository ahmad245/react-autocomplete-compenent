import Autocomplete from './Autocomplete';
import './App.css';

function App() {
  return (
    <div className="App">
    <Autocomplete
      suggestions={['White', 'Black', 'Green', 'Blue', 'Yellow', 'Red']}
    />
  </div>
  );
}

export default App;
