import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
export default function App() {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState('react hooks');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const searchInputRef = useRef();

  const getResults = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://hn.algolia.com/api/v1/search?query=${query}`
      );
      setResults(response.data.hits);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };
  const handleSearch = event => {
    event.preventDefault();
    getResults();
  };
  const handleClearSearch = () => {
    setQuery('');
    searchInputRef.current.focus();
  };
  return (
    <>
      <form action=''>
        <input
          value={query}
          type='text'
          onChange={event => setQuery(event.target.value)}
          ref={searchInputRef}
        />
        <button type='submit' onClick={handleSearch}>
          Search
        </button>
        <button type='button' onClick={handleClearSearch}>
          Clear
        </button>
      </form>
      {loading ? (
        <div>Loading Results...</div>
      ) : (
        <ul>
          {results.map(result => (
            <li key={result.objectID}>
              <a href={result.url}>{result.title}</a>
            </li>
          ))}
        </ul>
      )}
      {error && <div>{error.message}</div>}
    </>
  );
}
