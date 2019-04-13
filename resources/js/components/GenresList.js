import React, {Component} from 'react';
import GenreCard from './GenreCard';

const GenresList = ({fallbackImage, genres}) => (
  <div className="container py-5">
    <div className="card-columns">
      { genres.map(
          (genre, index) =>(
            <GenreCard
              key={index}
              name={genre}
              image={genre.image || fallbackImage}
              />
            )
        )
      }
    </div>
  </div>
);

GenresList.defaultProps = {
  fallbackImage: "../images/spotifyLogo.png",
};

export default GenresList;
