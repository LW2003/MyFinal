import React from 'react';

const SearchBox = (props) => {
    return (
        <div>
            <input className='searchbox' 
            value={props.value}
            onChange={(event)=> props.setSearchValue(event.target.value)}
            placeholder="Enter Media Title Here"></input>
            
        </div>
    );
}

export default SearchBox;