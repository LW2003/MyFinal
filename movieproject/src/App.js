import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList';
import SearchBox from './components/SeachBox';

import { useEffect, useState } from 'react';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovierequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=59aff319`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovierequest(searchValue);
  }, [searchValue]);
  
  return (
  <div>
    <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
    <MovieList movies={movies} />
    </div>
  );

    






}
export default App;
