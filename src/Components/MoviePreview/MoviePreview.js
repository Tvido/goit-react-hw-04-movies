import React from 'react';

const MoviePreview = ({
  poster_path,
  title,
  date,
  popularity,
  overview,
  genres,
}) => (
  <>
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w300${poster_path}`}
        alt={title}
        className=""
      />
    </div>
    <div className="">
      <h1>
        {title}({date})
      </h1>
      <p>User Score: {Math.round(popularity)}%</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h3>Genres</h3>
      <ul>
        {genres.map(genre => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </div>
  </>
);

export default MoviePreview;
