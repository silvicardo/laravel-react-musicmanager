import React, {Component} from 'react';

const GenreCard = ({name, image}) => (
  <div className="card" style={{width: '18rem'}}>
    <img src={image} className="card-img-top" alt="..." style={{maxWidth: '100%'}}/>
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
);

export default GenreCard;
