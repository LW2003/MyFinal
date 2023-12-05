import react from 'react';
import '../App.css';

const MovieList = (props) => {
    return (
        <>
        {props.movies.map((movie, index) => (
            <div className={'movieobject'}>
                <img src={movie.Poster} alt="movie poster" width={210} height={300} ></img>
                <h1>{movie.Title}</h1>
                <h2>{movie.Year}</h2>
            </div>
        ))}
        
        </>
    );
        };

export default MovieList;

   
    