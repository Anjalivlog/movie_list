import React from 'react';
import './GenreFilter.css';

const GenreFilter = ({ genres, onGenreClick }) => {
  return (
    <div className="genre-filter">
    <div><h2>Filter by Genre</h2></div>
     
     {genres.map((genre, index) => (
        <button key={index} onClick={() => onGenreClick(genre)} className="genre-button">
          {genre}
        </button>
      ))}
     
    </div>
  );
};

export default GenreFilter;