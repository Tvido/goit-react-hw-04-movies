import React from 'react';

const MoviePreview = ({ poster_path, title }) => (
  <div className="">
    <div className="">
      <img src={poster_path} className="MovieList--item-img" alt={title} />
    </div>
    <div className="">
      <h5 className="">{title}</h5>
    </div>
  </div>
);

export default MoviePreview;
