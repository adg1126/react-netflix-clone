import React, { useEffect } from 'react';
import _ from 'lodash';
import './MovieRow.css';
import { imgBaseUrl } from '../../baseurls';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

export default function MovieRow({
  fetchMoviesStart,
  setTrailerurl,
  title,
  movieType,
  isLargeRow,
  movies,
  trailerUrl
}) {
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1
    }
  };

  useEffect(() => {
    fetchMoviesStart(movieType);
  }, [fetchMoviesStart, movieType]);

  const handleClick = movie => {
    movieTrailer(movie?.name)
      .then(url => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerurl(urlParams.get('v'));
      })
      .catch(err => console.log(err.message));
  };

  return (
    <div className='movieRow'>
      <h2>{title}</h2>
      <div className='movieRow_posters'>
        {movies && movies.length
          ? movies.map(m => (
              <img
                className={`movieRow_poster ${
                  isLargeRow && 'movieRow_posterLarge'
                }`}
                onClick={() => handleClick(m)}
                key={m.id}
                src={`${imgBaseUrl}${
                  isLargeRow ? m.poster_path : m.backdrop_path
                }`}
                alt={m.name}
              />
            ))
          : null}
      </div>
      {!_.isEmpty(trailerUrl) ? (
        <YouTube videoId={trailerUrl} opts={opts} />
      ) : null}
    </div>
  );
}
