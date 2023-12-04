import react from 'react';

const MovieList = (props) => {
    return (
        <>
        {props.movies.map((movie, index) => (
            <div>
                <img src={movie.Image} alt="movie poster" />
            </div>
        ))}
        
        </>
    );
        };

export default MovieList;

   
    