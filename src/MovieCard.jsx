import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
          <div>
            <p>{movie.Year}</p>
          </div>
          <div>
          <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://i.pinimg.com/736x/35/81/32/3581323208116c9e8f711bbd8e936525--spiderman-ultimate-ultimate-spider-man.jpg'} alt={movie.Title} />
        </div>
        <div>
          <span>{movie.Type}</span>
          <h3>{movie.Title}</h3>
        </div>
       </div>
  );
}

export default MovieCard;