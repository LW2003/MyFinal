import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList';
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title:"Scream",
      year:1996,
      stars:"Neve Campbell, Courteney Cox",
      Image:"https://m.media-amazon.com/images/M/MV5BMjA2NjU5MTg5OF5BMl5BanBnXkFtZTgwOTkyMzQxMDE@._V1_.jpg"
    }
  ]);
  return <div>
    <MovieList movies={movies} />
    </div>
  



}

export default App;
