import react from 'react';
import '../App.css';

const MovieList = (props) => {
    return (
        <>
        {props.movies.map((movie, index) => (
            <div className={'movieobject'}>
                <img src={movie.Poster} alt="movie poster"></img>
                <h2>{movie.Title}</h2>
                <h2>Release Year: {movie.Year}</h2>
                <h4>Media Type: {movie.Type}</h4>
                <h4>IMDB ID: {movie.imdbID}</h4>

            </div>
        ))}
        
        </>
    );
        };

export default MovieList;

   
    