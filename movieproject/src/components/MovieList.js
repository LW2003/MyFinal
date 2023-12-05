import react from 'react';
import '../App.css';

const MovieList = (props) => {
    return (
        <>
        {props.movies.map((movie, index) => (
            <div className={'movieobject'}>
                <img src={movie.Poster} alt="movie poster" width={340} height={500} border={15} ></img>
                <h1>{movie.Title}</h1>
                <h2>Release Year: {movie.Year}</h2>
                <h3>Media Type: {movie.Type}</h3>
                <h4>IMDB ID: {movie.imdbID}</h4>

            </div>
        ))}
        
        </>
    );
        };

export default MovieList;

   
    