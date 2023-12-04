import react from 'react';
import '../App.css';

const MovieList = (props) => {
    return (
        <>
        {props.movies.map((movie, index) => (
            <div className={'movieobject'}>
                <img src={movie.Image} alt="movie poster" width={350} height={500} ></img>
                <h1>{movie.title}</h1>
                <h2>{movie.year}</h2>
                <h3>{movie.stars}</h3>
            </div>
        ))}
        
        </>
    );
        };

export default MovieList;

   
    