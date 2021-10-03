import './App.scss';
import { CountryTable } from './components/country-table/CountryTable';
import { useCountries } from './hooks/useCountries';

function App() {
  const { countries, loading, error } = useCountries();

  return (
    <div className="App">
      <h1>Country data</h1>
      {loading && <p>Loading...</p>}
      {countries && <CountryTable countries={countries} />}
      {error && <p>Error! Something went wrong when fetching the data ☠</p>}
    </div>
  );
}

export default App;
